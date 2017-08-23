module.exports = {
  entry: ['/home/edmundo/Dropbox/00-sn/02-Notes/02-React/01-Renv/app/index.js'],
  output: {
    path: '/home/edmundo/Dropbox/00-sn/02-Notes/02-React/01-Renv/build',
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: '/home/edmundo/Dropbox/00-sn/02-Notes/02-React/01-Renv/build',
    inline: true
  }
}
