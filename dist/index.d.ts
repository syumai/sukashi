export interface BrightnessArray {
    data: number[][];
    width: number;
    height: number;
}
export interface SukashiOptions {
    pixelSize?: number;
    container?: HTMLElement;
}
export declare function isAppleDevice(): boolean;
export declare function createSukashi(brightnessArray: BrightnessArray, options?: SukashiOptions): HTMLElement;
export declare function createBrightnessArray(width: number, height: number, fill?: number): BrightnessArray;
export declare function setBrightness(brightnessArray: BrightnessArray, x: number, y: number, value: number): void;
//# sourceMappingURL=index.d.ts.map