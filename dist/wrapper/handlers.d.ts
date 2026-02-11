declare global {
    interface Window {
        surf: {
            uiManager: any;
            gamemodes: any;
        };
    }
}
export declare function initHandlers(): void;
