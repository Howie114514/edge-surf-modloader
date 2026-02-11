import EventEmitter from "eventemitter3";
import localforage from "localforage";

export interface UserScript {
  name: string;
  uuid: string;
  version: number;
  author?: string;
  desc?: string;
  icon?: string;
  src?: string;
}

namespace sml {
  export const eventHub: EventEmitter = new EventEmitter();
}

declare global {
  interface Window {
    install(script: UserScript): void;
    uninstall(name: string): void;
    sml: typeof sml;
  }
}

window.install = (script: UserScript) => {
  if (!script.src) throw new Error("No source.");
  localforage.setItem(script.uuid, script.src);
  delete script.src;
  let scripts: UserScript[] = JSON.parse(localStorage["scripts"] ?? "[]");
  scripts.push(script);
  localStorage["scripts"] = JSON.stringify(scripts);
};

window.uninstall = (name: string) => {
  let scripts: UserScript[] = JSON.parse(localStorage["scripts"] ?? "[]");
  scripts = scripts.filter((s) => s.uuid != name);
  localforage.removeItem(name);
  localStorage["scripts"] = JSON.stringify(scripts);
};

window.sml = sml;
