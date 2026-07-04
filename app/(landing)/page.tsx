'use client';

import { useEffect, useState, useRef, useCallback } from "react";
import Footer from "./components/layouts/footer";
import Header from "./components/layouts/header";
import SocialDock from "./components/layouts/SocialMedia";
import Contact from "./components/contact";
import Careers from "./components/Careers";
import Projects from "./components/Projects";
import Services from "./components/services";
import BentoAbout from "./components/BentoAbout";
import HeroSection from "./components/herosection";
import ProfileCard from "./components/ProfileCard";
import AnimatedGridBg from "./components/AnimatedGridBg";

export const runtime = 'edge';

const SECTIONS = ['home', 'about', 'services', 'projects', 'careers', 'contact'] as const;
type SectionId = typeof SECTIONS[number];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'down' | 'up'>('down');
  const [animKey, setAnimKey] = useState(0);
  const isLocked = useRef(false);
  const activeIndexRef = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return (saved === 'light' || saved === 'dark') ? saved : 'dark';
    }
    return 'dark';
  });

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

  const toggleTheme = () => setTheme(p => p === 'dark' ? 'light' : 'dark');

  const goToSlide = useCallback((index: number, dir?: 'down' | 'up') => {
    if (isLocked.current || index === activeIndexRef.current) return;
    const resolvedDir = dir ?? (index > activeIndexRef.current ? 'down' : 'up');
    isLocked.current = true;
    activeIndexRef.current = index;
    setDirection(resolvedDir);
    setActiveIndex(index);
    setAnimKey(k => k + 1);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    setTimeout(() => { isLocked.current = false; }, 600);
  }, []);

  const handleNavigate = useCallback((sectionId: string) => {
    const index = SECTIONS.indexOf(sectionId as SectionId);
    if (index !== -1) goToSlide(index);
  }, [goToSlide]);

  const atBottom = () => {
    const el = scrollRef.current;
    if (!el) return true;
    return el.scrollTop + el.clientHeight >= el.scrollHeight - 8;
  };

  const atTop = () => {
    const el = scrollRef.current;
    if (!el) return true;
    return el.scrollTop <= 8;
  };

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (isLocked.current) return;
      const cur = activeIndexRef.current;
      if (e.deltaY > 0 && atBottom() && cur < SECTIONS.length - 1) {
        e.preventDefault();
        goToSlide(cur + 1, 'down');
      } else if (e.deltaY < 0 && atTop() && cur > 0) {
        e.preventDefault();
        goToSlide(cur - 1, 'up');
      }
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [goToSlide]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isLocked.current) return;
      const cur = activeIndexRef.current;
      if ((e.key === 'ArrowDown' || e.key === 'PageDown') && atBottom() && cur < SECTIONS.length - 1) {
        e.preventDefault();
        goToSlide(cur + 1, 'down');
      } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && atTop() && cur > 0) {
        e.preventDefault();
        goToSlide(cur - 1, 'up');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goToSlide]);

  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => { touchStartY.current = e.touches[0].clientY; };
    const onTouchEnd = (e: TouchEvent) => {
      if (isLocked.current) return;
      const cur = activeIndexRef.current;
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (diff > 60 && atBottom() && cur < SECTIONS.length - 1) goToSlide(cur + 1, 'down');
      else if (diff < -60 && atTop() && cur > 0) goToSlide(cur - 1, 'up');
    };
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [goToSlide]);

  const activeSection = SECTIONS[activeIndex];

  return (
    <div className="bg-[#060606] h-screen overflow-hidden text-white font-sans selection:bg-blue-500 selection:text-white antialiased relative">


      <AnimatedGridBg />
      <div className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(transparent_50%,rgba(0,0,0,0.5)_100%)] mix-blend-multiply opacity-30" />
      <SocialDock onNavigate={handleNavigate} />
      <Header activeSection={activeSection} onNavigate={handleNavigate} theme={theme} toggleTheme={toggleTheme} />

      {/* Dot indicators mobile */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 lg:hidden">
        {SECTIONS.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-white scale-125' : 'bg-white/30'}`}
          />
        ))}
      </div>

      {/* Outer: stable scroll container with ref */}
      <div className="w-full h-full lg:pl-24 lg:pr-24 relative z-10">
        <div ref={scrollRef} className="absolute inset-0 overflow-y-auto">
          {/* Inner: remounts on each slide change to trigger animation */}
          <div key={animKey} className={direction === 'down' ? 'slide-up' : 'slide-down'}>
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-28 lg:pb-12">
              {activeSection === 'home' && (
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:items-start">
                  <div className="lg:col-span-4 w-full flex flex-col">
                    <ProfileCard onNavigate={handleNavigate} />
                  </div>
                  <div className="lg:col-span-8 w-full flex flex-col">
                    <HeroSection onNavigate={handleNavigate} />
                  </div>
                </div>
              )}
              {activeSection === 'about' && <BentoAbout />}
              {activeSection === 'services' && <Services />}
              {activeSection === 'projects' && <Projects />}
              {activeSection === 'careers' && <Careers />}
              {activeSection === 'contact' && (
                <div className="w-full flex flex-col justify-between py-4 gap-8">
                  <div className="flex-1"><Contact /></div>
                  <div className="mt-auto"><Footer onNavigate={handleNavigate} /></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
