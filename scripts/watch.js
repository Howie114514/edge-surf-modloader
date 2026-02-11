const { buildSync, context } = require("esbuild");
let options = require("./options");

context(options).then((ctx) => {
  ctx.watch();
});
