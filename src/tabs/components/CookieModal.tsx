import React, { useState, useEffect } from "react";

const CookieModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");

    if (!cookieAccepted) {
      setIsModalOpen(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieAccepted", "true");
    setIsModalOpen(false);
  };

  return (
    isModalOpen && (
      <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg w-80 max-w-lg">
          <h2 className="text-xl font-semibold mb-4">Çerez Politikası</h2>
          <p className="mb-6 text-gray-700">
            Sitemizi kullanarak çerezleri kabul etmiş oluyorsunuz. Çerezler, size daha iyi bir deneyim sunmak için kullanılacaktır.
          </p>
          <button
            onClick={handleAcceptCookies}
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Çerezleri Kabul Et
          </button>
        </div>
      </div>
    )
  );
};

export default CookieModal;
