import createModule from "kissfft-example"
const kissfft = await createModule();
const fftr = new kissfft.RealFFT(16);
const timedata = new Float32Array([0, 0.5, 0, -0.5,
                                   0, 0.5, 0, -0.5,
                                   0, 0.5, 0, -0.5,
                                   0, 0.5, 0, -0.5]);
const freqdata = fftr.fft(timedata);
const out = document.getElementById("output");
for (let i = 0; i < freqdata.length / 2; i++) {
  out.innerText += `${i}: ${freqdata[i * 2]} + ${freqdata[i * 2 + 1]}j\n`;
}
fftr.delete();
if (!window.IS_PRODUCTION)
  new EventSource('/esbuild').addEventListener('change', () => location.reload())
