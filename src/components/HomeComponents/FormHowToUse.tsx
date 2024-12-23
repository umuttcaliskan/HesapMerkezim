import React from 'react';

const FormHowToUse = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Hesap Merkezim Kullanım Kılavuzu</h2>

      <div className="space-y-6">
        {/* Adım 1 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700">Adım 1: Eklenti Kurulumu</h3>
          <p className="text-gray-600">
            Hesap Merkezim'i kullanmaya başlamak için öncelikle Google Chrome Web Mağazası'ndan eklentiyi kurmanız gerekmektedir. 
            Kurulum tamamlandıktan sonra, tarayıcınızın sağ üst köşesinde Hesap Merkezim ikonu görünecektir.
          </p>
        </div>

        {/* Adım 2 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700">Adım 2: Eklentiye Erişim</h3>
          <p className="text-gray-600">
            Hesap Merkezim'e erişmek için tarayıcınızın sağ üst köşesindeki eklenti ikonuna tıklamanız yeterlidir. 
            Tıkladığınızda hesaplama kategorilerini içeren ana menü açılacaktır.
          </p>
        </div>

        {/* Adım 3 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700">Adım 3: Kategori ve Hesaplama Seçimi</h3>
          <p className="text-gray-600">
            Açılan menüden yapmak istediğiniz hesaplama türüne uygun kategoriyi seçin. 
            Ardından, seçtiğiniz kategori altında bulunan spesifik hesaplama türünü belirleyin. 
            Örneğin: Alan Hesaplama, Hacim Hesaplama, Finansal Hesaplamalar vb.
          </p>
        </div>

        {/* Adım 4 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700">Adım 4: Değerlerin Girilmesi ve Sonuç</h3>
          <p className="text-gray-600">
            Seçtiğiniz hesaplama türü için gerekli olan değerleri ilgili alanlara girin. 
            Tüm gerekli alanları doldurduktan sonra "Hesapla" butonuna tıklayarak sonuca ulaşabilirsiniz. 
            Sonuçlar otomatik olarak ekranınızda görüntülenecektir.
          </p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        onClick={() => window.location.reload()}>
          Başla
        </button>
      </div>
    </div>
  );
};

export default FormHowToUse;