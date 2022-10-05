declare type Versions = {
    node: () => string;
    chrome: () => string;
    electron: () => string;
};
declare type Files = {
    readIndex: () => Promise<string>;
};
declare global {
    interface Window {
        versions: Versions;
        files: Files;
    }
}
export {};
