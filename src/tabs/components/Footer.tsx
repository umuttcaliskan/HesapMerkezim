import React from 'react';
import logo from '../../assets/whiteLogo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      {/* Dekoratif Arka Plan Desenleri */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo ve Şirket Bilgisi */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src={logo} alt="PickSoSo Logo" className="h-12 mb-6" />
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                PickSoSo Software Solution, kullanıcı odaklı yazılım çözümleriyle teknoloji dünyasında fark yaratır. 
                Modern ve yenilikçi yaklaşımımızla, ihtiyaçlarınıza özel çözümler sunuyoruz.
              </p>
            </motion.div>
          </div>

          {/* Hızlı Linkler */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Hızlı Linkler
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Anasayfa
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Servisler
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Tarayıcına Ekle
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* İletişim */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Bize Ulaşın
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-gray-400">
                  <span>info@picksoso.com</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <span>İstanbul, Türkiye</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bülten */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
                Bültene Abone Ol
              </h3>
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-300"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                  >
                    Abone Ol
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Sosyal Medya ve Telif Hakkı */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} PickSoSo Software Solution. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FontAwesomeIcon icon={faFacebookF} className="text-lg" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FontAwesomeIcon icon={faTwitter} className="text-lg" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FontAwesomeIcon icon={faInstagram} className="text-lg" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-lg" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
