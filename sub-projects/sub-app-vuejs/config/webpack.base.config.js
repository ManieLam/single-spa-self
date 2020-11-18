const StatsPlugin = require('stats-webpack-plugin');
const packageName = require('../package.json').name;

const config = {
    // output: {
    //     library: "singleVue",
    //     libraryTarget: "window",
    // },
    output: {
        // publicPath: '//localhost:3000',
        library: packageName,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${packageName}`,
    },
    plugins: [
        new StatsPlugin('manifest.json', {
            chunkModules: false,
            entrypoints: true,
            source: false,
            chunks: false,
            modules: false,
            assets: false,
            children: false,
            exclude: [/node_modules/]
        })
    ]
};

module.exports = config;
