import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, TrendingUp, Search, PenTool } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const BlogPage = () => {
  const { toast } = useToast();

  const handleReadMore = (title) => {
    toast({
      title: "قيد التطوير",
      description: `عند النقر، سيتم نقلك إلى صفحة المقال الكامل لـ "${title}".`,
    });
  };

  const featuredPost = {
    title: "مستقبل الذكاء الاصطناعي في تحسين محركات البحث (SEO)",
    excerpt: "استكشف كيف يغير الذكاء الاصطناعي مشهد تحسين محركات البحث، وما هي أفضل الممارسات للبقاء في المقدمة.",
    author: "أحمد محمد",
    date: "15 أغسطس 2024",
    readTime: "8 دقائق",
    image: "AI and SEO future trends",
    category: "الذكاء الاصطناعي",
  };

  const blogPosts = [
    { title: "أسرار تحسين محركات البحث (SEO) للمحتوى المرئي", author: "سارة حسن", date: "10 أغسطس 2024", category: "SEO", icon: <TrendingUp className="w-5 h-5" /> },
    { title: "كيفية كتابة محتوى يحول الزوار إلى عملاء", author: "علياء خالد", date: "5 أغسطس 2024", category: "كتابة المحتوى", icon: <PenTool className="w-5 h-5" /> },
    { title: "أفضل الممارسات لإنشاء محتوى مدعوم بالذكاء الاصطناعي", author: "أحمد محمد", date: "1 يوليو 2024", category: "الذكاء الاصطناعي", image: "AI-powered content creation" },
    { title: "أدوات البحث عن الكلمات المفتاحية لمنافسة فعالة", author: "فهد الغامدي", date: "25 يوليو 2024", category: "SEO", icon: <Search className="w-5 h-5" /> },
    // ... other posts
  ];

  const categories = [
    { name: "الذكاء الاصطناعي", count: 12, color: "bg-blue-500" },
    { name: "SEO", count: 25, color: "bg-purple-500" },
    { name: "كتابة المحتوى", count: 18, color: "bg-orange-500" },
  ];

  return (
    <>
      <Helmet>
        <title>مدونة VOSTRON AI - رؤى وأفكار في الذكاء الاصطناعي وSEO</title>
        <meta name="description" content="اكتشف أحدث المقالات والنصائح حول الذكاء الاصطناعي وتحسين محركات البحث..." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-[#0B0F1A] to-[#1a1f2e]">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">رؤى وأفكار</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              مكتبتك لكل ما هو جديد ومبتكر في عالم الذكاء الاصطناعي وتحسين محركات البحث.
            </p>
          </motion.div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-[#1a1f2e] rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="p-8">
                <span className="bg-[#2E8B57] text-white px-3 py-1 rounded-full text-sm font-semibold">{featuredPost.category}</span>
                <h2 className="text-2xl md:text-3xl font-bold my-4 leading-tight">{featuredPost.title}</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span><User className="inline-block mr-1" /> {featuredPost.author}</span>
                  <span><Calendar className="inline-block mr-1" /> {featuredPost.date}</span>
                </div>
                <Button onClick={() => handleReadMore(featuredPost.title)} className="mt-6 bg-[#1E90FF] hover:bg-[#007BFF]">
                  اقرأ المزيد <ArrowRight className="w-4 h-4 mr-2" />
                </Button>
              </div>
              <div className="relative h-full w-full">
                <img src="https://images.unsplash.com/photo-1612198526... (example)" alt={featuredPost.title} className="w-full h-full object-cover"/>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-gradient-to-b from-[#1a1f2e] to-[#0B0F1A]">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
            >
              <span className="gradient-text">تصفح حسب الفئة</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-lg bg-[#1a1f2e] text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => handleReadMore(category.name)}
                >
                  <div className={`w-12 h-12 ${category.color} rounded-full mx-auto mb-4`}></div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-400">{category.count} مقال</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
