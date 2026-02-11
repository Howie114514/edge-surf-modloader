import EventEmitter from "eventemitter3";
export interface UserScript {
    name: string;
    uuid: string;
    version: number;
    author?: string;
    desc?: string;
    icon?: string;
    src?: string;
}
declare namespace sml {
    const eventHub: EventEmitter;
}
declare global {
    interface Window {
        install(script: UserScript): void;
        uninstall(name: string): void;
        sml: typeof sml;
    }
}
export {};
