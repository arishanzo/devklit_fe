'use client';

import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Gradient Mesh Background */}
            <div className="absolute inset-0" style={{
                background: 'linear-gradient(135deg, #3b0764 0%, #4f46e5 40%, #2563eb 70%, #1d4ed8 100%)'
            }} />

            {/* Aurora blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 left-1/3 w-[700px] h-[500px] bg-violet-500 rounded-full filter blur-[140px] opacity-40" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-blue-500 rounded-full filter blur-[130px] opacity-35" />
                <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] bg-purple-500 rounded-full filter blur-[100px] opacity-30" />
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.07]" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
            }} />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-4 sm:px-6 lg:px-8 py-32 md:mt-8 text-center">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-white md:text-sm text-xs font-medium">🚀 Solusi Transformasi Digital Terpercaya</span>
                </div>

                {/* Main Heading */}
                <h1 className="md:text-5xl text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
                    Transformasi Bisnis Digital
                
                </h1>

                <h1 className="md:text-5xl text-3xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
                                
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                                        Untuk Masa Depan Perusahaan
                                        
                    </span>
                    </h1>
                {/* Description */}
                <p className="md:text-xl text-md sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                    Tingkatkan efisiensi operasional dan produktivitas bisnis dengan solusi digitalisasi terintegrasi, cloud computing, dan sistem otomasi modern.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up animation-delay-400">
                    <Link 
                        href="#contact" 
                        className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 hover:scale-105 transition-all shadow-xl hover:shadow-2xl w-full sm:w-auto"
                        aria-label="Mulai transformasi digital gratis"
                    >
                        Mulai Transformasi Digital
                    </Link>
                    <a  href='https://wa.me/628816982294?text=Halo%20saya%20ingin%20konsultasi' 
                        target="_blank" 
                            rel="noopener noreferrer"
                        className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/20 hover:scale-105 transition-all w-full sm:w-auto"
                        aria-label="Konsultasi gratis dengan tim ahli"
                    >
                        Konsultasi Gratis
                    </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
                        <div className="text-3xl font-bold text-white mb-2">500+</div>
                        <div className="text-blue-200 text-sm">Klien Aktif</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
                        <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                        <div className="text-blue-200 text-sm">Uptime Guarantee</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
                        <div className="text-3xl font-bold text-white mb-2">24/7</div>
                        <div className="text-blue-200 text-sm">Dukungan Teknis</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
                        <div className="text-3xl font-bold text-white mb-2">15+</div>
                        <div className="text-blue-200 text-sm">Tahun Pengalaman</div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;