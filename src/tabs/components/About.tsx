import React, { useState } from "react";
import Footer from "./Footer";
import CookieModal from "./CookieModal";
import TeamMemberCard from "./AboutComponents/TeamMemberCard";
import TestimonialSlider from "./AboutComponents/TestimonialSlider";
import Umut_Caliskan from '../../assets/pageImages/Umut_Caliskan.png';
import Sena_Kesgin from '../../assets/pageImages/Sena_Kesgin.png';
import Ipek_Caliskan from '../../assets/pageImages/Ipek_Caliskan.png';
import Baris_Kaplan from '../../assets/pageImages/Baris_Kaplan.png';
import Serhat_Gul from '../../assets/pageImages/Serhat_Gul.png';
import AboutInfoCard from "./AboutComponents/AboutInfoCard";

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hakkımızda Bölümü */}
      <div className="text-center py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Hakkımızda</h1>
        <p className="text-xl max-w-3xl mx-auto">
          PickSoSo Software Solution, teknoloji dünyasında kullanıcı odaklı inovasyonları benimseyen bir liderdir. 
          Misyonumuz, gelişen teknolojileri herkesin kolayca ulaşabileceği, güvenli ve hızlı çözüm araçlarına dönüştürmektir. 
          İleri görüşlülüğümüzle, tasarım ve teknoloji arasındaki mükemmel dengeyi yakalayarak, sektördeki standartları yeniden tanımlıyoruz. 
          Kullanıcılarımıza sadece bir yazılım değil, iş süreçlerini dönüştürebilecek güçlü araçlar sunuyoruz.
        </p>
      </div>

      {/* Neden Bizi Tercih Etmelisiniz Bölümü */}
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl text-center font-semibold mb-12 text-blue-600">Neden Bizi Tercih Etmelisiniz?</h2>
          <AboutInfoCard />
        </div>
      </div>

      {/* Misyon ve Vizyon Bölümleri */}
      <div className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-wrap justify-center items-center text-center">
            {/* Misyon */}
            <div className="w-full md:w-1/2 mb-8 flex flex-col items-center">
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">Misyonumuz</h2>
              <p className="text-lg max-w-xl mx-auto">
                Misyonumuz, her yaştan ve her sektörden kullanıcıya hitap eden, hızlı, güvenilir ve etkili yazılım çözümleri sunmaktır. 
                İnsan odaklı yaklaşımımızla, kullanıcılarımızın hayatını kolaylaştıran araçlar geliştiriyoruz. 
                Yenilikçi ve kullanıcı dostu tasarımlarımızla, teknolojiye ulaşmayı herkes için mümkün kılıyor, onların hedeflerine ulaşmalarını sağlıyoruz. 
                Kullanıcılarımıza değer katarken, iş dünyasında etkin ve sürdürülebilir çözümler üretiyoruz.
              </p>
            </div>
            
            {/* Vizyon */}
            <div className="w-full md:w-1/2 mb-8 flex flex-col items-center">
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">Vizyonumuz</h2>
              <p className="text-lg max-w-xl mx-auto">
                Vizyonumuz, teknolojinin sınırlarını zorlayarak sektördeki liderliğimizi pekiştirmektir. 
                Yenilikçi çözümlerimizle sadece sektöre yön vermekle kalmıyor, 
                aynı zamanda kullanıcı deneyimini her zaman bir adım öteye taşıyoruz. 
                Amacımız, iş süreçlerini daha verimli hale getiren ve güvenilir çözümler sunarak, 
                kullanıcılarımızın hem kişisel hem de profesyonel hayatlarını dönüştürmektir. 
                Geleceğe yön veren bir teknoloji şirketi olarak, her geçen gün daha güçlü adımlar atıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ekibimiz Bölümü */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl text-center font-semibold mb-12 text-blue-600">Ekibimiz</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <TeamMemberCard name="Umut Çalışkan" role="CEO" image={Umut_Caliskan} />
            <TeamMemberCard name="Barış Kaplan" role="CTO" image={Baris_Kaplan} />
            <TeamMemberCard name="Sena Kesgin" role="Sales and Marketing Specialist" image={Sena_Kesgin} />
            <TeamMemberCard name="İpek Tuğçe Çalışkan" role="Graphics Designer" image={Ipek_Caliskan} />
            <TeamMemberCard name="Mehmet Serhat Gül" role="Digital Marketing Manager" image={Serhat_Gul} />
          </div>
        </div>
      </div>

      {/* Kullanıcı Yorumları */}
      <div className="py-20 bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl text-center font-semibold mb-12">Kullanıcı Yorumları</h2>
          <TestimonialSlider />
        </div>
      </div>

      <CookieModal />
      <Footer />
    </div>
  );
};

export default About;
