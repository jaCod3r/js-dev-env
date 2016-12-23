import path from 'path';


export default {
  debug: true, //enables debugging information
  devtool: 'inline-source-map', //trade-off source maps
  noInfo: false, //webpack will display list of bundling
  entry : [ //entry point, ignoring hot-reloading
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web', //targeting web, target could be electron (desktop style apps with Javascript)
  output: { //wont generate any physcial files, need to simulate physical files
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [], //hotreloading, linting
  module: { //file types you want it to handle.
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style', 'css']}
    ]
  }
}
