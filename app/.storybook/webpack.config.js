const path = require('path')

const PATHS = {
  src: path.join(__dirname, '..', 'client'),
}

module.exports = {
  resolve: {
    root: [
      PATHS.src,
    ],
    extensions: ['', '.js', '.jsx', '.css', '.scss', '.sass'],
  },
  module: {
    loaders: [
      {
        test: /\.scss$|\.sass$|\.css$/,
        loaders: ['style', 'css', 'sass'],
        include: PATHS.src,
      },
    ],
  },
}
