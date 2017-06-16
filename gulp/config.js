'use strict';

// Define our paths here for easy reference.

const config = {

  browserPort: 3000,
  UIPort:      3001,

  src: {
    dir:    './src/',
    views:   './src/views/**/*.pug',
    styles: './src/assets/styles/**/*.sass',
    js:     './src/assets/js/**/*.js',
    images: './src/assets/images/**/*.{jpeg,jpg,png,gif,svg}',
    fonts:  './src/assets/fonts/*.{woff,woff2,otf}',
  },

  dest: {
    dir:    './public/',
    index:  './public/index.html',
    views:  './public/',
    styles: './public/assets/styles/',
    js:     './public/assets/js/',
    images: './public/assets/images/',
    fonts:  './public/assets/fonts/',
  },

  lint: {
    scripts: './src/assets/js/*.js',
    gulp:    './gulp/tasks/*.js',
  },

  assetExtensions: [
    'js',
    'css',
    'map',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
  ]

};

export default config;
