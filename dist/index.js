"use strict";
var Sukashi = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var index_exports = {};
  __export(index_exports, {
    createBrightnessArray: () => createBrightnessArray,
    createSukashi: () => createSukashi,
    isAppleDevice: () => isAppleDevice,
    setBrightness: () => setBrightness
  });
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
        const userBrightness = Math.max(0, Math.min(100, brightnessArray.data[y][x]));
        const cssBrightness = 100 + userBrightness;
        pixel.style.filter = `brightness(${cssBrightness}%)`;
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
  return __toCommonJS(index_exports);
})();
//# sourceMappingURL=index.js.map
