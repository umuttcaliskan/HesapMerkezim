import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronLeft, 
  faChevronRight, 
  faQuoteLeft 
} from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    role: "Finans Uzmanı",
    company: "ABC Bank",
    content: "PickSoSo'nun sunduğu finansal hesaplama araçları işimizi inanılmaz kolaylaştırdı. Kullanıcı dostu arayüzü ve hızlı sonuçlarıyla kesinlikle tavsiye ediyorum.",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Ayşe Kaya",
    role: "Eğitim Danışmanı",
    company: "XYZ Eğitim",
    content: "Öğrencilerimizin matematik hesaplamalarında kullandığı en iyi araç. Basit ve anlaşılır arayüzü sayesinde herkes kolayca kullanabiliyor.",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    name: "Mehmet Demir",
    role: "Yazılım Geliştirici",
    company: "Tech Solutions",
    content: "Hesaplama araçlarının çeşitliliği ve doğruluğu gerçekten etkileyici. API entegrasyonu sayesinde kendi projelerimizde de kullanabiliyoruz.",
    image: "https://i.pravatar.cc/150?img=3"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="text-purple-600 dark:text-purple-400 mb-6">
              <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
            </div>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 italic">
              "{testimonials[currentIndex].content}"
            </p>
            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-purple-600 dark:text-purple-400">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center px-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </motion.button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex 
                  ? 'bg-purple-600 dark:bg-purple-400' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;