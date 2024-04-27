const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development', // или 'production' для оптимизации вывода
    devtool: 'source-map', // Рекомендуется для продакшн без eval
    // Другие настройки
    plugins: [
        new HtmlWebpackPlugin({
            template: './Product/react/index.html' // Указывает на ваш шаблонный HTML-файл
        })
    ],
    entry: {
        reactApp: './Dev/react/index.js', // Новая точка входа для React приложения
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
                case 'reactApp':
                    return 'panel/index.js';
                case 'popupScript':
                    return 'popup/index.js';
                case 'optionsScript':
                    return 'options/index.js';
                case 'backgroundScript':
                    return 'background.js';
                case 'contentScript':
                    return 'contentScript.js';
                case 'panelScript':
                    return 'react/index.js';
                default:
                    return '[name].js';
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // для всех файлов .js и .jsx
                exclude: /node_modules/, // исключая папку node_modules
                use: {
                    loader: 'babel-loader', // использовать babel-loader
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'] // Добавляем поддержку React
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'] // Добавьте это, чтобы Webpack мог обрабатывать .jsx файлы
    },
    devServer: {
        static: './Dev/react', // папка, из которой будет предоставляться контент
        hot: true, // включает Hot Module Replacement без полной перезагрузки страницы
        port: 3000 // порт, на котором будет запущен сервер
    }
};
