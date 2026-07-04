
'use client';

import { useState } from 'react';
import { 
 Sparkles, Code, 
  Home, User, Blocks, Briefcase, Mail, Activity,
  Sun, Moon, Users 
} from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Header({ activeSection, onNavigate, theme, toggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Services', id: 'services', icon: Blocks },
    { name: 'Projects', id: 'projects', icon: Briefcase },
    { name: 'Karir', id: 'careers', icon: Users },
    { name: 'Tech Stack', id: 'tech', icon: Code },
    { name: 'Contact', id: 'contact', icon: Mail },
  ];

  return (
    <>
      {/* <button
        id="theme-toggle-desktop"
        onClick={toggleTheme}
        className="hidden lg:flex fixed top-8 right-8 z-[100] w-12 h-12 rounded-full items-center justify-center bg-[#121212]/85 dark:bg-[#121212]/85 backdrop-blur-md border border-white/10 hover:border-orange-500/30 text-orange-400 cursor-pointer shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Toggle dark and light mode"
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-500" />
          ) : (
            <Moon className="w-5 h-5 text-indigo-600 group-hover:-rotate-12 transition-transform duration-500" />
          )}
        </div>
        <span className="absolute right-14 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 pointer-events-none bg-black/95 border border-white/10 text-[10px] font-mono text-zinc-300 px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
          {theme === 'dark' ? 'SWITCH_TO_LIGHT_MODE' : 'SWITCH_TO_DARK_MODE'}
        </span>
      </button> */}

      {/* DESKTOP RIGHT-SIDE FLOATING DOCK (rounded-full, premium visual) */}
      <div
        id="navbar-right-floating-dock"
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col items-center z-50"
      >
        <div 
          id="navbar-dock-container"
          className="bg-[#121212]/80 backdrop-blur-xl border border-white/10 rounded-full py-6 px-3 flex flex-col gap-4 items-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative group/dock"
        >
          {/* Subtle vertical trace line */}
          <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[1px] bg-white/5 pointer-events-none" />

          {/* Core Brand Indicator at the top of the pill */}
          <div 
            id="dock-brand-indicator"
            onClick={() => onNavigate('home')}
            className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[1px] flex items-center justify-center overflow-hidden cursor-pointer hover:scale-110 transition-transform duration-300 relative z-10 group"
          >
            <div className="w-full h-full bg-[#060606] rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-blue-400 group-hover:text-purple-400 transition-colors" />
            </div>
            {/* Hover Tooltip (Left sliding) */}
            <span className="absolute right-12 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 pointer-events-none bg-black/90 border border-white/10 text-[10px] font-mono text-zinc-300 px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
              NEXUS_LABS.EXE
            </span>
          </div>

          {/* Divider */}
          <div className="w-6 h-[1px] bg-white/10 relative z-10" />

          {/* Navigation Items inside the Pill */}
          <div className="flex flex-col gap-3 relative z-10">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  id={`dock-item-btn-${item.id}`}
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 relative group cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-tr from-blue-500 to-purple-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                      : 'bg-black/40 hover:bg-white/5 text-zinc-400 hover:text-white border border-white/5 hover:border-white/20'
                  }`}
                  aria-label={item.name}
                >
                  <Icon className={`w-4.5 h-4.5 transition-transform duration-300 group-hover:scale-110 ${
                    isActive ? 'text-white stroke-[2.5]' : 'text-zinc-400 group-hover:text-white'
                  }`} />

                  {/* Hover Tooltip sliding to the Left */}
                  <span className="absolute right-14 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 pointer-events-none bg-black/95 border border-white/10 text-[10px] font-mono text-zinc-300 px-3 py-1.5 rounded-lg whitespace-nowrap shadow-2xl flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {item.name.toUpperCase()}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-6 h-[1px] bg-white/10 relative z-10" />

          {/* Live System Speed indicator button at the bottom of the pill */}
          <div
            id="dock-speed-indicator"
            onClick={() => onNavigate('contact')}
            className="w-9 h-9 rounded-full bg-neutral-900 border border-white/5 hover:border-blue-500/30 flex items-center justify-center cursor-pointer transition-colors group relative z-10"
          >
            <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="absolute right-12 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 pointer-events-none bg-black/90 border border-white/10 text-[10px] font-mono text-zinc-300 px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl flex flex-col gap-0.5">
              <span className="text-emerald-400 font-bold">SYSTEM_ONLINE</span>
              <span className="text-[8px] text-zinc-500">PING: 14MS</span>
            </span>
          </div>
        </div>
      </div>

      {/* MOBILE TOPBAR NAVIGATION (hidden on desktop, shown on mobile/tablet) */}
      <header
        id="navbar-header"
        className="lg:hidden fixed top-0 left-0 right-0 z-50 py-4 px-4 bg-[#060606]/85 backdrop-blur-md border-b border-white/5 flex items-center justify-between"
      >
        {/* Brand / Logo */}
        <div
          id="navbar-brand"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="relative w-8.5 h-8.5 rounded-full bg-gradient-to-tr from-blue-500 to-purple-400 p-[1px] flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-[#060606] rounded-full flex items-center justify-center">
              <Code className="w-4 h-4 text-blue-400" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-tight text-xs font-sans flex items-center gap-1">
              NX LABS <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" />
            </span>
            <span className="text-[8px] text-zinc-500 font-mono tracking-widest leading-none">CREATIVE LABS</span>
          </div>
        </div>

        {/* Theme Toggle Button (diatas sendiri) */}
        {/* <button
          id="theme-toggle-mobile"
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-[#121212]/85 dark:bg-[#121212]/85 border border-white/10 hover:border-orange-500/30 text-orange-400 cursor-pointer shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Toggle dark and light mode"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-amber-400" />
          ) : (
            <Moon className="w-5 h-5 text-indigo-600" />
          )}
        </button>*/}
      
       </header>

    
      <nav
        id="navbar-mobile-bottom-dock"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-4 mb-4 w-full pointer-events-none"
      >
        <div
          id="navbar-mobile-bottom-container"
          className="max-w-md mx-auto w-full bg-[#121212]/90 dark:bg-[#121212]/90 backdrop-blur-xl border border-white/10 rounded-full py-2.5 px-3 flex items-center justify-around shadow-[0_15px_50px_rgba(0,0,0,0.6)] pointer-events-auto"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                id={`nav-item-mobile-bottom-${item.id}`}
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="flex flex-col items-center justify-center gap-1 py-1.5 px-2 rounded-full relative transition-all duration-300 cursor-pointer flex-1"
                aria-label={item.name}
              >
                {isActive && (
                  <div className="absolute inset-0 rounded-full bg-blue-500/10 border border-blue-500/20" />
                )}
                
                <Icon className={`w-4 h-4 transition-all duration-300 ${
                  isActive ? 'text-blue-400 scale-110' : 'text-zinc-400'
                }`} />
                
                <span className={`text-[9px] font-medium font-sans transition-all duration-300 leading-none ${
                  isActive ? 'text-blue-400 font-semibold' : 'text-zinc-500'
                }`}>
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
        </nav>
  
    </>
  );
}
