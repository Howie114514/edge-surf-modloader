const { buildSync } = require("esbuild");
let options = require("./options");

buildSync(options);
