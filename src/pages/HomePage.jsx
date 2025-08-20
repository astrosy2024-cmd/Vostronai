import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Target, TrendingUp, Search, Lightbulb, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const HomePage = () => {
  const { toast } = useToast();

  const handleGetStarted = () => {
    toast({
      title: "أهلاً بك في VOSTRON AI!",
      description: "أنت الآن على وشك بدء رحلتك نحو مستقبل الذكاء الاصطناعي.",
    });
  };

  const features = [
    { icon: <Zap className="w-8 h-8" />, title: "تحليل فوري", description: "احصل على تحليلات وبيانات دقيقة في ثوانٍ معدودة." },
    { icon: <Search className="w-8 h-8" />, title: "تحسين SEO ذكي", description: "أدواتنا تساعدك على تصدر نتائج البحث بسهولة وفعالية." },
    { icon: <TrendingUp className="w-8 h-8" />, title: "توقع الاتجاهات", description: "ابق متقدمًا بخطوة من خلال توقع اتجاهات السوق المستقبلية." },
  ];

  const advantages = [
    "زيادة الإنتاجية",
    "توفير الوقت والتكاليف",
    "قرارات أكثر ذكاءً",
    "تجربة مستخدم مخصصة",
  ];

  return (
    <>
      <Helmet>
        <title>VOSTRON AI - أدوات ذكاء اصطناعي متطورة لتحسين SEO وأتمتة المهام</title>
        <meta name="description" content="VOSTRON AI يقدم حلولاً مبتكرة باستخدام الذكاء الاصطناعي..." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden tech-pattern">
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="gradient-text">مستقبل الذكاء بين يديك</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                VOSTRON AI يقدم حلولاً مبتكرة باستخدام الذكاء الاصطناعي لتعزيز أعمالك، بدءًا من تحسين محركات البحث وحتى تحليل البيانات المتقدم.
              </p>
              <div className="flex justify-center gap-4">
                <Button onClick={handleGetStarted} className="bg-[#2E8B57] hover:bg-[#1E90FF] text-white px-8 py-4 text-lg rounded-lg font-semibold transition-all duration-300">
                  ابدأ الآن
                </Button>
                <Link to="/about">
                  <Button variant="outline" className="text-[#1E90FF] border-[#1E90FF] hover:bg-[#1E90FF] hover:text-white px-8 py-4 text-lg rounded-lg font-semibold">
                    اعرف المزيد
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-16"
            >
              <img src="/path/to/your/dashboard-interface.png" alt="Dashboard Interface" className="rounded-2xl shadow-2xl w-full max-w-4xl mx-auto floating-animation" />
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold">لماذا تختار <span className="gradient-text">VOSTRON AI</span>؟</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-[#1a1f2e] p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="bg-gray-800 p-4 rounded-full inline-block mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Advantages Section */}
        <section className="py-20 bg-gradient-to-b from-[#1a1f2e] to-[#0B0F1A]">
          <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
              {/* Image Placeholder */}
              <img src="/path/to/your/advantages-image.png" alt="Advantages" className="rounded-2xl"/>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}>
              <h2 className="text-3xl font-bold mb-6">عزز أعمالك معنا</h2>
              <ul className="space-y-4">
                {advantages.map((adv, index) => (
                  <li key={index} className="flex items-center">
                    <Shield className="w-6 h-6 text-[#2E8B57] mr-3" />
                    <span className="text-lg">{adv}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
