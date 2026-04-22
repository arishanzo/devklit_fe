'use client';

import { useState } from 'react';

const products = [
    {
        id: 1,
        title: 'ERP System Manufaktur',
        category: 'Enterprise',
        desc: 'Sistem ERP terintegrasi untuk manajemen produksi, inventori, dan keuangan perusahaan manufaktur skala besar.',
        tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
        result: 'Efisiensi operasional meningkat 60%',
        priceOri: 'Rp 28.000.000',
        price: 'Rp 19.500.000',
        discount: '30%',
        icon: '🏭',
        color: 'from-blue-500 to-indigo-600',
        bg: 'bg-blue-50',
        border: 'border-blue-100',
    },
    {
        id: 2,
        title: 'Platform E-Commerce B2B',
        category: 'E-Commerce',
        desc: 'Marketplace B2B dengan fitur manajemen supplier, purchase order otomatis, dan dashboard analitik real-time.',
        tech: ['React', 'Laravel', 'MySQL', 'AWS'],
        result: 'Transaksi meningkat 3x lipat',
        priceOri: 'Rp 15.000.000',
        price: 'Rp 9.900.000',
        discount: '34%',
        icon: '🛒',
        color: 'from-violet-500 to-purple-600',
        bg: 'bg-violet-50',
        border: 'border-violet-100',
    },
    {
        id: 3,
        title: 'Aplikasi HR & Payroll',
        category: 'HR Tech',
        desc: 'Sistem manajemen SDM lengkap dengan absensi biometrik, penggajian otomatis, dan evaluasi kinerja karyawan.',
        tech: ['Vue.js', 'Python', 'MongoDB', 'Docker'],
        result: 'Hemat 40 jam kerja/bulan',
        priceOri: 'Rp 12.000.000',
        price: 'Rp 7.500.000',
        discount: '38%',
        icon: '👥',
        color: 'from-emerald-500 to-teal-600',
        bg: 'bg-emerald-50',
        border: 'border-emerald-100',
    },
    {
        id: 4,
        title: 'Sistem Informasi Rumah Sakit',
        category: 'Rumah Sakit',
        desc: 'SIMRS lengkap mencakup rekam medis elektronik, antrian pasien, manajemen obat, billing, dan laporan BPJS terintegrasi.',
        tech: ['Next.js', 'Node.js', 'PostgreSQL', 'HL7 FHIR'],
        result: 'Waktu pelayanan pasien turun 50%',
        priceOri: 'Rp 45.000.000',
        price: 'Rp 29.000.000',
        discount: '36%',
        icon: '🏥',
        color: 'from-red-500 to-rose-600',
        bg: 'bg-red-50',
        border: 'border-red-100',
    },
    {
        id: 5,
        title: 'Sistem Informasi Desa (SID)',
        category: 'Pemerintah Desa',
        desc: 'Platform digital desa untuk administrasi kependudukan, surat menyurat online, APBDes, dan layanan publik berbasis web & mobile.',
        tech: ['React', 'Laravel', 'MySQL', 'PWA'],
        result: 'Layanan administrasi 3x lebih cepat',
        priceOri: 'Rp 8.500.000',
        price: 'Rp 4.900.000',
        discount: '42%',
        icon: '🏘️',
        color: 'from-green-500 to-emerald-600',
        bg: 'bg-green-50',
        border: 'border-green-100',
    },
    {
        id: 6,
        title: 'Portal Layanan Pemerintah Daerah',
        category: 'Pemerintah',
        desc: 'Sistem e-Government terintegrasi untuk perizinan online, pengaduan masyarakat, transparansi anggaran, dan dashboard kinerja OPD.',
        tech: ['Next.js', 'Go', 'PostgreSQL', 'Elasticsearch'],
        result: 'Indeks kepuasan masyarakat naik 40%',
        priceOri: 'Rp 55.000.000',
        price: 'Rp 35.000.000',
        discount: '36%',
        icon: '🏛️',
        color: 'from-orange-500 to-amber-600',
        bg: 'bg-orange-50',
        border: 'border-orange-100',
    },
];

const categories = ['Semua', 'Enterprise', 'E-Commerce', 'HR Tech', 'Rumah Sakit', 'Pemerintah Desa', 'Pemerintah'];

const Product = () => {
    const [active, setActive] = useState('Semua');

    const filtered = active === 'Semua' ? products : products.filter(p => p.category === active);

    return (
        <section id="portofolio" className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #f8faff 0%, #f3f0ff 50%, #f0f9ff 100%)' }} />
            <div className="absolute inset-0 opacity-40" style={{
                backgroundImage: `linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
            }} />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14 animate-fade-in-up">
                    <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-2 mb-6">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                        <span className="text-indigo-600 text-sm font-medium">Pricing</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Harga Paket{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                           Yang Kami Tawarkan
                        </span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Beberapa Paket harga yang kami tawarkan untuk membangun proyek digital sesuai kebutuhan bisnis Anda. Setiap paket dirancang untuk memberikan nilai maksimal dengan teknologi terkini dan hasil yang terbukti.
                    </p>
                </div>

                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                                active === cat
                                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                                    : 'bg-white border border-gray-200 text-gray-600 hover:border-indigo-300 hover:text-indigo-600'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project, i) => (
                        <div
                            key={project.id}
                            className={`group relative bg-white rounded-2xl border ${project.border} p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up flex flex-col items-center text-center md:items-start md:text-left`}
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-xl ${project.bg} flex items-center justify-center text-2xl mb-5`}>
                                {project.icon}
                            </div>

                            {/* Category Badge */}
                            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white mb-3`}>
                                {project.category}
                            </span>

                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-5">
                                {project.desc}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-5">
                                {project.tech.map(t => (
                                    <span key={t} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md font-medium">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Result */}
                            <div className={`flex items-center justify-center md:justify-start gap-2 p-3 rounded-xl ${project.bg} mb-3 w-full`}>
                                <span className="text-green-500 text-lg">✅</span>
                                <span className="text-sm font-semibold text-gray-700">{project.result}</span>
                            </div>

                            {/* Price */}
                            <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between pt-3 border-t border-gray-100 w-full gap-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs bg-red-500 text-white font-bold px-2 py-0.5 rounded-full">-{project.discount}</span>
                                    <span className="text-xs text-gray-400 line-through">{project.priceOri}</span>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-xs text-gray-400">Start from</span>
                                    <span className={`text-sm font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                                        {project.price}
                                    </span>
                                </div>
                            </div>

                            {/* Hover line */}
                            <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${project.color} rounded-b-2xl transition-all duration-500`} />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-14">
                    <p className="text-gray-500 mb-6">Tertarik membangun proyek serupa untuk bisnis Anda?</p>
                    <a
                        href="https://wa.me/628816982294?text=Halo%20saya%20ingin%20konsultasi%20proyek"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 hover:scale-105 transition-all shadow-lg shadow-indigo-200"
                    >
                        💬 Diskusikan Proyek Anda
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Product;
