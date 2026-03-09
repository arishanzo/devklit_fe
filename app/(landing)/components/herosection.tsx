'use client';

import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            {/* Animated Moving Lines */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Horizontal Moving Lines */}
                <div className="absolute w-full h-full">
                    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-line-horizontal"></div>
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-line-horizontal animation-delay-2000"></div>
                    <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-line-horizontal animation-delay-4000"></div>
                </div>
                
                {/* Vertical Moving Lines */}
                <div className="absolute w-full h-full">
                    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-20 animate-line-vertical"></div>
                    <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-20 animate-line-vertical animation-delay-2000"></div>
                    <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-20 animate-line-vertical animation-delay-4000"></div>
                </div>

                {/* Diagonal Moving Lines */}
                <div className="absolute w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute w-[200%] h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-30 rotate-45 origin-center animate-line-diagonal" style={{top: '20%', left: '-50%'}}></div>
                        <div className="absolute w-[200%] h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-30 rotate-45 origin-center animate-line-diagonal animation-delay-3000" style={{top: '60%', left: '-50%'}}></div>
                    </div>
                </div>
            </div>

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
                        href="/demo" 
                        className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 hover:scale-105 transition-all shadow-xl hover:shadow-2xl w-full sm:w-auto"
                        aria-label="Mulai transformasi digital gratis"
                    >
                        Mulai Transformasi Digital
                    </Link>
                    <Link 
                        href="/contact" 
                        className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/20 hover:scale-105 transition-all w-full sm:w-auto"
                        aria-label="Konsultasi gratis dengan tim ahli"
                    >
                        Konsultasi Gratis
                    </Link>
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