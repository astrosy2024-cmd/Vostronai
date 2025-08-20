import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
// Icons from lucide-react
import {
  PenTool, Bot, Mic, FileText, BarChart2, Video, Wand2, Search,
  Filter, ArrowUpDown, BrainCircuit, Sparkles, Languages
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ToolsPage = () => {
  const { toast } = useToast();

  const handleToolClick = (toolName) => {
    toast({
      title: `تم اختيار أداة "${toolName}"`,
      description: "سيتم الآن توجيهك إلى صفحة الأداة لبدء الاستخدام.",
    });
  };

  const tools = [
    { name: "كاتب المقالات", description: "حوّل أفكارك إلى مقالات احترافية ومتوافقة مع SEO.", icon: <PenTool />, category: "كتابة", color: "from-blue-500 to-blue-600" },
    { name: "Chatbot الذكي", description: "تفاعل مع نماذجنا اللغوية المتقدمة للحصول على إجابات فورية.", icon: <Bot />, category: "محادثة", color: "from-purple-500 to-purple-600" },
    { name: "تحويل الصوت إلى نص", description: "تفريغ دقيق للملفات الصوتية والمقابلات بلمسة زر.", icon: <Mic />, category: "صوتيات", color: "from-green-500 to-green-600" },
    { name: "تلخيص النصوص", description: "احصل على خلاصة موجزة للمستندات الطويلة والأبحاث.", icon: <FileText />, category: "كتابة", color: "from-orange-500 to-orange-600" },
    { name: "مولد الصور", description: "أنشئ صورًا فنية فريدة من خلال وصف نصي بسيط.", icon: <Wand2 />, category: "صور", color: "from-pink-500 to-pink-600" },
    { name: "محلل البيانات", description: "استخرج رؤى قيمة من بياناتك لاتخاذ قرارات أفضل.", icon: <BarChart2 />, category: "تحليل", color: "from-teal-500 to-teal-600" },
    // ... more tools can be added here
  ];
  
  const categories = [
      "الكل", "كتابة", "محادثة", "صوتيات", "صور", "تحليل"
  ];

  return (
    <>
      <Helmet>
        <title>أدوات الذكاء الاصطناعي - VOSTRON AI</title>
        <meta name="description" content="استكشف مجموعتنا المتكاملة من أدوات الذكاء الاصطناعي..." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-[#0B0F1A] to-[#1a1f2e]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold">مجموعة أدواتنا</h1>
            <p className="text-lg text-gray-300 mt-4">كل ما تحتاجه لتعزيز إبداعك وإنتاجيتك في مكان واحد.</p>
          </motion.div>
        </section>

        {/* Filters and Tools Section */}
        <section className="py-20">
          <div className="container mx-auto">
            {/* Filter Bar */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap gap-4 justify-center mb-12">
              {categories.map(category => (
                <Button key={category} variant="outline" className="border-gray-600 hover:bg-gray-800">
                  {category}
                </Button>
              ))}
            </motion.div>

            {/* Tools Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-[#1a1f2e] rounded-2xl overflow-hidden shadow-lg flex flex-col group"
                >
                  <div className={`w-full p-6 bg-gradient-to-r ${tool.color} flex items-center justify-center`}>
                    <div className="text-white transform transition-transform duration-300 group-hover:scale-110">{tool.icon}</div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                    <p className="text-gray-400 mb-6 flex-grow">{tool.description}</p>
                    <Button onClick={() => handleToolClick(tool.name)} className="w-full mt-auto bg-gray-800 hover:bg-gray-700">
                      ابدأ الاستخدام
                    </Button>
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

export default ToolsPage;
