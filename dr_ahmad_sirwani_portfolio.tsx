import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Newspaper, 
  Globe, 
  Mail, 
  Linkedin, 
  Twitter, 
  ExternalLink, 
  ChevronRight, 
  Menu, 
  X, 
  Award, 
  FileText, 
  Send, 
  CheckCircle,
  Search,
  Check,
  Languages,
  UserCheck,
  TrendingUp,
  Landmark,
  Radio,
  Share2
} from 'lucide-react';

// Uploaded profile photo reference
const PROFILE_IMAGE = "image_fb3952.jpg";

// Multilingual Content Database
const translations = {
  ku: {
    dir: "rtl",
    nav: {
      about: "دەربارەی من",
      expertise: "پسپۆڕییەکان",
      experience: "ئەزموون",
      articles: "وتار و ڕاگەیاندن",
      research: "توێژینەوەکان",
      contact: "پەیوەندی"
    },
    hero: {
      badge: "مامۆستا و توێژەر لە زانکۆی هەڵەبجە",
      name: "د. ئەحمەد سیروانی",
      title: "دکتۆرا لە ڕاگەیاندن و شیکارکاری ڕاگەیاندن و سیاسەتی تورکیا",
      bio: "مامۆستای بەشی ڕاگەیاندن لە زانکۆی هەڵەبجە. توێژەر و شیکارکاری پسپۆڕ لە بواری ڕاگەیاندنی هەرێمی، ڕۆژنامەنووسی لێکۆڵینەوەیی، و سیاسەت و مێدیای تورکیا و ڕۆژهەڵاتی ناوەڕاست.",
      btnArticles: "بینی وتارەکان",
      btnContact: "پەیوەندیکردن"
    },
    stats: [
      { label: "ساڵ ئەزموونی ئەکادیمی", value: "12+" },
      { label: "توێژینەوەی زانستی بڵاوکراوە", value: "18+" },
      { label: "وتاری ڕۆژنامەوانی و شیکاری", value: "85+" },
      { label: "قوتابی دەرچوو", value: "500+" }
    ],
    about: {
      subtitle: "پاشخانی زانستی و پیشەیی",
      title: "دەربارەی د. ئەحمەد سیروانی",
      p1: "د. ئەحمەد سیروانی مامۆستای کۆلێژی زانستە مرۆڤایەتییەکان - بەشی ڕاگەیاندنە لە زانکۆی هەڵەبجە. خاوەنی بڕوانامەی دکتۆرایە لە زانستەکانی ڕاگەیاندن و پەیوەندییە گشتییەکان.",
      p2: "وەک توێژەر و ڕۆژنامەنووسێکی سەربەخۆ، تەرکیزێکی تایبەتی هەیە لەسەر شیکردنەوەی ستراتیژی پەیوەندییەکان، کاریگەری مێدیا لەسەر بڕیاری سیاسی، و بە تایبەتیش شیکاری تێروتەسەل بۆ گەشەسەندنی سیاسی، کۆمەڵایەتی و ڕاگەیاندنی لە وڵاتی تورکیا و دەوروبەری.",
      quote: "ڕاگەیاندنی پرۆفێشیناڵ پردی بەیەکگەیشتنی ڕاستییەکان و بڕیاردانی هۆشیارانەی کۆمەڵگەیە."
    },
    expertise: {
      subtitle: "بواری کارکردن",
      title: "پسپۆڕییە سەرەکییەکان",
      items: [
        {
          title: "شیکاری سیاسەت و مێدیای تورکیا",
          desc: "شیکاری تێروتەسەل بۆ مێدیای تورکی، ڕەوتە سیاسییەکان، و کاریگەرییە ناوچەیییەکانی ئەنقەرە لەسەر ڕۆژهەڵاتی ناوەڕاست."
        },
        {
          title: "ڕۆژنامەنووسی لێکۆڵینەوەیی",
          desc: "ڕاهێنان و توێژینەوە لەسەر بەڵگەدارکردنی زانیارییەکان، ئیتیكی ڕۆژنامەنووسی، و ئامرازە نوێیەکانی ڕاگەیاندن."
        },
        {
          title: "تەکنیکەکانی پەیوەندیکردنی سیاسی",
          desc: "خوێندنەوە بۆ گوتاری سیاسی لە ڕاگەیاندن و چۆنیەتی دروستکردنی کەمپینی پەیوەندییە گشتییەکان."
        },
        {
          title: "وانەوتنەوەی زانستی لە زانکۆ",
          desc: "پێشکەشکردنی وانەکانی تیۆری ڕاگەیاندن، ڕاگەیاندنی نێودەوڵەتی و ئیتیکی ڕۆژنامەنووسی لە زانکۆی هەڵەبجە."
        }
      ]
    },
    experience: {
      subtitle: "پێگەی کارکردن",
      title: "مێژووی ئەکادیمی و ڕۆژنامەوانی",
      academic: "کار و پلەی ئەکادیمی",
      media: "چالاکی ڕۆژنامەوانی و میدیایی",
      items: [
        {
          period: "2018 - تا ئێستا",
          role: "مامۆستا و توێژەر لە بەشی ڕاگەیاندن",
          org: "زانکۆی هەڵەبجە",
          desc: "وتنەوەی وانەکانی ڕاگەیاندنی نێودەوڵەتی، ئیتیكی مێدیا، و سەرپەرشتیکردنی توێژینەوەی دەرچوونی قوتابیان."
        },
        {
          period: "2016 - تا ئێستا",
          role: "شیکارکاری سیاسی و پسپۆڕی کاروباری تورکیا",
          org: "دەزگا مێدیایی و ناوەندەکانی توێژینەوە",
          desc: "نووسینی وتاری شیکاری و بەشداری وەک میوان لە بەرنامە مێدیاییەکان بۆ هەڵسەنگاندنی ڕۆڵی تورکیا لە ناوچەکە."
        },
        {
          period: "2014 - 2018",
          role: "توێژەری دکتۆرا لە زانستەکانی ڕاگەیاندن",
          org: "ناوەندی زانستی و زانکۆیی",
          desc: "ئەنجامدانی توێژینەوە لەسەر گوتاری ڕاگەیاندن لە وڵاتانی ڕۆژهەڵاتی ناوەڕاست و تورکیا."
        }
      ]
    },
    articles: {
      subtitle: "بڵاوکراوەکان",
      title: "وتارە ڕۆژنامەوانییەکان و شیکارییەکان",
      all: "هەموو وتارەکان",
      turkey: "کاروباری تورکیا",
      media: "زانستی ڕاگەیاندن",
      geopolitics: "ژیوپۆلیتیک",
      readMore: "خوێندنەوەی وتار",
      items: [
        {
          id: 1,
          category: "turkey",
          categoryName: "کاروباری تورکیا",
          title: "ڕۆڵی مێدیای سەردەم لە داڕشتنەوەی سیاسەتی دەرەوەی تورکیا",
          date: "١٥ ئەیلوولی ٢٠٢٥",
          summary: "شیکارییەک لەسەر چۆنیەتی بەکارهێنانی کەناڵە ئاسمانییەکان و تۆڕە کۆمەڵایەتییەکان لەلایەن ئەنقەرەوە بۆ دروستکردنی کاریگەری نەرێت لەسەر وڵاتانی دراوسێ.",
          readTime: "٦ خولەک خوێندنەوە"
        },
        {
          id: 2,
          category: "media",
          categoryName: "زانستی ڕاگەیاندن",
          title: "ئیتیکی ڕۆژنامەنووسی لە سەردەمی ژیری دەستکرددا",
          date: "٠٢ ئابی ٢٠٢٥",
          summary: "لێکۆڵینەوە لەسەر ئاڵۆزییە نوێیەکانی بەردەم ڕۆژنامەنووسان لە جیاکردنەوەی هەواڵی ڕاستەقینە لە زانیاری هەڵبەستراو.",
          readTime: "٨ خولەک خوێندنەوە"
        },
        {
          id: 3,
          category: "turkey",
          categoryName: "کاروباری تورکیا",
          title: "پەیوەندییەکانی هەرێمی کوردستان و تورکیا لە ڕوانگەی مێدیاوە",
          date: "١٠ ئایاری ٢٠٢٥",
          summary: "خوێندنەوەی گوتاری مێدیایی لەنێوان هەولێر و ئەنقەرە و رەنگدانەوەی لەسەر پەیوەندییە ئابووری و سیاسییەکان.",
          readTime: "٥ خولەک خوێندنەوە"
        },
        {
          id: 4,
          category: "geopolitics",
          categoryName: "ژیوپۆلیتیک",
          title: "گۆڕانکاری لە پێگەی مێدیای کوردی لە ڕۆژهەڵاتی ناوەڕاست",
          date: "١٨ شوباتی ٢٠٢٥",
          summary: "ڕوانگەیەک لەسەر گەشەسەندنی بەشی کوردی لە کەناڵە نێودەوڵەتییەکان و کاریگەرییان لەسەر ڕای گشتی.",
          readTime: "٧ خولەک خوێندنەوە"
        }
      ]
    },
    research: {
      subtitle: "ئەکادیمی",
      title: "توێژینەوە زانستییەکان",
      items: [
        {
          title: "گوتاری مێدیای تورکی سەبارەت بە پرسی کورد (توێژینەوەی شیکاری بەراوردکاری)",
          journal: "گۆڤاری زانکۆی هەڵەبجە بۆ زانستە مرۆڤایەتییەکان",
          year: "2024",
          abstract: "توێژینەوەیەکە لەسەر شیکردنەوەی چوارچێوەی هەواڵەکان لە کەناڵە سەرەکییەکانی تورکیادا لە ماوەی ٥ ساڵی ڕابردوودا."
        },
        {
          title: "کاریگەری تۆڕە کۆمەڵایەتییەکان لەسەر ئاڕاستەکردنی ڕای گشتی قوتابیانی زانکۆ",
          journal: "گۆڤاری توێژینەوەی زانستەکانی ڕاگەیاندن",
          year: "2023",
          abstract: "دیراسەیەکی مەیدانییە لەسەر بەکارهێنانی پلاتفۆرمە دیجیتاڵییەکان لەلایەن گەنجانەوە لە هەرێمی کوردستان."
        }
      ]
    },
    contact: {
      subtitle: "پەیوەندیکردن",
      title: "پەیوەندی بە د. ئەحمەد سیروانی بکە",
      desc: "بۆ داواکاری وتار، بەشداری لە کۆنفرانس، پڕۆژەی ئەکادیمی یان بەرنامەی مێدیایی دەتوانیت ئیمەیڵ بنێریت.",
      location: "هەرێمی کوردستان، زانکۆی هەڵەبجە - کۆلێژی زانستە مرۆڤایەتییەکان",
      email: "ahmad.sirwani@uoh.edu.iq",
      formName: "ناوت",
      formEmail: "ئیمەیڵەکەت",
      formSubject: "ب بابەت",
      formMessage: "پەیامەکەت",
      sendBtn: "ناردنی پەیام",
      successMsg: "سوپاس! پەیامەکەت بە سەرکەوتوویی گەیشت."
    }
  },

  en: {
    dir: "ltr",
    nav: {
      about: "About",
      expertise: "Expertise",
      experience: "Experience",
      articles: "Articles & Media",
      research: "Research",
      contact: "Contact"
    },
    hero: {
      badge: "Lecturer & Researcher @ University of Halabja",
      name: "Dr. Ahmad Sirwani",
      title: "PhD in Mass Communication | Media Analyst & Turkey Specialist",
      bio: "Lecturer at the Department of Media, University of Halabja. Independent researcher and analyst specializing in Middle Eastern journalism, media ethics, political communication, and Turkish regional affairs.",
      btnArticles: "View Articles",
      btnContact: "Get in Touch"
    },
    stats: [
      { label: "Years Academic Exp.", value: "12+" },
      { label: "Published Papers", value: "18+" },
      { label: "Journalistic Articles", value: "85+" },
      { label: "Graduated Students", value: "500+" }
    ],
    about: {
      subtitle: "Background & Profile",
      title: "About Dr. Ahmad Sirwani",
      p1: "Dr. Ahmad Sirwani is a lecturer in the Department of Media, Faculty of Human Sciences at the University of Halabja. He holds a PhD in Mass Communication and Public Relations.",
      p2: "As an academic researcher and political commentator, his work focuses on strategic communication, international journalism, media framing, and in-depth analysis of Turkish politics and foreign policy in the Middle East.",
      quote: "Professional media bridges the gap between verified truths and informed society decisions."
    },
    expertise: {
      subtitle: "Fields of Focus",
      title: "Core Expertise",
      items: [
        {
          title: "Turkish Media & Politics Analysis",
          desc: "In-depth research on Turkish media discourse, political dynamics, foreign policy in Ankara, and regional geopolitics."
        },
        {
          title: "Investigative Journalism",
          desc: "Training and methodology in data verification, source ethics, investigative techniques, and digital reporting."
        },
        {
          title: "Political Communication",
          desc: "Deconstructing political propaganda, public discourse framing, and strategic communication campaigns."
        },
        {
          title: "Academic Lecturing",
          desc: "Teaching core courses in Media Theory, International Journalism, and Ethics at the University of Halabja."
        }
      ]
    },
    experience: {
      subtitle: "Career Journey",
      title: "Academic & Professional Timeline",
      academic: "Academic Positions",
      media: "Media & Analytical Roles",
      items: [
        {
          period: "2018 - Present",
          role: "Lecturer & Researcher (Media Dept.)",
          org: "University of Halabja",
          desc: "Teaching International Journalism, Media Ethics, and supervising undergraduate theses."
        },
        {
          period: "2016 - Present",
          role: "Political Analyst & Turkish Affairs Specialist",
          org: "Media Outlets & Think Tanks",
          desc: "Authoring analytical essays and commenting on TV channels regarding Turkish domestic & foreign policy."
        },
        {
          period: "2014 - 2018",
          role: "PhD Researcher in Communication",
          org: "Academic Research Center",
          desc: "Conducting thesis research on Middle Eastern media framing and comparative press freedom."
        }
      ]
    },
    articles: {
      subtitle: "Publications",
      title: "Journalistic Articles & Commentary",
      all: "All Articles",
      turkey: "Turkey Affairs",
      media: "Media Studies",
      geopolitics: "Geopolitics",
      readMore: "Read Article",
      items: [
        {
          id: 1,
          category: "turkey",
          categoryName: "Turkey Affairs",
          title: "The Role of Modern Media in Reshaping Turkish Foreign Policy",
          date: "Sept 15, 2025",
          summary: "An analytical study on how satellite channels and social media are utilized by Ankara to shape soft power.",
          readTime: "6 min read"
        },
        {
          id: 2,
          category: "media",
          categoryName: "Media Studies",
          title: "Journalistic Ethics in the Age of Artificial Intelligence",
          date: "Aug 02, 2025",
          summary: "Examining new challenges facing reporters in discerning verified facts from automated misinformation.",
          readTime: "8 min read"
        },
        {
          id: 3,
          category: "turkey",
          categoryName: "Turkey Affairs",
          title: "KRG-Turkey Relations Through the Lens of Media Coverage",
          date: "May 10, 2025",
          summary: "Evaluating regional news framing between Erbil and Ankara and its impact on trade & political dialogue.",
          readTime: "5 min read"
        },
        {
          id: 4,
          category: "geopolitics",
          categoryName: "Geopolitics",
          title: "The Evolving Position of Kurdish Media in Middle Eastern Geopolitics",
          date: "Feb 18, 2025",
          summary: "Insights into the growth of Kurdish-language broadcasting in global news organizations.",
          readTime: "7 min read"
        }
      ]
    },
    research: {
      subtitle: "Academic Papers",
      title: "Peer-Reviewed Research",
      items: [
        {
          title: "Turkish Media Discourse Regarding the Kurdish Issue (Comparative Study)",
          journal: "Journal of Halabja University for Human Sciences",
          year: "2024",
          abstract: "A comparative framing analysis of news coverage across major mainstream Turkish outlets over five years."
        },
        {
          title: "Social Media Impact on Public Opinion Direction Among University Students",
          journal: "Media Sciences Academic Journal",
          year: "2023",
          abstract: "Field study examining digital news consumption habits of youth in the Kurdistan Region."
        }
      ]
    },
    contact: {
      subtitle: "Get in Touch",
      title: "Contact Dr. Ahmad Sirwani",
      desc: "For academic inquiries, keynote invitations, media interviews, or joint research projects.",
      location: "Kurdistan Region, University of Halabja - Faculty of Human Sciences",
      email: "ahmad.sirwani@uoh.edu.iq",
      formName: "Your Name",
      formEmail: "Your Email",
      formSubject: "Subject",
      formMessage: "Message",
      sendBtn: "Send Message",
      successMsg: "Thank you! Your message has been sent successfully."
    }
  },

  tr: {
    dir: "ltr",
    nav: {
      about: "Hakkında",
      expertise: "Uzmanlık",
      experience: "Deneyim",
      articles: "Makaleler ve Medya",
      research: "Araştırma",
      contact: "İletişim"
    },
    hero: {
      badge: "Halabja Üniversitesi Öğretim Üyesi ve Araştırmacı",
      name: "Dr. Ahmet Sirwani",
      title: "İletişim Doktoru | Medya Analisti ve Türkiye İşleri Uzmanı",
      bio: "Halabja Üniversitesi Medya Bölümü Öğretim Üyesi. Ortadoğu gazeteciliği, medya etiği, siyasal iletişim ve Türkiye'nin bölgesel politikaları üzerine araştırmacı ve analist.",
      btnArticles: "Makaleleri Gör",
      btnContact: "İletişime Geç"
    },
    stats: [
      { label: "Yıllık Akademik Deneyim", value: "12+" },
      { label: "Yayınlanan Bildiri", value: "18+" },
      { label: "Gazetecilik Makalesi", value: "85+" },
      { label: "Mezun Öğrenci", value: "500+" }
    ],
    about: {
      subtitle: "Özgeçmiş",
      title: "Dr. Ahmet Sirwani Hakkında",
      p1: "Dr. Ahmet Sirwani, Halabja Üniversitesi İnsan Bilimleri Fakültesi Medya Bölümü'nde öğretim üyesidir. İletişim Bilimleri ve Halkla İlişkiler alanında doktora derecesine sahiptir.",
      p2: "Bağımsız bir araştırmacı ve medya analisti olarak çalışmaları stratejik iletişim, uluslararası gazetecilik ve özellikle Türkiye politikası ile Ortadoğu'daki bölgesel medyanın analizi üzerine yoğunlaşmaktadır.",
      quote: "Profesyonel medya, doğrulanmış gerçekler ile bilinçli toplum kararları arasındaki köprüdür."
    },
    expertise: {
      subtitle: "Uzmanlık Alanları",
      title: "Temel Yetkinlikler",
      items: [
        {
          title: "Türkiye Medyası ve Siyaset Analizi",
          desc: "Türk medyası, siyasi dinamikler, Ankara'nın dış politikası ve Ortadoğu'daki bölgesel etkileri üzerine derinlemesine analiz."
        },
        {
          title: "Araştırmacı Gazetecilik",
          desc: "Veri doğrulama, kaynak etiği, araştırmacı gazetecilik teknikleri ve dijital habercilik üzerine eğitim ve araştırmalar."
        },
        {
          title: "Siyasal İletişim",
          desc: "Siyasi söylem analizi, kamuoyu oluşturma ve stratejik iletişim kampanyalarının incelenmesi."
        },
        {
          title: "Akademik Dersler",
          desc: "Halabja Üniversitesi'nde Medya Teorisi, Uluslararası Gazetecilik ve Medya Etiği derslerinin verilmesi."
        }
      ]
    },
    experience: {
      subtitle: "Kariyer Yolculuğu",
      title: "Akademik ve Medya Geçmişi",
      academic: "Akademik Görevler",
      media: "Medya ve Analistlik Görevleri",
      items: [
        {
          period: "2018 - Halen",
          role: "Öğretim Üyesi & Araştırmacı",
          org: "Halabja Üniversitesi Medya Bölümü",
          desc: "Uluslararası Gazetecilik ve Medya Etiği dersleri verme, lisans tezlerine danışmanlık yapma."
        },
        {
          period: "2016 - Halen",
          role: "Siyaset Analisti & Türkiye Uzmanı",
          org: "Medya Kuruluşları ve Düşünce Kuruluşları",
          desc: "Türkiye iç ve dış politikasına ilişkin makaleler yazma ve TV kanallarında değerlendirmelerde bulunma."
        },
        {
          period: "2014 - 2018",
          role: "İletişim Doktora Araştırmacısı",
          org: "Akademik Araştırma Merkezi",
          desc: "Ortadoğu medyası ve karşılaştırmalı basın özgürlüğü üzerine doktora tezi araştırmaları."
        }
      ]
    },
    articles: {
      subtitle: "Yayınlar",
      title: "Gazetecilik Makaleleri ve Analizler",
      all: "Tüm Makaleler",
      turkey: "Türkiye İşleri",
      media: "Medya Çalışmaları",
      geopolitics: "Jeopolitik",
      readMore: "Makaleyi Oku",
      items: [
        {
          id: 1,
          category: "turkey",
          categoryName: "Türkiye İşleri",
          title: "Türkiye Dış Politikasının Şekillenmesinde Modern Medyanın Rolü",
          date: "15 Eylül 2025",
          summary: "Ankara'nın yumuşak güç oluşturmak için uydu kanallarını ve sosyal medyayı nasıl kullandığına dair analiz.",
          readTime: "6 dk okuma"
        },
        {
          id: 2,
          category: "media",
          categoryName: "Medya Çalışmaları",
          title: "Yapay Zeka Çağında Gazetecilik Etiği",
          date: "02 Ağustos 2025",
          summary: "Gazetecilerin gerçek haberleri sahte bilgilerden ayırmada karşılaştığı yeni zorluklar.",
          readTime: "8 dk okuma"
        },
        {
          id: 3,
          category: "turkey",
          categoryName: "Türkiye İşleri",
          title: "Medya Çerçevesinden IKBY-Türkiye İlişkileri",
          date: "10 Mayıs 2025",
          summary: "Erbil ile Ankara arasındaki medya söyleminin ekonomik ve siyasi diyalog üzerindeki yansımaları.",
          readTime: "5 dk okuma"
        },
        {
          id: 4,
          category: "geopolitics",
          categoryName: "Jeopolitik",
          title: "Ortadoğu Jeopolitiğinde Kürt Medyasının Değişen Konumu",
          date: "18 Şubat 2025",
          summary: "Uluslararası haber kuruluşlarında Kürtçe yayıncılığın gelişimi üzerine değerlendirmeler.",
          readTime: "7 dk okuma"
        }
      ]
    },
    research: {
      subtitle: "Akademik",
      title: "Hakemli Araştırma Makaleleri",
      items: [
        {
          title: "Kürt Sorununa İlişkin Türk Medyası Söylemi (Karşılaştırmalı Analiz)",
          journal: "Halabja Üniversitesi İnsan Bilimleri Dergisi",
          year: "2024",
          abstract: "Son 5 yılda ana akım Türk medyasındaki haber çerçevelerinin karşılaştırmalı analizi."
        },
        {
          title: "Sosyal Medyanın Üniversite Öğrencilerinin Kamuoyu Yönelimine Etkisi",
          journal: "İletişim Bilimleri Akademik Dergisi",
          year: "2023",
          abstract: "Kürdistan Bölgesi'ndeki gençlerin dijital haber tüketim alışkanlıkları üzerine alan araştırması."
        }
      ]
    },
    contact: {
      subtitle: "İletişim",
      title: "Dr. Ahmet Sirwani ile İletişime Geçin",
      desc: "Akademik talepler, konferans davetleri, medya röportajları veya ortak araştırma projeleri için.",
      location: "Kürdistan Bölgesi, Halabja Üniversitesi - İnsan Bilimleri Fakültesi",
      email: "ahmad.sirwani@uoh.edu.iq",
      formName: "Adınız",
      formEmail: "E-postanız",
      formSubject: "Konu",
      formMessage: "Mesajınız",
      sendBtn: "Mesaj Gönder",
      successMsg: "Teşekkürler! Mesajınız başarıyla gönderildi."
    }
  }
};

