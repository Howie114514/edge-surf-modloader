const { platform } = require("os");
const { resolve } = require("path");
const { dtsPlugin } = require("esbuild-plugin-d.ts");

module.exports = {
  entryPoints: [resolve("src/wrapper/index.ts"), resolve("src/tools/patch.ts")],
  outdir: "dist",
  platform: "node",
  bundle: true,
  plugins: [
    dtsPlugin({
      outDir: "dist/types",
    }),
  ],
};
