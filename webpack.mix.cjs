/* let mix = require('laravel-mix');

// Define seu theme path aqui
const resourcesPath = "resources/js/";
// ===================================

let jsFiles = [
    // "app-functions.js",
];

const jsOutput = "./src/assets/js";

let tailwindFiles = [
  { input: 'resources/scss/input.css', output: './src/assets/css/output.css' },
];

mix.disableNotifications();

mix.options({
  autoprefixer: { remove: false },
  manifest: false,
  terser: {
    extractComments: (astNode, comment) => false
  },
});

jsFiles.forEach(filename => {
  mix.js(resourcesPath + filename, jsOutput);
});


tailwindFiles.forEach(file => {
  mix.postCss(file.input, file.output, [
    require("tailwindcss")
  ]);
});

*/