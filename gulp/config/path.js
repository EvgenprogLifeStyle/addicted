//Получить имя папки проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; //Можно использовать rootFolder
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    img: `${buildFolder}/images/`,
    fonts: `${buildFolder}/fonts/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`,
    libsJs: `${buildFolder}/js/libs/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    svg: `${srcFolder}/images/**/*.svg`,
    scss: `${srcFolder}/scss/style.{css,scss}`,
    img: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,ico}`,
    fonts: `${srcFolder}/fonts/*.*`,
    html: `${srcFolder}/**/*.html`, //.pug
    files: `${srcFolder}/files/**/*.*`,
    libsJs: `${srcFolder}/js/libs/**/*.js`,
    jsFile: `${srcFolder}/js/script.js`,

  },
  watch: {
    js: `${srcFolder}/**/*.js`,
    scss: `${srcFolder}/**/*.{css,scss}`,
    img: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,svg}`,
    html: `${srcFolder}/**/*.html`, //.pug
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};
