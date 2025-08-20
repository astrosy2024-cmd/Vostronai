import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

// Icons
import { Zap, Target, TrendingUp, Lightbulb, Heart, Shield } from 'lucide-react';

// Components
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const AboutPage = () => {
  const { toast } = useToast();

  const handleContact = () => {
    toast({
      title: "تم نسخ البريد الإلكتروني!",
      description: "يمكنك الآن لصق البريد في تطبيقك المفضل.",
    });
    // In a real app, you'd also copy to clipboard here.
  };

  const stats = [
    { number: "15+", label: "سنوات الخبرة" },
    { number: "50+", label: "مشروعًا ناجحًا" },
    { number: "100%", label: "رضا العملاء" },
    { number: "24/7", label: "دعم فني" },
  ];

  const values = [
    { icon: <Lightbulb className="w-8 h-8" />, title: "الابتكار", description: "نسعى دائمًا لتطبيق أحدث الحلول لتبقى في المقدمة." },
    { icon: <Heart className="w-8 h-8" />, title: "الشغف", description: "نضع كل شغفنا في الخدمة لنصنع تجربة فريدة." },
    { icon: <Shield className="w-8 h-8" />, title: "الموثوقية", description: "نقدم حلولاً آمنة وموثوقة يمكنك الاعتماد عليها." },
  ];

  const team = [
    { name: "أحمد محمد", role: "خبير ومطور ذكاء اصطناعي", image: "Professional portrait of Ahmed Mohamed, AI expert" },
    { name: "سارة حسن", role: "مديرة تطوير برمجيات ومتخصصة تعلم الآلة", image: "Expressive portrait of Sarah Hassan, software development manager" },
    { name: "نور علي", role: "مديرة تسويق رقمي ومتخصصة في النمو", image: "Professional portrait of Nourseen Ali, digital marketing manager" },
  ];

  return (
    <>
      <Helmet>
        <title>حول VOSTRON AI</title>
        <meta name="description" content="تعرف على قصة VOSTRON AI ورؤيتنا في تطوير أدوات الذكاء الاصطناعي..." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-[#0B0F1A] to-[#1a1f2e]">
          <motion.div 
            className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">قصتنا</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              بدأت رحلتنا بشغف لتسخير قوة الذكاء الاصطناعي لتمكين الأفراد والشركات من تحقيق أهدافهم بطرق لم تكن ممكنة من قبل.
            </p>
          </motion.div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-text">VOSTRON AI</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                في VOSTRON AI، نحن نؤمن بأن التكنولوجيا يجب أن تكون في خدمة الإنسان. فريقنا مكون من خبراء ومبتكرين يعملون بلا كلل لتطوير أدوات ذكية...
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                رؤيتنا هي خلق مستقبل يتعاون فيه البشر والذكاء الاصطناعي بسلاسة...
              </p>
              <Button onClick={handleContact} className="bg-[#0D0D0D] hover:bg-[#000000] text-white px-8 py-3 text-lg rounded-lg font-semibold transition-colors">
                تواصل معنا
              </Button>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl shadow-2xl w-full">
                {/* Image placeholder */}
                <img src="https://images.unsplash.com/photo-168184025442... (example)" alt="AI Technology" className="rounded-2xl w-full h-full object-cover"/>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-[#1a1f2e] to-[#0B0F1A]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                نجاحنا في <span className="gradient-text">أرقام</span>
              </h2>
              <p className="text-gray-300">الأرقام التي تدعم ثقتكم بنا</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1E90FF] to-[#2E8B57] rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-105 transition-all duration-300">
                    <span className="text-3xl font-bold">{stat.number}</span>
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* And so on for the Values and Team sections... */}
      </div>
    </>
  );
};

export default AboutPage;
