import * as esbuild from 'esbuild'
import metaUrlPlugin from '@chialab/esbuild-plugin-meta-url';

await esbuild.build({
  entryPoints: ['index.ts'],
  bundle: true,
  outdir: 'www',
  external: ['module'],
  format: 'esm',
  minify: true,
  target: "es2020",
  plugins: [metaUrlPlugin()],
})
