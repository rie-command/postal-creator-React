/**
 * Created by pbxadmin on 07.03.17.
 */
const path = require('path')
    , webpack = require('webpack')
    , development = require('./build').development
    , NpmInstallPlugin = require('npm-install-webpack-plugin')
    , autoprefixer = require('autoprefixer')
    , precss = require('precss');

module.exports = {
    devtool: development ? "cheap-module-eval-source-map" : "hidden-source-map",
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        loaders: [
            {   test: /\.js$/,
                    loaders: [
                        {loader: 'react-hot',
                        query: {
                            plugins: ['transform-runtime'],
                            includePaths: [path.resolve(__dirname, "src")]
                            }
                        },
                        {loader: 'babel-loader',
                            query: {
                                plugins: ['transform-runtime'],
                                includePaths: [path.resolve(__dirname, "src")]
                            }
                        }]
            },
            {rules: [
                {
                    test: /\.css$/,
                    use: "style!css!less"
                },
                {
                    test: /\.less$/,
                    use: "style-loader!css-loader!postcss-loader"
                },
                {
                    test:  /\.(sass|less|styl|sss|css)$/,
                    use: [{
                        loader: 'postcss-loader',
                        options: {plugins: () => [ autoprefixer, precss]  }
                    }]
                }
            ]}
        ]

    }
};