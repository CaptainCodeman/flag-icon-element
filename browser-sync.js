const browserSync = require('browser-sync').create();
const historyApiFallback = require('connect-history-api-fallback');
const logger = require('connect-logger');
const compression = require('compression');
const zlib = require('zlib')

browserSync.init({
  cwd: '.',
  server: {
    baseDir: '.',
    index: "index.html",
  },
  files: [
    'index.html',
    'flag-icon.dev.js',
  ],
  middleware: [
    logger(),
    compression({ level: zlib.Z_BEST_COMPRESSION, threshold: 500 }),
    historyApiFallback(),
  ],
});
