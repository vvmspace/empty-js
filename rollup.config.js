import path from "path";
import babel from "@rollup/plugin-babel";

const formats = [
    "esm",
    "cjs"
];

// See: https://rollupjs.org/guide/en/#configuration-files
export default {
    input: path.resolve(__dirname, "src/index.js"),
    output: formats.map(format => ({ format, file: `dist/index.${format}.js` })),
    plugins: [babel({ babelHelpers: "bundled" })]
}
