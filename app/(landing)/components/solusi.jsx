const Solusi = () => {
    return (
        <section className="py-24 px-6 bg-gradient-to-b from-white via-blue-50 to-purple-50 relative overflow-hidden">
            {/* Dot Pattern Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, #3b82f6 2px, transparent 2px)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Grid Lines Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#8b5cf6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}></div>
            </div>

            {/* Diagonal Lines */}
            <div className="absolute top-0 left-0 w-full h-64 opacity-15">
                <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="none" stroke="#3b82f6" strokeWidth="2" d="M0,100 L1440,200" />
                    <path fill="none" stroke="#8b5cf6" strokeWidth="2" d="M0,150 L1440,250" />
                    <path fill="none" stroke="#6366f1" strokeWidth="2" d="M0,200 L1440,300" />
                </svg>
            </div>

            {/* Curved Wave Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-48 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="none" stroke="#8b5cf6" strokeWidth="3" d="M0,160 Q360,100 720,160 T1440,160" />
                    <path fill="none" stroke="#3b82f6" strokeWidth="3" d="M0,200 Q360,140 720,200 T1440,200" />
                </svg>
            </div>

            {/* Hexagon Pattern */}
            <div className="absolute top-1/4 right-0 w-96 h-96 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <pattern id="hexagons" patternUnits="userSpaceOnUse" width="20" height="17.32">
                        <polygon points="10,0 20,5 20,15 10,20 0,15 0,5" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#hexagons)" />
                </svg>
            </div>

            {/* Circle Pattern */}
            <div className="absolute bottom-1/4 left-0 w-80 h-80 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                        <pattern id="circles" patternUnits="userSpaceOnUse" width="15" height="15">
                            <circle cx="7.5" cy="7.5" r="3" fill="none" stroke="#8b5cf6" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#circles)" />
                </svg>
            </div>

            {/* Zigzag Pattern */}
            <div className="absolute top-1/2 left-1/4 w-64 h-32 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                    <path fill="none" stroke="#6366f1" strokeWidth="2" d="M0,50 L20,30 L40,50 L60,30 L80,50 L100,30 L120,50 L140,30 L160,50 L180,30 L200,50" />
                    <path fill="none" stroke="#8b5cf6" strokeWidth="2" d="M0,70 L20,50 L40,70 L60,50 L80,70 L100,50 L120,70 L140,50 L160,70 L180,50 L200,70" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 px-4">
                {/* Header */}
                <header className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
                        <span className="text-blue-600 text-sm font-semibold">Solusi Industri</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Solusi Teknologi
                        <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Berdasarkan Sektor Industri
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
                        Kami menyediakan solusi digital yang disesuaikan dengan kebutuhan spesifik setiap industri untuk mendorong transformasi dan inovasi.
                    </p>
                </header>

                {/* Industry Solutions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Perbankan & Keuangan */}
                    <article className="group relative bg-white p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-300">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-50 rounded-bl-full opacity-50"></div>
                        <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Perbankan & Keuangan</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Solusi digital banking, payment gateway, fraud detection, dan sistem manajemen risiko untuk institusi keuangan.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                    Core Banking System
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                    Mobile Banking
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                    Risk Management
                                </li>
                            </ul>
                        </div>
                    </article>

                    {/* Manufaktur */}
                    <article className="group relative bg-white p-8 rounded-2xl border-2 border-purple-100 hover:border-purple-500 hover:shadow-2xl transition-all duration-300">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-50 rounded-bl-full opacity-50"></div>
                        <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Manufaktur</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Sistem ERP, IoT monitoring, supply chain management, dan quality control untuk optimasi produksi.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                                    ERP Manufacturing
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                                    IoT Monitoring
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                                    Supply Chain
                                </li>
                            </ul>
                        </div>
                    </article>

                    {/* Retail & E-Commerce */}
                    <article className="group relative bg-white p-8 rounded-2xl border-2 border-indigo-100 hover:border-indigo-500 hover:shadow-2xl transition-all duration-300">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-bl-full opacity-50"></div>
                        <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Retail & E-Commerce</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Platform e-commerce, POS system, inventory management, dan customer analytics untuk bisnis retail.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
                                    E-Commerce Platform
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
                                    POS System
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
                                    Customer Analytics
                                </li>
                            </ul>
                        </div>
                    </article>

                    {/* Kesehatan */}
                    <article className="group relative bg-white p-8 rounded-2xl border-2 border-cyan-100 hover:border-cyan-500 hover:shadow-2xl transition-all duration-300">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-bl-full opacity-50"></div>
                        <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Kesehatan</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Hospital information system, telemedicine, electronic medical records, dan appointment management.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2"></span>
                                    Hospital Management
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2"></span>
                                    Telemedicine
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2"></span>
                                    EMR System
                                </li>
                            </ul>
                        </div>
                    </article>

                    {/* Pendidikan */}
                    <article className="group relative bg-white p-8 rounded-2xl border-2 border-pink-100 hover:border-pink-500 hover:shadow-2xl transition-all duration-300">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-100 to-pink-50 rounded-bl-full opacity-50"></div>
                        <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Pendidikan</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Learning management system, virtual classroom, student information system, dan e-learning platform.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-2"></span>
                                    LMS Platform
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-2"></span>
                                    Virtual Classroom
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-2"></span>
                                    Student Portal
                                </li>
                            </ul>
                        </div>
                    </article>

                    {/* Pemerintahan */}
                    <article className="group relative bg-white p-8 rounded-2xl border-2 border-emerald-100 hover:border-emerald-500 hover:shadow-2xl transition-all duration-300">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-bl-full opacity-50"></div>
                        <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Pemerintahan</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                E-government system, document management, citizen portal, dan smart city solutions.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></span>
                                    E-Government
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></span>
                                    Smart City
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></span>
                                    Citizen Portal
                                </li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Solusi;