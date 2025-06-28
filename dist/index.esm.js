// src/index.ts
function isAppleDevice() {
  return /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);
}
function createSukashi(brightnessArray, options = {}) {
  const { pixelSize = 4, container } = options;
  const element = document.createElement("div");
  element.className = "sukashi-container";
  element.style.display = "grid";
  element.style.gridTemplateColumns = `repeat(${brightnessArray.width}, ${pixelSize}px)`;
  element.style.gridTemplateRows = `repeat(${brightnessArray.height}, ${pixelSize}px)`;
  element.style.gap = "0";
  element.style.width = `${brightnessArray.width * pixelSize}px`;
  element.style.height = `${brightnessArray.height * pixelSize}px`;
  for (let y = 0; y < brightnessArray.height; y++) {
    for (let x = 0; x < brightnessArray.width; x++) {
      const pixel = document.createElement("div");
      pixel.className = "sukashi-pixel";
      pixel.style.width = `${pixelSize}px`;
      pixel.style.height = `${pixelSize}px`;
      pixel.style.backgroundColor = "white";
      const brightness = Math.max(0, Math.min(100, brightnessArray.data[y][x]));
      pixel.style.filter = `brightness(${brightness}%)`;
      element.appendChild(pixel);
    }
  }
  if (container) {
    container.appendChild(element);
  }
  return element;
}
function createBrightnessArray(width, height, fill = 100) {
  const data = [];
  for (let y = 0; y < height; y++) {
    data[y] = new Array(width).fill(fill);
  }
  return { data, width, height };
}
function setBrightness(brightnessArray, x, y, value) {
  if (x >= 0 && x < brightnessArray.width && y >= 0 && y < brightnessArray.height) {
    brightnessArray.data[y][x] = Math.max(0, Math.min(100, value));
  }
}
export {
  createBrightnessArray,
  createSukashi,
  isAppleDevice,
  setBrightness
};
//# sourceMappingURL=index.esm.js.map
