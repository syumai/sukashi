export interface BrightnessArray {
  data: number[][];
  width: number;
  height: number;
}

export interface SukashiOptions {
  pixelSize?: number;
  container?: HTMLElement;
}

export function isAppleDevice(): boolean {
  return /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);
}

export function createSukashi(brightnessArray: BrightnessArray, options: SukashiOptions = {}): HTMLElement {
  const { pixelSize = 4, container } = options;
  
  const element = document.createElement('div');
  element.className = 'sukashi-container';
  element.style.display = 'grid';
  element.style.gridTemplateColumns = `repeat(${brightnessArray.width}, ${pixelSize}px)`;
  element.style.gridTemplateRows = `repeat(${brightnessArray.height}, ${pixelSize}px)`;
  element.style.gap = '0';
  element.style.width = `${brightnessArray.width * pixelSize}px`;
  element.style.height = `${brightnessArray.height * pixelSize}px`;
  
  for (let y = 0; y < brightnessArray.height; y++) {
    for (let x = 0; x < brightnessArray.width; x++) {
      const pixel = document.createElement('div');
      pixel.className = 'sukashi-pixel';
      pixel.style.width = `${pixelSize}px`;
      pixel.style.height = `${pixelSize}px`;
      pixel.style.backgroundColor = 'white';
      
      const userBrightness = Math.max(0, Math.min(100, brightnessArray.data[y][x]));
      const cssBrightness = 100 + userBrightness; // Map 0-100% to 100-200%
      pixel.style.filter = `brightness(${cssBrightness}%)`;
      
      element.appendChild(pixel);
    }
  }
  
  if (container) {
    container.appendChild(element);
  }
  
  return element;
}

export function createBrightnessArray(width: number, height: number, fill: number = 100): BrightnessArray {
  const data: number[][] = [];
  for (let y = 0; y < height; y++) {
    data[y] = new Array(width).fill(fill);
  }
  return { data, width, height };
}

export function setBrightness(brightnessArray: BrightnessArray, x: number, y: number, value: number): void {
  if (x >= 0 && x < brightnessArray.width && y >= 0 && y < brightnessArray.height) {
    brightnessArray.data[y][x] = Math.max(0, Math.min(100, value));
  }
}