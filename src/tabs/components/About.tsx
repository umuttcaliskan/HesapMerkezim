import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, 
  faLightbulb, 
  faUsers, 
  faGlobe,
  faCode,
  faShieldHalved,
  faGears,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import Footer from "./Footer";
import CookieModal from "./CookieModal";
import TeamMemberCard from "./AboutComponents/TeamMemberCard";
import TestimonialSlider from "./AboutComponents/TestimonialSlider";
import Umut_Caliskan from '../../assets/pageImages/Umut_Caliskan.png';
import Sena_Kesgin from '../../assets/pageImages/Sena_Kesgin.png';
import Ipek_Caliskan from '../../assets/pageImages/Ipek_Caliskan.png';
import Baris_Kaplan from '../../assets/pageImages/Baris_Kaplan.png';
import Serhat_Gul from '../../assets/pageImages/Serhat_Gul.png';

const About = () => {
  const features = [
    {
      icon: faCode,
      title: "Modern Teknoloji",
      description: "En son teknolojileri kullanarak yenilikçi çözümler üretiyoruz."
    },
    {
      icon: faShieldHalved,
      title: "Güvenlik Odaklı",
      description: "Verilerinizin güvenliği bizim için en önemli öncelik."
    },
    {
      icon: faGears,
      title: "Kolay Kullanım",
      description: "Kullanıcı dostu arayüzler ile karmaşık işlemleri basitleştiriyoruz."
    },
    {
      icon: faChartLine,
      title: "Sürekli Gelişim",
      description: "Kendimizi sürekli yenileyerek en iyi hizmeti sunuyoruz."
    }
  ];

  const stats = [
    { number: "50K+", label: "Aktif Kullanıcı" },
    { number: "100+", label: "Özellik" },
    { number: "99%", label: "Memnuniyet" },
    { number: "24/7", label: "Destek" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              Teknoloji ile Geleceği Şekillendiriyoruz
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              PickSoSo Software Solution olarak, kullanıcı odaklı yazılım çözümleriyle teknoloji dünyasında fark yaratıyoruz. 
              Modern ve yenilikçi yaklaşımımızla, ihtiyaçlarınıza özel çözümler sunuyoruz.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Misyon ve Vizyon */}
      <div className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <FontAwesomeIcon icon={faRocket} className="text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Misyonumuz</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Teknoloji dünyasında kullanıcı odaklı inovasyonları benimseyerek, herkesin kolayca ulaşabileceği, 
                güvenli ve hızlı çözüm araçları sunmak. İleri görüşlülüğümüzle, tasarım ve teknoloji arasındaki 
                mükemmel dengeyi yakalayarak, sektördeki standartları yeniden tanımlıyoruz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <FontAwesomeIcon icon={faLightbulb} className="text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Vizyonumuz</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Teknoloji dünyasında öncü bir yazılım şirketi olarak, yenilikçi çözümlerimizle global ölçekte 
                tanınan bir marka olmak. Kullanıcılarımıza sadece bir yazılım değil, iş süreçlerini 
                dönüştürebilecek güçlü araçlar sunarak, dijital dönüşüme liderlik etmek.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Özellikler */}
      <div className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Modern teknolojiler ve yenilikçi yaklaşımlarla, işinizi bir üst seviyeye taşıyoruz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white mb-6">
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* İstatistikler */}
      <div className="py-24 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-purple-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Ekibimiz */}
      <div className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Profesyonel Ekibimiz
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Deneyimli ve tutkulu ekibimizle, en iyi hizmeti sunmak için çalışıyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TeamMemberCard name="Umut Çalışkan" role="CEO" image={Umut_Caliskan} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <TeamMemberCard name="Barış Kaplan" role="CTO" image={Baris_Kaplan} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TeamMemberCard name="Sena Kesgin" role="Sales and Marketing Specialist" image={Sena_Kesgin} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <TeamMemberCard name="İpek Tuğçe Çalışkan" role="Graphics Designer" image={Ipek_Caliskan} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <TeamMemberCard name="Mehmet Serhat Gül" role="Digital Marketing Manager" image={Serhat_Gul} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Kullanıcı Yorumları */}
      <div className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Kullanıcılarımız Ne Diyor?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Müşteri memnuniyeti bizim için en önemli başarı göstergesidir.
            </p>
          </motion.div>

          <TestimonialSlider />
        </div>
      </div>

      {/* Global Etki */}
      <div className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white">
                <FontAwesomeIcon icon={faGlobe} className="text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Global Etkimiz</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Dünya çapında kullanıcılarımıza hizmet veriyor, teknoloji ile sınırları aşıyoruz. 
                Yenilikçi çözümlerimizle global pazarda öncü olmayı hedefliyoruz.
              </p>
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
                >
                  Daha Fazla Bilgi
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8"
            >
              <div className="space-y-8">
                <div className="bg-purple-100 dark:bg-purple-900/20 p-6 rounded-2xl">
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">150+</div>
                  <div className="text-gray-600 dark:text-gray-400">Ülke</div>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/20 p-6 rounded-2xl">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">1M+</div>
                  <div className="text-gray-600 dark:text-gray-400">İşlem</div>
                </div>
              </div>
              <div className="space-y-8 pt-12">
                <div className="bg-green-100 dark:bg-green-900/20 p-6 rounded-2xl">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400">10+</div>
                  <div className="text-gray-600 dark:text-gray-400">Dil Desteği</div>
                </div>
                <div className="bg-pink-100 dark:bg-pink-900/20 p-6 rounded-2xl">
                  <div className="text-4xl font-bold text-pink-600 dark:text-pink-400">24/7</div>
                  <div className="text-gray-600 dark:text-gray-400">Destek</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <CookieModal />
      <Footer />
    </div>
  );
};

export default About;
