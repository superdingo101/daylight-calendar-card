const generatedBanner = `// This file is generated from src/ by npm run build. Do not edit directly.\n`;

export default {
  input: 'src/skylight-calendar-card.js',
  output: {
    file: 'skylight-calendar-card.js',
    format: 'es',
    banner: generatedBanner,
    sourcemap: false
  }
};
