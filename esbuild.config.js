const esbuild = require('esbuild');

const baseConfig = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  sourcemap: true,
  platform: 'browser',
  target: 'es2020',
};

// ESM build
esbuild.build({
  ...baseConfig,
  outfile: 'dist/index.esm.js',
  format: 'esm',
}).catch(() => process.exit(1));

// CommonJS build
esbuild.build({
  ...baseConfig,
  outfile: 'dist/index.cjs.js',
  format: 'cjs',
}).catch(() => process.exit(1));

// IIFE build for browsers
esbuild.build({
  ...baseConfig,
  outfile: 'dist/index.js',
  format: 'iife',
  globalName: 'Sukashi',
}).catch(() => process.exit(1));