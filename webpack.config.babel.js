import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const LAUNCH_COMMAND = process.env.npm_lifecycle_event

const isProduction = LAUNCH_COMMAND === 'production'
process.env.BABEL_ENV = LAUNCH_COMMAND

if (isProduction === false) {
  require('dotenv').config()
}

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
}

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: PATHS.app + '/index.html',
  filename: 'index.html',
  inject: 'body',
})

const developmentPlugin = new webpack.EnvironmentPlugin([
  'NODE_ENV',
  'API_KEY',
  'AUTH_DOMAIN',
  'DATABASE_URL',
  'STORAGE_BUCKET',
  'MESSAGING_SENDER_ID',
])

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
})

const base = {
  entry: [
    PATHS.app,
  ],
  output: {
    path: PATHS.build,
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loader: 'style!css?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]'},
    ],
  },
  resolve: {
    root: path.resolve('./app'),
  },
}

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: PATHS.build,
    hot: true,
    inline: true,
    progress: true,
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    developmentPlugin,
  ],
}
const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [HtmlWebpackPluginConfig, productionPlugin],
}

export default Object.assign({}, base,
  isProduction ? productionConfig : developmentConfig
)
