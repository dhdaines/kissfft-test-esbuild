import * as esbuild from "esbuild";
import open from "open";

let ctx = await esbuild.context({
  entryPoints: ["index.ts"],
  bundle: true,
  outdir: ".",
  external: ["module"],
  format: "esm",
  logLevel: "info",
});
await ctx.watch();
let { host, port } = await ctx.serve({
  servedir: ".",
});

await open(`http://${host}:${port}`);
