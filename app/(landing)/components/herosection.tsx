'use client';

import Link from 'next/link';
import useCountUp from '@/app/hooks/useCountUp';
import { Code2, Database, Headphones, Settings, Shield, Smartphone, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useReveal from '@/app/hooks/useReveal';

const HeroSection = () => {
    const klien = useCountUp(120);
    const uptime = useCountUp(999);
    const pengalaman = useCountUp(250);

    const [visible, setVisible] = useState(false);

  const { ref: webRef, visible: webVisible } = useReveal();
  const { ref: mobileRef, visible: mobileVisible } = useReveal();
  const colors = ['bg-red-100', 'bg-blue-100','bg-green-100','bg-yellow-500','bg-purple-500'];

  
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

    return (
        <>
        <section className="relative min-h-screen   overflow-hidden">
       

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-6 lg:px-8  mt-32 md:py-16">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Right: Text */}
                    <div className="flex-1 text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 border border-indigo-100 rounded-full px-4 py-2 mb-8 animate-fade-in">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span className="text-indigo-600 md:text-sm text-xs font-medium">🚀 Solusi Transformasi Digital Terpercaya</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                            Transformasi Bisnis Digital
                        </h1>

                        <h1 className="text-3xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                                Untuk Masa Depan Perusahaan
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-md md:text-xl text-gray-500 mb-8 animate-fade-in-up animation-delay-200">
                            Tingkatkan efisiensi operasional dan produktivitas bisnis dengan solusi digitalisasi terintegrasi, cloud computing, dan sistem otomasi modern.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up animation-delay-400">
                            <Link
                                href="#contact"
                                className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 hover:scale-105 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
                                aria-label="Mulai transformasi digital gratis"
                            >
                                Mulai Transformasi Digital
                            </Link>
                            <a href='https://wa.me/628816982294?text=Halo%20saya%20ingin%20konsultasi'
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white border-2 border-indigo-200 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 hover:scale-105 transition-all w-full sm:w-auto"
                                aria-label="Konsultasi gratis dengan tim ahli"
                            >
                                Konsultasi Gratis
                            </a>
                        </div>

            

                        {/* Testimonial */}
                        <div className="flex items-center gap-4 mt-4 animate-fade-in-up animation-delay-600">
                         

                         {/* Avatar stack versi teks */}
                        <div className="flex -space-x-3">
                            {['A', 'R', 'Z', 'K', 'F'].map((item, i) => (
                                <div
                                    key={i}
                                    className={`w-9 h-9 flex items-center justify-center rounded-full border-2 border-white bg-indigo-500 text-white text-sm font-semibold ${colors[i % colors.length]}`}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                            {/* Rating & text */}
                            <div>
                                <div className="flex items-center gap-1 mb-0.5">
                                    {[1,2,3,4,5].map(s => (
                                        <svg key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                    <span className="text-sm font-semibold text-gray-700 ml-1">4.9</span>
                                </div>
                                <p className="text-xs text-gray-500">Dipercaya Beberapa <span className="font-medium text-gray-700">Perusahaan</span> di seluruh Indonesia</p>
                            </div>
                        </div>


                    </div>

                         {/* Left: Visual */}
                    <div className="flex-1 animate-fade-in-up">
                        <Image
                            src="https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=908&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Digital Transformation"
                            className="w-full h-96  object-cover rounded-3xl"
                            height={500}
                            width={500}
                            unoptimized
                        />

                           {/* Stats */}
                        <div className="grid md:grid-cols-4 grid-cols-2 mt-12 md:gap-2 animate-fade-in-up animation-delay-600">
                            <div className="rounded-xl p-4 hover:shadow-md transition-all">
                                <div className="text-2xl font-bold text-indigo-600 mb-1">{klien}+</div>
                                <div className="text-gray-500 text-sm">Pelanggan Kami</div>
                            </div>
                            <div className="rounded-xl p-4 hover:shadow-md transition-all">
                                <div className="text-2xl font-bold text-indigo-600 mb-1">{(uptime / 10).toFixed(1)}%</div>
                                <div className="text-gray-500 text-sm">Jaminan Waktu Aktif</div>
                            </div>
                            <div className="rounded-xl p-4 hover:shadow-md transition-all">
                                <div className="text-2xl font-bold text-indigo-600 mb-1">24/7</div>
                                <div className="text-gray-500 text-sm">Dukungan Teknis</div>
                            </div>
                            <div className="rounded-xl p-4 hover:shadow-md transition-all">
                                <div className="text-2xl font-bold text-indigo-600 mb-1">{pengalaman}+</div>
                                <div className="text-gray-500 text-sm">Aplikasi Terselesaikan</div>
                            </div>
                        </div>
                    </div>
                   

                </div>
            </div>
            

        </section>

       
<section className="relative py-12 bg-gradient-to-b from-white to-gray-50">

    <div className="max-w-7xl mx-auto px-6">

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="group bg-white/70 backdrop-blur-xl border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 mb-4 group-hover:scale-110 transition">
                    <Zap size={22} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Cepat Implementasi
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                    Sistem siap digunakan dalam hitungan hari, bukan bulan.
                </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white/70 backdrop-blur-xl border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-violet-100 text-violet-600 mb-4 group-hover:scale-110 transition">
                    <Settings size={22} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Custom Sesuai Bisnis
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                    Solusi dirancang mengikuti workflow dan kebutuhan spesifik bisnis Anda.
                </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white/70 backdrop-blur-xl border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 mb-4 group-hover:scale-110 transition">
                    <Headphones size={22} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Support Berkelanjutan
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                    Tim kami siap membantu kapan saja saat Anda membutuhkan bantuan.
                </p>
            </div>
        </div>
    </div>
</section>



      {/* DETAIL WEB & MOBILE */}
      {/* <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-16">

          <div ref={webRef} className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`opacity-0 ${webVisible ? 'anim-fade-left delay-1' : ''}`}>
              <span className="text-xs font-semibold text-gray-600 tracking-widest uppercase py-1 rounded-full">Web Development</span>
              <h2 className="text-3xl font-bold mt-4 mb-4"></h2>
              <p className="text-gray-500 leading-relaxed mb-6"></p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Code2, label: "Clean Code Architecture" },
                  { icon: Zap, label: "Performa Tinggi & SEO" },
                  { icon: Shield, label: "Keamanan Enterprise" },
                  { icon: Database, label: "Skalabel & Cloud-Ready" },
                ].map(({ icon: I, label }) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-2">
                    <I className="w-4 h-4 text-blue-500" /> {label}
                  </div>
                ))}
              </div>
              <Link href="https://wa.me/6281122225804"
                className="btn-shine inline-block text-white px-6 py-3 rounded-lg font-semibold">
              hhh
              </Link>
            </div>
            <div className={`opacity-0 ${webVisible ? 'anim-fade-right delay-2' : ''} img-zoom relative rounded-2xl overflow-hidden shadow-2xl aspect-video`}>
              <Image unoptimized src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800" alt="Web Dev" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg px-4 py-2 text-sm font-semibold text-gray-800">
                🚀 100+ Website Diluncurkan
              </div>
            </div>
          </div>

          <div ref={mobileRef} className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`order-2 md:order-1 opacity-0 ${mobileVisible ? 'anim-fade-left delay-1' : ''} img-zoom relative rounded-2xl overflow-hidden shadow-2xl aspect-video`}>
              <Image unoptimized src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800" alt="Mobile App" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg px-4 py-2 text-sm font-semibold text-gray-800">
                📱 Android & iOS
              </div>
            </div>
            <div className={`order-1 md:order-2 opacity-0 ${mobileVisible ? 'anim-fade-right delay-2' : ''}`}>
              <span className="text-xs font-semibold text-gray-600 tracking-widest uppercase py-1 rounded-full">Mobile Development</span>
              <h2 className="text-3xl font-bold mt-4 mb-4"></h2>
              <p className="text-gray-500 leading-relaxed mb-6"></p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Smartphone, label: "React Native & Flutter" },
                  { icon: Zap, label: "Animasi Smooth 60fps" },
                  { icon: Shield, label: "Secure Authentication" },
                  { icon: Users, label: "Push Notification" },
                ].map(({ icon: I, label }) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-2">
                    <I className="w-4 h-4 text-blue-500" /> {label}
                  </div>
                ))}
              </div>
              <Link href="https://wa.me/6281122225804"
                className="btn-shine inline-block text-white px-6 py-3 rounded-lg font-semibold">
                Konsultasi Mobile App
              </Link>
            </div>
          </div>
        </div>
      </section> */}

        </>
    );
};

export default HeroSection;
