import React, { useState, useEffect } from "react";
import Ali_Kemal_Ozturk from '../../../assets/usersImages/Ali_Kemal_Ozturk.png';
import Zeynep_Acar from '../../../assets/usersImages/Zeynep_Acar.png';
import Elif_Yildiz from '../../../assets/usersImages/Elif_Yildiz.png';
import Fatih_Gurbuz from '../../../assets/usersImages/Fatih_Gurbuz.png';
import Mehmet_Ozturk from '../../../assets/usersImages/Mehmet_Ozturk.png';

const TestimonialSlider: React.FC = () => {
  const testimonials = [
      {
        quote: 'PickSoSo\'nun yazılım çözümleri ile iş süreçlerimizi optimize ettik. Harika bir deneyim!',
        name: 'Ali Kemal Öztürk',
        role: 'Yazılım Geliştirici',
        image: Ali_Kemal_Ozturk
      },
      {
        quote: 'PickSoSo\'nun yazılım çözümleri sayesinde projelerimiz çok daha hızlı ilerliyor. Gerçekten etkileyici!',
        name: 'Elif Yıldız',
        role: 'Proje Yöneticisi',
        image: Elif_Yildiz
      },
      {
        quote: 'PickSoSo\'nun inovatif yazılımları, şirketimizin iş akışlarını tamamen dönüştürdü. Harika bir iş çıkarıyorlar.',
        name: 'Murat Caner',
        role: 'IT Müdürü',
        image: Ali_Kemal_Ozturk
      },
      {
        quote: 'Yazılım çözümleriyle iş süreçlerimizde büyük verimlilik artışı sağladık. PickSoSo\'ya teşekkür ederiz!',
        name: 'Zeynep Acar',
        role: 'Operasyon Müdürü',
        image: Zeynep_Acar
      },
      {
        quote: 'PickSoSo\'nun yazılım platformu ile çalışmak, takımımız için büyük bir kolaylık oldu. Süreçlerimizi çok daha verimli hale getirdi.',
        name: 'Fatih Gürbüz',
        role: 'Tasarımcı',
        image: Fatih_Gurbuz
      },
      {
        quote: 'PickSoSo\'nun çözümleriyle her şey çok daha hızlı ve güvenli hale geldi. İşimizi mükemmel bir şekilde destekliyorlar.',
        name: 'Seda Demir',
        role: 'Veritabanı Yöneticisi',
        image: Elif_Yildiz
      },
      {
        quote: 'PickSoSo\'nun yazılımları sayesinde iş süreçlerimizdeki aksaklıkları ortadan kaldırdık. Performansımız önemli ölçüde arttı.',
        name: 'Mehmet Öztürk',
        role: 'İş Analisti',
        image: Mehmet_Ozturk
      },
      {
        quote: 'PickSoSo\'nun çözümleri ile iş yapış şeklimiz tamamen değişti. Verimlilik oranımız hızla arttı.',
        name: 'Ayşe Karaca',
        role: 'Pazarlama Müdürü',
        image: Zeynep_Acar
      },
      {
        quote: 'PickSoSo\'nun yazılım çözümleri ile her şey çok daha hızlı, sorunsuz ve verimli hale geldi. Gerçekten faydalı bir deneyim.',
        name: 'Ahmet Yılmaz',
        role: 'Finans Müdürü',
        image: Fatih_Gurbuz
      }    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 3));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-lg overflow-hidden">
      <h3 className="text-2xl font-semibold text-center mb-4">Kullanıcı Yorumları</h3>
      <div className="relative">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 p-4 bg-gray-50 rounded-lg shadow-md mx-4 h-[230px] flex flex-col justify-between"
            >
              <p className="text-lg text-gray-700 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center space-x-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;