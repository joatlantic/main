
import React, { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SpaceBackground from '@/components/SpaceBackground';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';

// Lazy load heavy components
const Projects = React.lazy(() => import('@/components/Projects'));
const About = React.lazy(() => import('@/components/About'));
const Contact = React.lazy(() => import('@/components/Contact'));

const Index: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Youssef Essam",
        "url": "https://youssefessam.com",
        "sameAs": [
          "https://github.com/joatlantic",
          "https://linkedin.com/in/youssefessam"
        ],
        "jobTitle": "Frontend Developer",
        "description": "مطور واجهات أمامية متخصص في بناء مواقع سريعة وعصرية"
      },
      {
        "@type": "WebSite",
        "url": "https://youssefessam.com",
        "name": "Youssef Essam Portfolio",
        "description": "موقع يوسف عصام - مطور واجهات أمامية",
        "author": {
          "@type": "Person",
          "name": "Youssef Essam"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://youssefessam.com"
          }
        ]
      }
    ]
  };

  return (
    <div className="relative overflow-hidden">
      <SEO
        title="يوسف عصام - مطور واجهات أمامية"
        description="موقع يوسف عصام - مطور واجهات أمامية متخصص في بناء مواقع سريعة وعصرية باستخدام أحدث التقنيات."
        schema={structuredData}
      />
      <SpaceBackground />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
          <About />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <ScrollToTop />
    </div>
  );
};

export default Index;
