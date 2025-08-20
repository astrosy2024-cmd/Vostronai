import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = (e) => {
    e.preventDefault();
    toast({
      title: "قيد التطوير",
      description: "هذه الميزة لا تزال قيد الإنشاء. ترقبوا التحديثات!",
    });
  };

  return (
    <footer className="bg-[#0B0F1A] text-white py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E90FF] to-[#FF69B4]">VOSTRON AI</span>
          </h3>
          <p className="text-gray-400">
            نحن نبتكر مستقبل الذكاء الاصطناعي، نقدم حلولاً ذكية لتبسيط المهام اليومية وتعزيز الإبداع.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">روابط سريعة</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-[#1E90FF] transition-colors">الرئيسية</Link></li>
            <li><Link to="/pricing" className="text-gray-400 hover:text-[#1E90FF] transition-colors">الأسعار</Link></li>
            <li><Link to="/storage" className="text-gray-400 hover:text-[#1E90FF] transition-colors">التخزين</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-[#1E90FF] transition-colors">حول</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">خدماتنا</h3>
          <ul className="space-y-2">
            <li><span className="text-gray-400">تطوير المواقع</span></li>
            <li><span className="text-gray-400">تصميم SEO</span></li>
            <li><span className="text-gray-400">التسويق الرقمي</span></li>
            <li><span className="text-gray-400">التحليل البياني</span></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">تواصل معنا</h3>
          <div className="space-y-2 text-gray-400">
            <p>Email: <a href="mailto:info@vostronai.com" className="hover:text-[#1E90FF]">info@vostronai.com</a></p>
            <p>Phone: <span dir="ltr">+1 (123) 456-7890</span></p>
            <div className="flex space-x-4 mt-2">
              <a href="#" onClick={handleSocialClick} className="hover:text-[#1E90FF]"><i className="fab fa-twitter"></i></a>
              <a href="#" onClick={handleSocialClick} className="hover:text-[#1E90FF]"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" onClick={handleSocialClick} className="hover:text-[#1E90FF]"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-400">&copy; 2024 VOSTRON AI. جميع الحقوق محفوظة.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <button onClick={handleSocialClick} className="text-gray-400 hover:text-[#1E90FF] transition-colors">سياسة الخصوصية</button>
          <button onClick={handleSocialClick} className="text-gray-400 hover:text-[#1E90FF] transition-colors">شروط الخدمة</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
