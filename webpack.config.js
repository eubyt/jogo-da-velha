
module.exports = {
    entry: './src/js/game.js',
    output: {
        filename: "./js/game.js"
    }, 
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }

};