export default function App() {
  const [lang, setLang] = useState('ku');
  const [activeArticleTab, setActiveArticleTab] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSent(true);
      setTimeout(() => {
        setFormSent(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  const filteredArticles = activeArticleTab === 'all' 
    ? t.articles.items 
    : t.articles.items.filter(item => item.category === activeArticleTab);

  return (
    <div 
      className={`min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500 selection:text-neutral-950 ${t.dir === 'rtl' ? 'dir-rtl' : 'dir-ltr'}`}
      dir={t.dir}
    >
      {/* Background Decorative Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Header & Tri-lingual Language Switcher */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800 shadow-xl py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-700 flex items-center justify-center text-neutral-950 font-black text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              AS
            </div>
            <div>
              <span className="font-bold text-base sm:text-lg tracking-wide text-white block">
                {t.hero.name}
              </span>
              <span className="text-[10px] text-amber-400 font-medium block">
                {lang === 'ku' ? 'زانکۆی هەڵەبجە' : lang === 'tr' ? 'Halabja Üniversitesi' : 'University of Halabja'}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <a href="#about" className="hover:text-amber-400 transition-colors">{t.nav.about}</a>
            <a href="#expertise" className="hover:text-amber-400 transition-colors">{t.nav.expertise}</a>
            <a href="#experience" className="hover:text-amber-400 transition-colors">{t.nav.experience}</a>
            <a href="#articles" className="hover:text-amber-400 transition-colors">{t.nav.articles}</a>
            <a href="#research" className="hover:text-amber-400 transition-colors">{t.nav.research}</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">{t.nav.contact}</a>
          </nav>

          {/* Language Selector + Mobile Toggle */}
          <div className="flex items-center gap-3">
            
            {/* Tri-Lingual Language Switcher */}
            <div className="flex items-center bg-neutral-900 border border-neutral-800 p-1 rounded-xl shadow-inner">
              <button 
                onClick={() => setLang('ku')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${lang === 'ku' ? 'bg-amber-500 text-neutral-950 shadow-md' : 'text-neutral-400 hover:text-white'}`}
              >
                کوردی
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${lang === 'en' ? 'bg-amber-500 text-neutral-950 shadow-md' : 'text-neutral-400 hover:text-white'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('tr')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${lang === 'tr' ? 'bg-amber-500 text-neutral-950 shadow-md' : 'text-neutral-400 hover:text-white'}`}
              >
                TR
              </button>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-neutral-900/95 border-b border-neutral-800 backdrop-blur-xl px-6 pt-3 pb-6 space-y-3 mt-3 animate-in slide-in-from-top-4">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 text-neutral-300 hover:text-amber-400 border-b border-neutral-800/60">{t.nav.about}</a>
            <a href="#expertise" onClick={() => setIsMenuOpen(false)} className="block py-2 text-neutral-300 hover:text-amber-400 border-b border-neutral-800/60">{t.nav.expertise}</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block py-2 text-neutral-300 hover:text-amber-400 border-b border-neutral-800/60">{t.nav.experience}</a>
            <a href="#articles" onClick={() => setIsMenuOpen(false)} className="block py-2 text-neutral-300 hover:text-amber-400 border-b border-neutral-800/60">{t.nav.articles}</a>
            <a href="#research" onClick={() => setIsMenuOpen(false)} className="block py-2 text-neutral-300 hover:text-amber-400 border-b border-neutral-800/60">{t.nav.research}</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 text-neutral-300 hover:text-amber-400">{t.nav.contact}</a>
          </div>
        )}
      </header>

      {/* Hero Section with User Image */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                <GraduationCap className="w-4 h-4" />
                {t.hero.badge}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                {t.hero.name}
              </h1>

              <p className="text-lg sm:text-xl font-medium text-amber-400/90 leading-snug">
                {t.hero.title}
              </p>

              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                {t.hero.bio}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a 
                  href="#articles" 
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold shadow-lg shadow-amber-500/20 transition-all hover:scale-105 flex items-center gap-2 text-sm"
                >
                  <Newspaper className="w-4 h-4" />
                  {t.hero.btnArticles}
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-200 font-semibold transition-all hover:bg-neutral-800 flex items-center gap-2 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  {t.hero.btnContact}
                </a>
              </div>

              {/* Verified Badge Row */}
              <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap gap-6 text-xs text-neutral-400">
                <span className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-amber-400" />
                  {lang === 'ku' ? 'بەشی ڕاگەیاندن' : 'Dept. of Mass Communication'}
                </span>
                <span className="flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-amber-400" />
                  {lang === 'ku' ? 'زانکۆی هەڵەبجە' : 'University of Halabja'}
                </span>
              </div>
            </div>

            {/* Profile Image Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500 via-amber-700 to-blue-600 rounded-3xl blur-xl opacity-35 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border-2 border-neutral-800 bg-neutral-900 shadow-2xl">
                  <img 
                    src={PROFILE_IMAGE} 
                    alt={t.hero.name} 
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-neutral-900/80 border border-neutral-800/80 backdrop-blur-md text-center">
                    <p className="text-xs font-bold text-white">{t.hero.name}</p>
                    <p className="text-[10px] text-amber-400">{t.hero.title.split('|')[0]}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="py-10 bg-neutral-900/40 border-y border-neutral-900 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {t.stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/50">
                <p className="text-3xl lg:text-4xl font-black text-amber-400 mb-1">{stat.value}</p>
                <p className="text-xs font-medium text-neutral-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold tracking-widest text-amber-400 uppercase">{t.about.subtitle}</h2>
            <p className="text-3xl sm:text-4xl font-bold text-white">{t.about.title}</p>
            <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-neutral-300 text-base leading-relaxed">
              <p className="bg-neutral-900/60 border border-neutral-800 p-5 rounded-2xl">
                {t.about.p1}
              </p>
              <p className="bg-neutral-900/60 border border-neutral-800 p-5 rounded-2xl">
                {t.about.p2}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-amber-500/20 relative">
                <div className="text-amber-500 font-serif text-6xl leading-none absolute top-4 left-4 opacity-20">“</div>
                <blockquote className="text-lg font-medium text-neutral-200 italic relative z-10 leading-relaxed pt-4">
                  "{t.about.quote}"
                </blockquote>
                <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-neutral-950 font-bold flex items-center justify-center text-xs">
                    AS
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{t.hero.name}</p>
                    <p className="text-[10px] text-amber-400">زانکۆی هەڵەبجە</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 relative z-10 border-t border-neutral-900 bg-neutral-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold tracking-widest text-amber-400 uppercase">{t.expertise.subtitle}</h2>
            <p className="text-3xl sm:text-4xl font-bold text-white">{t.expertise.title}</p>
            <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.expertise.items.map((item, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-colors">
                  {idx === 0 ? <Globe className="w-6 h-6" /> : idx === 1 ? <Search className="w-6 h-6" /> : idx === 2 ? <Radio className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{item.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Timeline Section */}
      <section id="experience" className="py-20 relative z-10 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold tracking-widest text-amber-400 uppercase">{t.experience.subtitle}</h2>
            <p className="text-3xl sm:text-4xl font-bold text-white">{t.experience.title}</p>
            <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {t.experience.items.map((exp, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-neutral-900/70 border border-neutral-800 relative hover:border-amber-500/30 transition-all flex flex-col sm:flex-row gap-6">
                <div className="sm:w-48 shrink-0">
                  <span className="inline-block px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold">
                    {exp.period}
                  </span>
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-xs font-semibold text-amber-400/90">{exp.org}</p>
                  <p className="text-sm text-neutral-400 leading-relaxed pt-2">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Journalistic Articles Section */}
      <section id="articles" className="py-20 relative z-10 border-t border-neutral-900 bg-neutral-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-xs font-bold tracking-widest text-amber-400 uppercase">{t.articles.subtitle}</h2>
            <p className="text-3xl sm:text-4xl font-bold text-white">{t.articles.title}</p>
            <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center items-center gap-2 flex-wrap mb-12">
            <button
              onClick={() => setActiveArticleTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeArticleTab === 'all' ? 'bg-amber-500 text-neutral-950 shadow-lg shadow-amber-500/20' : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'}`}
            >
              {t.articles.all}
            </button>
            <button
              onClick={() => setActiveArticleTab('turkey')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeArticleTab === 'turkey' ? 'bg-amber-500 text-neutral-950 shadow-lg shadow-amber-500/20' : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'}`}
            >
              {t.articles.turkey}
            </button>
            <button
              onClick={() => setActiveArticleTab('media')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeArticleTab === 'media' ? 'bg-amber-500 text-neutral-950 shadow-lg shadow-amber-500/20' : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'}`}
            >
              {t.articles.media}
            </button>
            <button
              onClick={() => setActiveArticleTab('geopolitics')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeArticleTab === 'geopolitics' ? 'bg-amber-500 text-neutral-950 shadow-lg shadow-amber-500/20' : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'}`}
            >
              {t.articles.geopolitics}
            </button>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <div 
                key={article.id} 
                className="p-8 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-amber-500/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-amber-400 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20">
                      {article.categoryName}
                    </span>
                    <span className="text-xs text-neutral-500 font-mono">{article.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white hover:text-amber-400 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800/80 flex justify-between items-center">
                  <span className="text-xs text-neutral-500">{article.readTime}</span>
                  <button 
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300"
                  >
                    {t.articles.readMore}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Academic Research Section */}
      <section id="research" className="py-20 relative z-10 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold tracking-widest text-amber-400 uppercase">{t.research.subtitle}</h2>
            <p className="text-3xl sm:text-4xl font-bold text-white">{t.research.title}</p>
            <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {t.research.items.map((paper, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/30 transition-all">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-lg font-bold text-white">{paper.title}</h3>
                  <span className="text-xs font-mono font-bold text-amber-400 px-2 py-1 rounded bg-neutral-800">{paper.year}</span>
                </div>
                <p className="text-xs font-semibold text-neutral-400 mb-3">{paper.journal}</p>
                <p className="text-sm text-neutral-400 leading-relaxed">{paper.abstract}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10 border-t border-neutral-900 bg-neutral-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold tracking-widest text-amber-400 uppercase">{t.contact.subtitle}</h2>
            <p className="text-3xl sm:text-4xl font-bold text-white">{t.contact.title}</p>
            <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 space-y-6">
              <p className="text-neutral-400 text-sm leading-relaxed">
                {t.contact.desc}
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">ئیمەیڵی زانکۆ / Email</p>
                    <p className="text-sm font-semibold text-neutral-200">{t.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">شوێنی کار / Location</p>
                    <p className="text-xs font-semibold text-neutral-200">{t.contact.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7 p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800">
              {formSent ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{t.contact.successMsg}</h4>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-neutral-300">{t.contact.formName}</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-amber-500 text-sm text-neutral-200 outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-neutral-300">{t.contact.formEmail}</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-amber-500 text-sm text-neutral-200 outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-neutral-300">{t.contact.formSubject}</label>
                    <input 
                      type="text" 
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-amber-500 text-sm text-neutral-200 outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-neutral-300">{t.contact.formMessage}</label>
                    <textarea 
                      rows="4" 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-amber-500 text-sm text-neutral-200 outline-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {t.contact.sendBtn}
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-900 bg-neutral-950 text-center text-xs text-neutral-500">
        <p>© {new Date().getFullYear()} {t.hero.name}. {lang === 'ku' ? 'هەموو مافەکانی پارێزراوە - زانکۆی هەڵەبجە' : 'All Rights Reserved - University of Halabja'}.</p>
      </footer>

      {/* Article Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl p-6 space-y-4 relative">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <span className="text-xs font-bold text-amber-400">{selectedArticle.categoryName}</span>
            <h3 className="text-2xl font-bold text-white">{selectedArticle.title}</h3>
            <p className="text-xs text-neutral-500">{selectedArticle.date}</p>
            <hr className="border-neutral-800" />
            <p className="text-neutral-300 text-sm leading-relaxed">
              {selectedArticle.summary}
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              لە سەردەمی نوێدا، مێدیا چیتر تەنها گوێزەرەوەی هەواڵ نییە، بەڵکو یەکێکە لە ئامرازە سەرەکییەکانی داڕشتنی گوتاری سیاسی و دروستکردنی کەمپینی هۆشیاری. توێژینەوەکان دەریانخستووە کە پەیوەندییە نێودەوڵەتییەکان بە بەردەوامی کاریگەر دەبن بەو فریمە هەواڵییانەی کە لە کەناڵە ئاسمانییەکان و تۆڕە دیجیتاڵییەکاندا پەخش دەکرێن.
            </p>
            <div className="pt-4 flex justify-end">
              <button 
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 rounded-xl bg-neutral-800 text-neutral-200 text-xs font-bold hover:bg-neutral-700"
              >
                داخستن
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}