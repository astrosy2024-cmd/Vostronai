import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "تم إرسال رسالتك بنجاح!",
      description: "شكرًا لتواصلك معنا. سنقوم بالرد في أقرب وقت ممكن.",
    });
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, title: "البريد الإلكتروني", detail: "info@vostronai.com", href: "mailto:info@vostronai.com" },
    { icon: <Phone className="w-6 h-6" />, title: "الهاتف", detail: "+1 (123) 456-7890", href: "tel:+11234567890" },
    { icon: <MapPin className="w-6 h-6" />, title: "الموقع", detail: "الرياض، المملكة العربية السعودية", href: "#" },
  ];

  const faqs = [
    { q: "ما هي الخدمات التي تقدمونها؟", a: "نقدم مجموعة واسعة من الخدمات..." },
    { q: "كم تستغرق مدة إنجاز المشروع؟", a: "تعتمد المدة على حجم المشروع..." },
    { q: "هل تقدمون دعمًا فنيًا بعد التسليم؟", a: "نعم، نقدم خطط دعم فني متنوعة..." },
  ];

  return (
    <>
      <Helmet>
        <title>تواصل مع VOSTRON AI</title>
        <meta name="description" content="هل لديك سؤال أو مشروع؟ تواصل مع فريق VOSTRON AI..." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-[#0B0F1A] to-[#1a1f2e]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold">تواصل معنا</h1>
            <p className="text-lg text-gray-300 mt-4">نحن هنا لمساعدتك. أرسل لنا رسالة وسنعاود الاتصال بك.</p>
          </motion.div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="py-20">
          <div className="container grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
              <h2 className="text-3xl font-bold mb-6">معلومات التواصل</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gray-800 p-3 rounded-full">{info.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold">{info.title}</h3>
                      <a href={info.href} className="text-gray-400 hover:text-white">{info.detail}</a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}>
              <form onSubmit={handleSubmit} className="bg-[#1a1f2e] p-8 rounded-2xl shadow-2xl space-y-6">
                <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="الاسم الكامل" required className="bg-gray-800 border-gray-700"/>
                <Input name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="البريد الإلكتروني" required className="bg-gray-800 border-gray-700"/>
                <Input name="subject" value={formData.subject} onChange={handleInputChange} placeholder="الموضوع" required className="bg-gray-800 border-gray-700"/>
                <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="رسالتك..." required className="bg-gray-800 border-gray-700 min-h-[150px]"/>
                <Button type="submit" className="w-full bg-[#1E90FF] hover:bg-[#007BFF] py-3 text-lg">
                  إرسال الرسالة <Send className="w-5 h-5 mr-2"/>
                </Button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-t from-[#1a1f2e] to-[#0B0F1A]">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center container">
            <h2 className="text-3xl md:text-4xl font-bold">هل أنت جاهز للبدء؟</h2>
            <p className="text-lg text-gray-300 my-4 max-w-2xl mx-auto">
              دعنا نحول فكرتك إلى حقيقة. تواصل معنا اليوم لبدء مشروعك.
            </p>
            <Button className="bg-white text-[#1E90FF] hover:bg-gray-200 py-3 px-8 text-lg mt-4">
              ابدأ الآن مجانًا
            </Button>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
