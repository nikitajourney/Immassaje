import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import CourseProgram from './components/CourseProgram';
import PreviewLessons from './components/PreviewLessons';
import PaybackCalculator from './components/PaybackCalculator';
import CertificateShowcase from './components/CertificateShowcase';
import SalesFunnel from './components/SalesFunnel';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Dynamic Scroll Active Section Tracker
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'program', 'demo-lessons', 'calculator', 'certificate', 'pricing'];
      const scrollPosition = window.scrollY + 200; // Offset for header height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky navigation header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-950 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">
      {/* Floating Header */}
      <Header onScrollToSection={handleScrollToSection} activeSection={activeSection} />

      {/* Main Content Layout */}
      <main className="relative">
        {/* Hero Banner Section */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* Benefits & Outcome Bento Grid Section */}
        <Benefits />

        {/* Course Curriculum Accordion Section */}
        <CourseProgram />

        {/* Interactive Free Demonstration & Quiz Section */}
        <PreviewLessons onScrollToSection={handleScrollToSection} />

        {/* Recoupment Payback Slider Calculator Section */}
        <PaybackCalculator />

        {/* Digital/Physical Mail Certificate Customizer Section */}
        <CertificateShowcase />

        {/* Sales Funnel: Persona quiz, pricing & checkout wizard Section */}
        <SalesFunnel />

        {/* Frequently Asked Questions Section */}
        <FAQ />
      </main>

      {/* Footer Details & Compliance Credentials */}
      <Footer onScrollToSection={handleScrollToSection} />
    </div>
  );
}
