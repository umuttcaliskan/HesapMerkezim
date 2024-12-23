import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  category: string;
  suggestion: string;
}

const FormSuggestion: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    category: '',
    suggestion: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form Kategorileri 
  const categories = ['Genel', 'Teknik Destek', 'Hesaplama Önerileri', 'Tasarım'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  {/* --- Hata Kontrolleri --- */}
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let validationErrors: Partial<FormData> = {};

    if (!formData.name) validationErrors.name = 'Adınız gereklidir';
    if (!formData.email) validationErrors.email = 'E-posta gereklidir';
    if (!formData.category) validationErrors.category = 'Kategori seçmelisiniz';
    if (!formData.suggestion) validationErrors.suggestion = 'Öneriniz gereklidir';

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      setErrors({});
      {/* --- Backend Bağlantısı Eklenecek --- */}
      console.log('Form Gönderildi:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Öneri Formu</h2>

      {isSubmitted && (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
          <p>Öneriniz başarıyla gönderildi!</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Ad Soyad</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && <span className="text-sm text-red-500">{errors.name}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-posta</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
        </div>

        {/* Kategori */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Kategori Seçiniz</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded-md ${errors.category ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Kategori Seçiniz</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.category && <span className="text-sm text-red-500">{errors.category}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="suggestion" className="block text-sm font-medium text-gray-700">Öneriniz</label>
          <textarea
            id="suggestion"
            name="suggestion"
            value={formData.suggestion}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded-md ${errors.suggestion ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.suggestion && <span className="text-sm text-red-500">{errors.suggestion}</span>}
        </div>

        <div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Önerinizi Gönder
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSuggestion;
