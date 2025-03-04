# Hesap Merkezim Chrome Eklentisi

## Genel Bakış

Hesap Merkezim, günlük hayatta ihtiyaç duyulan çeşitli hesaplama araçlarını tek bir Chrome eklentisi altında toplayan kullanışlı bir uygulamadır. React 18 ve TailwindCSS kullanılarak geliştirilmiştir.

## Özellikler

- **Hesap Makinesi**: Hızlı matematiksel işlemler için kullanışlı hesap makinesi
- **Şanslı Sayı Üreteci**: Şans oyunları için rastgele sayı üretimi
- **Çeşitli Hesaplama Araçları**:
  - Zaman Hesaplayıcıları
  - Çekiliş Araçları
  - Okul Hesaplayıcıları
  - Matematik Hesaplayıcıları
  - Sağlık Hesaplayıcıları
  - Kredi Hesaplayıcıları
  - Günlük Hesaplayıcılar

## Teknolojiler

- React 18
- TypeScript
- TailwindCSS
- Webpack
- Chrome Extension API

## Kurulum

1. Repoyu klonlayın:
   ```
   git clone [repo-url]
   ```

2. Bağımlılıkları yükleyin:
   ```
   npm install
   ```
   veya
   ```
   yarn install
   ```

3. Geliştirme modunda çalıştırın:
   ```
   npm run watch
   ```
   veya
   ```
   yarn watch
   ```

4. Üretim için build alın:
   ```
   npm run build
   ```
   veya
   ```
   yarn build
   ```

5. Chrome tarayıcınızda eklentiyi yüklemek için:
   - Chrome'da `chrome://extensions/` adresine gidin
   - "Geliştirici modu"nu etkinleştirin
   - "Paketlenmemiş öğe yükle" butonuna tıklayın
   - Projedeki `dist` klasörünü seçin

## Kullanım

Eklenti yüklendikten sonra, Chrome tarayıcınızın sağ üst köşesindeki eklenti simgesine tıklayarak Hesap Merkezim'e erişebilirsiniz. Ana sayfadan istediğiniz hesaplama aracını seçebilir veya hızlı erişim için hesap makinesi ve şanslı sayı üreteci butonlarını kullanabilirsiniz.

## Geliştirme

Proje yapısı:
- `src/popup`: Eklenti popup arayüzü
- `src/components`: Yeniden kullanılabilir bileşenler
- `src/tabs`: Tam sayfa sekme bileşenleri
- `src/background`: Arka plan işlemleri
- `src/contentScript`: Sayfa içeriği ile etkileşim
- `src/static`: Statik dosyalar

## Lisans

MIT

## İletişim

Geliştirici: Umut Çalışkan


