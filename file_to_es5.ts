import { parse} from "@babel/parser";
import * as babel from "@babel/core";
import * as fs from "fs";

const code = fs.readFileSync("./test.js", "utf-8").toString();
const ast = parse(code, {sourceType: "module"})
const result = babel.transformFromAstSync(ast, code, {
    presets: ["@babel/preset-env"],
    plugins: ["@babel/plugin-transform-modules-commonjs"]
}) 
fs.writeFileSync("./test.es5.js", result.code);

console.log(result);
