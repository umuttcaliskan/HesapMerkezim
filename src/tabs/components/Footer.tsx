import React from 'react';
import logo from '../../assets/whiteLogo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">

          {/* Bilgiler */}
          <div className="text-center">
            <img src={logo} alt="PickSoSo Logo" className="w-full mb-4" />
            <p className="text-gray-400 mb-4">
              PickSoSo Software Solution sizler için hızlı yazılım çözümleri üretir.
            </p>
            <div className="flex space-x-4 justify-center">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                Facebook
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                Twitter
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                Instagram
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Anasayfa</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">Hakkımızda</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Servisler</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Tarayıcına Ekle</Link>
              </li>
            </ul>
          </div>

          {/* Abone Ol */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Gelişmelerden Haberdar Ol</h3>
            <p className="text-gray-400 mb-4">En son haberler ve güncellemelerle güncel kalın.</p>
            <div className="flex justify-center">
              <input
                type="email"
                placeholder="E-Posta Adresiniz"
                className="p-2 w-2/3 text-gray-800 rounded-l-lg"
              />
              <button className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700">
                Abone Ol
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-8">
          <p>PickSoSo Software Solution &copy; 2024 - Bütün hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
