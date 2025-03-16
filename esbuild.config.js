import path from 'path'
import esbuild from 'esbuild'
import { readFileSync } from 'fs';

// Define SVG loader plugin
const svgPlugin = {
  name: 'svg-loader',
  setup(build) {
    // Handle .svg imports
    build.onLoad({ filter: /\.svg$/ }, async (args) => {
      const svg = readFileSync(args.path, 'utf8');
      const contents = `
        import React from 'react';
        const SvgComponent = (props) => {
          return (${svg.replace(/<svg/, '<svg {...props}')});
        };
        export default SvgComponent;
      `;
      return { contents, loader: 'jsx' };
    });
  },
};

esbuild.context({
  entryPoints: ['app/javascript/application.tsx'],
  bundle: true,
  sourcemap: true,
  format: 'esm',
  publicPath: 'assets',
  outdir: path.join(process.cwd(), "app/assets/builds"),
  absWorkingDir: path.join(process.cwd(), "app/javascript"),
  plugins: [],
  minify: process.argv.includes("--minify"),
  loader: {
    '.png': 'dataurl',
    '.jpg': 'dataurl',
    '.gif': 'dataurl',
    '.svg': 'jsx',
    '.svg': 'tsx',
  },
}).then(context => {
  if (process.argv.includes("--watch")) {
    // Enable watch mode
    context.watch()
  } else {
    // Build once and exit if not in watch mode
    context.rebuild().then(result => {
      context.dispose()
    })
  }
}).catch(() => process.exit(1))

