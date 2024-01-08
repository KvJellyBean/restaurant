const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|png|jpeg|svg)$/i,
                oneOf: [
                    {
                        resourceQuery: /inline/,
                        type: 'asset/inline',
                    },
                    {
                        type: 'asset/resource',
                        generator: {
                            filename: 'images/[name][ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                },
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            }
        ]
    }
};
