const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');  // Ortak yapılandırma dosyasını import ediyoruz

module.exports = merge(common, {
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,  // Resim dosyalarını hedef al
        type: 'asset/resource',  // Webpack 5'te asset/resource kullanıyoruz
        generator: {
          filename: 'assets/[name].[hash][ext]',  // Çıktı dosyasının yolunu ve ismini belirliyoruz
        },
      },
    ],
  },
});
