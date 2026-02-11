import localforage from "localforage";
import { UserScript } from "./script";
import "./accessor";
import "./script";
import { surfHandler } from "./surfHandler";
import { initHandlers } from "./handlers";
import "../types/loadTimeData";

function log(...args: any[]) {
  console.log(...args);
  let i = document.getElementById("untrusted-iframe")! as HTMLIFrameElement;
  if (i.src.endsWith("preload.html"))
    i.contentWindow?.postMessage(args.join(" "));
}

async function preload() {
  let hasError = false;
  let errorCount = 0;
  try {
    log("Preparing...");

    initHandlers();
    console.log("Handlers initialized");

    enum MessageTypes {
      REQUEST_DATA = "requestData",
      RESIZE_IFRAME = "resizeIframe",
      SAVE_GAME_DATA = "saveGameData",
      GET_GAME_DATA = "getGameData",
      RECORD_ACTIONS = "recordActions",
      RECORD_THEME = "recordTheme",
      RECORD_GAME_MODE = "recordGameMode",
      RECORD_BODY_COLOR = "recordBodyColor",
      RECORD_OUTFIT_COLOR = "recordOutfitColor",
      RECORD_OUTFITS = "recordOutfits",
      RECORD_HAIR_COLOR = "recordHairColor",
      RECORD_HAIR_STYLE = "recordHairStyle",
      RECORD_ACCESSORY = "recordAccessory",
      OPEN_SIDEBAR_APP = "openSidebarApp",
    }

    window.addEventListener("message", (ev) => {
      let data = ev.data;
      let src = ev.source as WindowProxy;
      let untrustedOrigin = src.location.origin;
      if (ev.data.type === MessageTypes.RESIZE_IFRAME) {
        const desiredHeight =
          ev.data.height && ev.data.height < 580 ? ev.data.height : 580;
        document.documentElement.style.height = desiredHeight;
        document.getElementById("untrusted-iframe")!.style.height =
          desiredHeight;
        return;
      }
      switch (data.type) {
        case MessageTypes.REQUEST_DATA:
          src.postMessage(
            {
              type: "init",
              data: window.loadTimeData.data_,
            },
            untrustedOrigin,
          );
          break;
        case MessageTypes.SAVE_GAME_DATA:
          surfHandler.saveGameStats(ev.data.stats);
          break;
        case MessageTypes.GET_GAME_DATA:
          src.postMessage(surfHandler.getGameStats(), untrustedOrigin);
          break;
        default:
          console.warn("Unknown event", ev.data);
      }
    });
    if (!localStorage.safeMode) {
      log("Loading scripts...");
      let scripts: UserScript[] = JSON.parse(localStorage["scripts"] ?? "[]");
      for (let script of scripts) {
        let src: string | null = await localforage.getItem(script.uuid);
        if (!src) {
          log(
            `[ERROR] unable to load script ${script.name}(${script.uuid}). reason:source not found.`,
          );
          hasError = true;
          errorCount++;
        } else
          try {
            log(`[INFO] loading ${script.name}(${script.uuid}).`);
            await import(src);
          } catch (e) {
            log(e);
            log(
              `<a onclick="parent.uninstall('${script.uuid}')">Remove plugin '${script.name}'</a>`,
            );
            hasError = true;
            errorCount++;
          }
      }
      log(`Loaded ${scripts.length} scripts. (${errorCount} errors)`);
    } else {
      log("Safe mode enabled.");
      localStorage.removeItem("safeMode");
    }
    if (hasError) {
      log(
        `<a onclick="location.href='./untrusted.html'">Click here to continue.</a>`,
      );
      return;
    }
    log("Launching game...");
    (document.getElementById("untrusted-iframe")! as HTMLIFrameElement).src =
      "./untrusted.html";
  } catch (e) {
    log("Failed!\n", (e as Error).stack);
    log(
      '<a onclick="localStorage.safeMode=true">Click here to launch in safe mode.</a>',
    );
  }
}

preload();
