const path = require('path');

module.exports = {
    mode: 'development', // или 'production' для оптимизации вывода
    devtool: 'source-map', // Рекомендуется для продакшн без eval
    entry: {
        popupScript: './Dev/popup/popupScript.js',
        optionsScript: './Dev/options/optionsScript.js',
        panelScript: './Dev/panel/panelScript.js',
        contentScript: './Dev/content/contentScript.js',
        backgroundScript: './Dev/background/backgroundScript.js',
    },
    output: {
        path: path.resolve(__dirname, 'Product'), // Общая папка вывода
        filename: (pathData) => {
            // Выбор пути в зависимости от имени входной точки
            switch (pathData.chunk.name) {
                case 'popupScript':
                    return 'popup/index.js';
                case 'optionsScript':
                    return 'options/index.js';
                case 'backgroundScript':
                    return 'background.js';
                case 'contentScript':
                    return 'contentScript.js';
                case 'panelScript':
                    return 'panel/index.js';
                default:
                    return '[name].js';
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/, // для всех файлов .js
                exclude: /node_modules/, // исключая папку node_modules
                use: {
                    loader: 'babel-loader', // использовать babel-loader
                    options: {
                        presets: ['@babel/preset-env'] // настройка для компиляции ES6+
                    }
                }
            }
        ]
    }
};
