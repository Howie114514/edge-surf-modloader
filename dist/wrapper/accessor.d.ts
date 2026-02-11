declare global {
    interface Window {
        _handlers: Record<string, (accessor: Accessor, evaluate: (x: string) => any) => void>;
    }
}
export type Accessor = Record<string, any>;
