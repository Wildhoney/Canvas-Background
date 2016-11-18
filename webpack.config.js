module.exports = {
    entry: './src/canvas-background.js',
    output: {
        path: __dirname + '/dist',
        filename: 'canvas-background.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/i
            }
        ]
    }
};
