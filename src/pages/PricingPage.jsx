import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Check, X, Zap, Crown, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const PricingPage = () => {
  const { toast } = useToast();

  const handleSubscribe = (planName) => {
    toast({
      title: `تم اختيار خطة "${planName}"!`,
      description: "خطوة ممتازة! سيتم الآن نقلك لإكمال عملية الاشتراك.",
    });
  };

  const plans = [
    {
      name: "Free",
      nameAr: "مجانية",
      price: "0",
      period: "مدى الحياة",
      description: "مثالية للمبتدئين والاستخدام الشخصي البسيط.",
      icon: <Crown className="w-6 h-6" />,
      color: "from-gray-500 to-gray-600",
      features: ["صياغة محدودة", "دعم عبر البريد الإلكتروني"],
      limitations: ["محدود بـ 1000 كلمة كل شهر", "بدون دعم أولوية"],
      popular: false,
      cta: "ابدأ مجانًا",
    },
    {
      name: "Pro",
      nameAr: "الاحترافية",
      price: "49",
      period: "شهريًا",
      description: "الأفضل للمدونين والمسوقين المحترفين.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-[#1E90FF] to-[#0066CC]",
      features: ["إعادة صياغة غير محدودة", "تحسين SEO تلقائي", "دعم أولوية 24/7"],
      limitations: [],
      popular: true,
      cta: "اشترك الآن",
    },
    {
      name: "Business",
      nameAr: "الأعمال",
      price: "99",
      period: "شهريًا",
      description: "حلول متكاملة للشركات والفرق الكبيرة.",
      icon: <Building className="w-6 h-6" />,
      color: "from-[#2ECC71] to-[#27AE60]",
      features: ["جميع ميزات برو", "تحليلات متقدمة", "دعم متعدد المستخدمين"],
      limitations: [],
      popular: false,
      cta: "تواصل معنا",
    },

  ];
  
  const faqs = [
      { question: "هل يمكنني تغيير خطتي في أي وقت؟", answer: "نعم، يمكنك ترقية أو تخفيض خطتك في أي وقت من إعدادات حسابك." },
      { question: "هل هناك ضمان لاسترداد الأموال؟", answer: "نعم، نقدم ضمان استرداد الأموال لمدة 30 يومًا على الخطط المدفوعة." },
      { question: "هل تدعم الأداة اللغة العربية بالكامل؟", answer: "نعم، جميع أدواتنا تدعم اللغة العربية بشكل كامل." },
  ];

  return (
    <>
      <Helmet>
        <title>الأسعار - VOSTRON AI</title>
        <meta name="description" content="اختر الخطة المناسبة لك من خطط VOSTRON AI..." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-[#0B0F1A] to-[#1a1f2e]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold">خطط أسعار مرنة</h1>
            <p className="text-lg text-gray-300 mt-4">اختر الخطة التي تناسب احتياجاتك وابدأ رحلتك معنا.</p>
          </motion.div>
        </section>

        {/* Pricing Cards Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative border rounded-2xl p-8 flex flex-col ${plan.popular ? 'border-purple-500 scale-105' : 'border-gray-700'}`}
                >
                  {plan.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">الأكثر شيوعًا</div>}
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">{plan.nameAr}</h2>
                    <div className={`p-2 bg-gray-800 rounded-full`}>{plan.icon}</div>
                  </div>
                  <p className="text-gray-400 mb-6 min-h-[50px]">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-400">/ {plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2"/>{feature}</li>
                    ))}
                    {plan.limitations.map((limitation, i) => (
                      <li key={i} className="flex items-center opacity-50"><X className="w-5 h-5 text-red-500 mr-2"/>{limitation}</li>
                    ))}
                  </ul>
                  <Button onClick={() => handleSubscribe(plan.nameAr)} className={`w-full mt-auto bg-gradient-to-r ${plan.color}`}>
                    {plan.cta}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-t from-[#1a1f2e] to-[#0B0F1A]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">أسئلة شائعة</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                        {/* A real implementation would use an accordion component here */}
                        <div className="bg-[#1a1f2e] p-6 rounded-lg">
                            <h3 className="font-semibold text-lg">{faq.question}</h3>
                            <p className="text-gray-400 mt-2">{faq.answer}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;
