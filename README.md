# sukashi

A TypeScript library for rendering brightness-controlled images in browsers, optimized for iPhone.

## Demo

**🔗 [Demo](https://sukashi.syumai.workers.dev/)**

## Inspiration

This library was inspired by [ultra-white-button](https://github.com/set0gut1/ultra-white-button), which demonstrated the creative possibilities of using CSS brightness filters to achieve enhanced visual effects on iPhone.

## Features

- **Brightness Control**: Uses CSS `brightness()` filters to control individual pixel brightness
- **iPhone Optimized**: Designed specifically for iPhone
- **TypeScript Support**: Full TypeScript definitions included
- **Multiple Output Formats**: ESM, CommonJS, and IIFE builds available
- **Simple API**: Easy-to-use functions for creating and manipulating brightness arrays

## Installation

```bash
npm install sukashi
# or
pnpm install sukashi
# or
yarn add sukashi
```

## Quick Start

```typescript
import { createSukashi, createBrightnessArray, setBrightness } from 'sukashi';

// Create a 8x8 brightness array filled with 50% brightness
const brightnessArray = createBrightnessArray(8, 8, 50);

// Set individual pixel brightness (0-100)
setBrightness(brightnessArray, 0, 0, 100); // Top-left pixel at 100% brightness
setBrightness(brightnessArray, 7, 7, 0);   // Bottom-right pixel at 0% brightness

// Render to DOM
const container = document.getElementById('my-container');
const element = createSukashi(brightnessArray, {
  pixelSize: 4,
  container: container
});
```

## API Reference

### `createBrightnessArray(width: number, height: number, fill?: number): BrightnessArray`

Creates a new brightness array with the specified dimensions.

- `width`: Width of the array
- `height`: Height of the array  
- `fill`: Initial brightness value (0-100, default: 100)

### `setBrightness(brightnessArray: BrightnessArray, x: number, y: number, value: number): void`

Sets the brightness value at the specified coordinates.

- `brightnessArray`: The brightness array to modify
- `x`: X coordinate (0-based)
- `y`: Y coordinate (0-based)
- `value`: Brightness value (0-100)

### `createSukashi(brightnessArray: BrightnessArray, options?: SukashiOptions): HTMLElement`

Renders the brightness array as a DOM element.

- `brightnessArray`: The brightness array to render
- `options`: Optional configuration object
  - `pixelSize`: Size of each pixel in pixels (default: 4)
  - `container`: Container element to append to

### `isAppleDevice(): boolean`

Checks if the current device is an Apple device.

## Example

See the `example/` directory for a complete demo with interactive controls. The example includes:

- Image display from URL
- Pattern demonstrations (checkerboard, gradient, random, wave, spotlight)
- Interactive pattern generator

## Browser Support

This library is optimized for iPhone. While it will work on other devices, the brightness effects may not be visible.

## License

MIT
