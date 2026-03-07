'use client';

import { useEffect, useRef } from 'react';

const Testimoni = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollInterval;
        let currentIndex = 0;
        const cardWidth = scrollContainer.clientWidth * 0.85 + 32; // 85vw + gap

        const startAutoScroll = () => {
            scrollInterval = setInterval(() => {
                currentIndex++;
                if (currentIndex >= 3) {
                    currentIndex = 0;
                }
                scrollContainer.scrollTo({
                    left: currentIndex * cardWidth,
                    behavior: 'smooth'
                });
            }, 3000);
        };

        const stopAutoScroll = () => {
            if (scrollInterval) clearInterval(scrollInterval);
        };

        // Only run on mobile
        if (window.innerWidth < 768) {
            startAutoScroll();
            scrollContainer.addEventListener('touchstart', stopAutoScroll);
        }

        return () => {
            stopAutoScroll();
            scrollContainer.removeEventListener('touchstart', stopAutoScroll);
        };
    }, []);

    return (
        <section className=" relative py-24 px-6  bg-white overflow-hidden">
            {/* Pattern Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, #8b5cf6 2px, transparent 2px)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* 3D Grid Lines Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(0deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}></div>
            </div>


            <div className="max-w-7xl mx-auto relative z-10 px-8">
              

                {/* Teknologi Section */}
                <div className="mb-20">
                    <header className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
                            <span className="text-blue-600 text-sm font-semibold">Stack Teknologi</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Teknologi yang
                            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Digunakan untuk Digitalisasi
                            </span>
                        </h3>
                    </header>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Cloud Infrastructure */}
                        <article className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Cloud Infrastructure</h4>
                            <p className="text-gray-600 text-sm mb-4">Cloud digunakan untuk menjalankan aplikasi bisnis secara stabil, scalable, dan aman.</p>
                            
                            <h5 className="font-semibold text-gray-900 mb-2 text-sm">Manfaat:</h5>
                            <ul className="space-y-1 text-sm text-gray-600 mb-4">
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Akses dari mana saja</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Infrastruktur fleksibel</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Sistem stabil & aman</li>
                            </ul>
                            
                            <h5 className="font-semibold text-gray-900 mb-2 text-sm">Teknologi:</h5>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">AWS</span>
                                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Google Cloud</span>
                                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Azure</span>
                            </div>
                        </article>

                        {/* Web & Mobile Development */}
                        <article className="group bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border-2 border-purple-100 hover:border-purple-500 hover:shadow-2xl transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Web & Mobile Development</h4>
                            <p className="text-gray-600 text-sm mb-4">Pengembangan aplikasi web dan mobile untuk digitalisasi proses bisnis.</p>
                            
                            <h5 className="font-semibold text-gray-900 mb-2 text-sm">Manfaat:</h5>
                            <ul className="space-y-1 text-sm text-gray-600 mb-4">
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>Otomasi proses operasional</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>Meningkatkan efisiensi</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>Akses data mudah</li>
                            </ul>
                            
                            <h5 className="font-semibold text-gray-900 mb-2 text-sm">Teknologi:</h5>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">React</span>
                                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Next.js</span>
                                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Node.js</span>
                            </div>
                        </article>

                        {/* System Integration */}
                        <article className="group bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl border-2 border-indigo-100 hover:border-indigo-500 hover:shadow-2xl transition-all duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">System Integration & API</h4>
                            <p className="text-gray-600 text-sm mb-4">Integrasi sistem untuk menghubungkan aplikasi dan bertukar data otomatis.</p>
                            
                            <h5 className="font-semibold text-gray-900 mb-2 text-sm">Manfaat:</h5>
                            <ul className="space-y-1 text-sm text-gray-600 mb-4">
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>Kurangi proses manual</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>Sinkronisasi data</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>Efisiensi operasional</li>
                            </ul>
                            
                            <h5 className="font-semibold text-gray-900 mb-2 text-sm">Teknologi:</h5>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">REST API</span>
                                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">Microservices</span>
                                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">Webhooks</span>
                            </div>
                        </article>
                    </div>
                </div>

                {/* Testimoni Section */}
                <div>
                    <header className="text-center mb-12">
                        <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
                            <span className="text-blue-600 text-sm font-semibold">Testimoni</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Apa Kata
                            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Klien Kami
                            </span>
                        </h2>
                    </header>

                    {/* Testimonial Cards */}
                    <div ref={scrollRef} className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto snap-x snap-mandatory md:overflow-visible scrollbar-hide pb-4">
                        {/* Testimonial 1 */}
                        <article className="group relative bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 min-w-[85vw] md:min-w-0 snap-center">
                            <div className="absolute top-4 right-4 text-blue-200 opacity-50">
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <div className="relative">
                                <div className="flex items-center mb-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        A
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-gray-900">Ahmad Rizki</h4>
                                        <p className="text-sm text-gray-600">CEO, PT Teknologi Maju</p>
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Solusi digital yang diberikan sangat membantu transformasi bisnis kami. Tim profesional dan responsif dalam setiap kebutuhan.
                                </p>
                            </div>
                        </article>

                        {/* Testimonial 2 */}
                        <article className="group relative bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border-2 border-purple-100 hover:border-purple-500 hover:shadow-2xl transition-all duration-300 min-w-[85vw] md:min-w-0 snap-center">
                            <div className="absolute top-4 right-4 text-purple-200 opacity-50">
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <div className="relative">
                                <div className="flex items-center mb-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        S
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-gray-900">Siti Nurhaliza</h4>
                                        <p className="text-sm text-gray-600">Director, CV Digital Solusi</p>
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Implementasi sistem yang cepat dan efisien. Hasil melebihi ekspektasi kami. Highly recommended!
                                </p>
                            </div>
                        </article>

                        {/* Testimonial 3 */}
                        <article className="group relative bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl border-2 border-indigo-100 hover:border-indigo-500 hover:shadow-2xl transition-all duration-300 min-w-[85vw] md:min-w-0 snap-center">
                            <div className="absolute top-4 right-4 text-indigo-200 opacity-50">
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <div className="relative">
                                <div className="flex items-center mb-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        B
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-gray-900">Budi Santoso</h4>
                                        <p className="text-sm text-gray-600">CTO, PT Inovasi Digital</p>
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Partnership yang luar biasa. Teknologi yang diterapkan sangat sesuai dengan kebutuhan bisnis kami.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimoni;