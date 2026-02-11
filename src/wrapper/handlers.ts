declare global {
  interface Window {
    surf: {
      uiManager: any;
      gamemodes: any;
    };
  }
}
window.surf = {} as any;

export function initHandlers() {
  window._handlers = {};
  window._handlers["beforeRender"] = (accessor, evaluate) => {
    window.sml.eventHub.emit(
      "beforeRender",
      accessor.X.sys.ctx as CanvasRenderingContext2D,
      accessor.A,
    );
  };

  window._handlers["afterRender"] = (accessor, evaluate) => {
    window.sml.eventHub.emit(
      "afterRender",
      accessor.X.sys.ctx as CanvasRenderingContext2D,
      accessor.A,
    );
  };

  window._handlers["gamemodeRegistered"] = (accessor, evaluate) => {
    window.sml.eventHub.emit("gamemodeRegistered", accessor.P);
  };

  window._handlers["ready"] = (accessor, evaluate) => {
    window.surf.uiManager = accessor.gA;
    window.surf.gamemodes = accessor.P;

    window.sml.eventHub.emit("ready", accessor, evaluate);
  };
  window._handlers["sendNMod"] = (accessor, evaluate) => {
    accessor.e = accessor.A;
  };
}
