var getConfig = require('hjs-webpack')

var config = getConfig({
  // entry point for the app
  in: 'src/client.js',

  // Name or full path of output directory
  // commonly named `www` or `public`. This
  // is where your fully static site should
  // end up for simple deployment.
  out: 'public',

  // This will destroy and re-create your
  // `out` folder before building so you always
  // get a fresh folder. Usually you want this
  // but since it's destructive we make it
  // false by default
  clearBeforeBuild: true,

  devServer: {
    hot: false
  }
})

// add src as module base.
config.resolve.modulesDirectories = ['node_modules', 'src']

// Add eslint-loader
config.module.preLoaders = [
  {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
]

module.exports = config
