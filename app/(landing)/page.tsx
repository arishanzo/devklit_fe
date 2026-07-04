'use client';

import { useEffect, useState, ReactNode } from "react";
import Footer from "./components/layouts/footer";
import Header from "./components/layouts/header";
import SocialDock from "./components/layouts/SocialMedia";
import Contact from "./components/contact";
import Careers from "./components/Careers";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Services from "./components/services";
import BentoAbout from "./components/BentoAbout";
import HeroSection from "./components/herosection";
import ProfileCard from "./components/ProfileCard";
import AnimatedGridBg from "./components/AnimatedGridBg";


export const runtime = 'edge';

export default function Home() {


   const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return (saved === 'light' || saved === 'dark') ? saved : 'dark';
    }
    return 'dark';
  });

  // Synchronize theme attribute to html document root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.setAttribute('data-theme', 'dark');
      root.classList.add('dark');
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect if screen is desktop size
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Active section scroll detector
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'careers', 'tech', 'contact'];
      let active = 'home';
      const threshold = 180;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom > threshold) {
            active = sectionId;
            break;
          }
        }
      }
      setActiveSection(active);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll navigator
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  const renderSlide = (_id: string, content: ReactNode) => {
    return content;
  };


  return (
  <div 
      id="app-root-viewport" 
      className="bg-[#060606] min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white antialiased relative flex flex-col overflow-x-hidden max-w-full"
    >
      {/* Animated 3D diagonal grid background */}
      <AnimatedGridBg />

      {/* Dynamic Cursor Spotlight Layer / Background Vignette for premium global experience */}
      <div id="global-ambient-noise" className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(transparent_50%,rgba(0,0,0,0.5)_100%)] mix-blend-multiply opacity-30" />

      {/* Left Side Social Bar (Floating dock with rounded-full on desktop, hidden on mobile) */}
      <SocialDock onNavigate={handleNavigate} />

      {/* Right Side Navigation Bar (Floating dock with rounded-full on desktop, Topbar on mobile) */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Workspace Frame (with left & right padding to clear both floating menus) */}
      <div 
        className="flex-1 min-w-0 w-full lg:pl-24 lg:pr-24 flex flex-col relative z-10" 
        id="main-workspace-frame"
      >
        <div 
          className=" w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-12 pb-28 lg:pb-12 flex flex-col" 
          id="main-grid-wrapper"
        >
          <main 
            id="app-main-content" 
            className="flex-1 w-full flex flex-col gap-24 lg:gap-32 md:p-12"
          >
            {/* Slide 00: Hero (Home) */}
            <div 
              id="home" 
              className="w-full relative flex flex-col justify-center min-h-[600px]"
            >
              {renderSlide('home', (
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12  lg:items-start">
                  <div className="lg:col-span-4 w-full flex flex-col">
                    <ProfileCard onNavigate={handleNavigate} />
                  </div>
                  <div className="lg:col-span-8 w-full flex flex-col">
                    <HeroSection onNavigate={handleNavigate} />
                  </div>
                </div>
              ))}
            </div>

            {/* Slide 01: About Vision (Bento) */}
            <div 
              id="about" 
              className="w-full relative flex flex-col justify-center"
            >
              {renderSlide('about', <BentoAbout />)}
            </div>

            {/* Slide 02: Capabilities (Services) */}
            <div 
              id="services" 
              className="w-full relative flex flex-col justify-center"
            >
              {renderSlide('services', <Services />)}
            </div>

            {/* Slide 03: Projects Showcase (Case Studies) */}
            <div 
              id="projects" 
              className="w-full relative flex flex-col justify-center"
            >
              {renderSlide('projects', <Projects />)}
            </div>

            {/* Slide 03.5: Careers / Hire Team */}
            <div 
              id="careers" 
              className="w-full relative flex flex-col justify-center"
            >
              {renderSlide('careers', <Careers />)}
            </div>

            {/* Slide 04: Engineering Matrix (Tech Stack) */}
            <div 
              id="tech" 
              className="w-full relative flex flex-col justify-center"
            >
              {renderSlide('tech', <TechStack />)}
            </div>

            {/* Slide 05: Contact & Footer Combined */}
            <div 
              id="contact" 
              className="w-full relative flex flex-col justify-start gap-8"
            >
              {renderSlide('contact', (
                <div className="w-full flex flex-col justify-between py-4 gap-8">
                  <div className="flex-1">
                    <Contact />
                  </div>
                  <div className="mt-auto">
                    <Footer onNavigate={handleNavigate} />
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
