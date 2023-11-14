// import dts from "rollup-plugin-dts";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import nodePolyfills from "rollup-plugin-polyfill-node";

import typescript from "@rollup/plugin-typescript";
import babel from "rollup-plugin-babel";
import css from "rollup-plugin-import-css";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";

import * as packageJson from "./package.json";

export default [
  {
    input: "src/rollup.ts",

    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      commonjs(),
      image(),
      css(),
      json(),
      resolve({
        browser: true,
        extensions: [".mjs", ".js", ".json", ".node", ".jsx", ".ts", ".tsx"],
        preferBuiltins: false,
      }),
      nodePolyfills(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/__test__", "**/*.test.ts"],
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react", "@babel/preset-env"],
      }),
      terser(),
    ],
  },
  // {
  //     input: "build/esm/types/index.d.ts",
  //     output: [{ file: "build/index.d.ts", format: "esm" }],
  //     plugins: [dts()],
  // },
];
