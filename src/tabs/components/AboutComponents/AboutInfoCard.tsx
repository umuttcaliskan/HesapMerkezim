// AboutInfoCard.js
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUsers, faShieldAlt, faChartLine } from '@fortawesome/free-solid-svg-icons';

const AboutInfoCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {/* Card 1 */}
      <div className="w-full sm:w-1/3 bg-white shadow-lg rounded-lg p-6 text-center">
        <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 text-4xl mb-4" />
        <h3 className="text-xl font-semibold text-blue-600 mb-3">Hızlı ve Güvenilir</h3>
        <p className="text-gray-700">
          Sunmuş olduğumuz araçlar ile işlemlerinizi hızlı ve güvenli bir şekilde yapabilirsiniz. Hedefimiz her zaman en iyi kullanıcı deneyimini sunmaktır.
        </p>
      </div>

      {/* Card 2 */}
      <div className="w-full sm:w-1/3 bg-white shadow-lg rounded-lg p-6 text-center">
        <FontAwesomeIcon icon={faUsers} className="text-blue-600 text-4xl mb-4" />
        <h3 className="text-xl font-semibold text-blue-600 mb-3">Kullanıcı Dostu</h3>
        <p className="text-gray-700">
          Tasarımlarımız, her yaş grubundan kullanıcıya hitap edecek şekilde basit ve anlaşılır olmuştur. Herkes için erişilebilir çözümler sunuyoruz.
        </p>
      </div>

      {/* Card 3 */}
      <div className="w-full sm:w-1/3 bg-white shadow-lg rounded-lg p-6 text-center">
        <FontAwesomeIcon icon={faShieldAlt} className="text-blue-600 text-4xl mb-4" />
        <h3 className="text-xl font-semibold text-blue-600 mb-3">Güvenlik</h3>
        <p className="text-gray-700">
          Verilerinizi korumak en önemli önceliğimizdir. Gelişmiş güvenlik önlemleri ile tüm işlemlerinizin güvenliğini sağlıyoruz.
        </p>
      </div>

      {/* Card 4 */}
      <div className="w-full sm:w-1/3 bg-white shadow-lg rounded-lg p-6 text-center">
        <FontAwesomeIcon icon={faChartLine} className="text-blue-600 text-4xl mb-4" />
        <h3 className="text-xl font-semibold text-blue-600 mb-3">Sürekli Gelişim</h3>
        <p className="text-gray-700">
          Sürekli gelişim anlayışımız, sektörün ve kullanıcı ihtiyaçlarının dinamik yapısına uyum sağlamamızı sağlar. Her geçen gün araçlarımızı daha verimli ve kullanıcı dostu hale getirmek için çalışıyoruz.
        </p>
      </div>
    </div>
  );
};

export default AboutInfoCard;
