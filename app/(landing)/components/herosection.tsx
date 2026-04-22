'use client';

import Link from 'next/link';
import useCountUp from '@/app/hooks/useCountUp';

const HeroSection = () => {
    const klien = useCountUp(500);
    const uptime = useCountUp(999);
    const pengalaman = useCountUp(15);
    return (
        <section id='home' className="relative min-h-screen  flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0" style={{
                background: 'linear-gradient(135deg, #eff6ff 0%, #eef2ff 50%, #f5f3ff 100%)'
            }} />

            {/* Aurora blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 right-1/4 w-[600px] h-[500px] bg-blue-200 rounded-full filter blur-[120px] opacity-60" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-violet-200 rounded-full filter blur-[120px] opacity-50" />
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-40" style={{
                backgroundImage: `linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
            }} />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-4 sm:px-6 lg:px-8 py-32 md:mt-8 text-center">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-2 mb-8 animate-fade-in">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-indigo-600 md:text-sm text-xs font-medium">🚀 Solusi Transformasi Digital Terpercaya</span>
                </div>

                {/* Main Heading */}
                <h1 className="md:text-5xl text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                    Transformasi Bisnis Digital
                </h1>

                <h1 className="md:text-5xl text-3xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                        Untuk Masa Depan Perusahaan
                    </span>
                </h1>

                {/* Description */}
                <p className="md:text-xl text-md sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                    Tingkatkan efisiensi operasional dan produktivitas bisnis dengan solusi digitalisasi terintegrasi, cloud computing, dan sistem otomasi modern.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up animation-delay-400">
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

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
                    <div className="bg-white border border-indigo-100 shadow-sm rounded-xl p-6 hover:shadow-md transition-all">
                        <div className="text-3xl font-bold text-indigo-600 mb-2">{klien}+</div>
                        <div className="text-gray-500 text-sm">Klien Aktif</div>
                    </div>
                    <div className="bg-white border border-indigo-100 shadow-sm rounded-xl p-6 hover:shadow-md transition-all">
                        <div className="text-3xl font-bold text-indigo-600 mb-2">{(uptime / 10).toFixed(1)}%</div>
                        <div className="text-gray-500 text-sm">Uptime Guarantee</div>
                    </div>
                    <div className="bg-white border border-indigo-100 shadow-sm rounded-xl p-6 hover:shadow-md transition-all">
                        <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
                        <div className="text-gray-500 text-sm">Dukungan Teknis</div>
                    </div>
                    <div className="bg-white border border-indigo-100 shadow-sm rounded-xl p-6 hover:shadow-md transition-all">
                        <div className="text-3xl font-bold text-indigo-600 mb-2">{pengalaman}+</div>
                        <div className="text-gray-500 text-sm">Tahun Pengalaman</div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
