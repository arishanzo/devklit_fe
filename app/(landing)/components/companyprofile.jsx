const CompanyProfile = () => {
  return (
    <main className="bg-white">

      {/* ABOUT SECTION */}
      <section className="py-24 px-2 mx-auto relative overflow-hidden">
        {/* Dot Pattern Background */}
        <div className="absolute inset-0  opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #3b82f6 2px, transparent 2px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>


        <header className="text-center mb-16 px-4 ">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="text-blue-600 text-sm font-semibold">Tentang Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perusahaan Teknologi
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transformasi Digital
            </span>
          </h2>
          <p className="text-gray-600 md:text-lg text-md mt-6 max-w-3xl mx-auto">
            Perusahaan kami berfokus pada transformasi digital yang membantu
            organisasi meningkatkan efisiensi operasional, inovasi produk,
            serta pengambilan keputusan berbasis data.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          <article className="group relative bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-100">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Visi Kami
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Menjadi mitra teknologi terpercaya dalam membangun masa depan
              bisnis yang lebih digital, adaptif, dan inovatif.
            </p>
          </article>

          <article className="group relative bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-purple-100">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Misi Kami
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Menghadirkan solusi teknologi modern yang membantu perusahaan
              bertransformasi secara efektif melalui integrasi sistem,
              cloud, dan analisis data.
            </p>
          </article>

          <article className="group relative bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-indigo-100">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Nilai Perusahaan
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Inovasi, kolaborasi, dan kualitas menjadi fondasi utama dalam
              setiap solusi digital yang kami kembangkan.
            </p>
          </article>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#3b82f6 1.5px, transparent 1.5px), linear-gradient(90deg, #8b5cf6 1.5px, transparent 1.5px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Curved Lines */}
        <div className="absolute bottom-0 left-0 w-full h-64 opacity-25">
          <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="none" stroke="#3b82f6" strokeWidth="3" d="M0,160 Q360,100 720,160 T1440,160" />
            <path fill="none" stroke="#8b5cf6" strokeWidth="3" d="M0,200 Q360,140 720,200 T1440,200" />
            <path fill="none" stroke="#6366f1" strokeWidth="3" d="M0,240 Q360,180 720,240 T1440,240" />
          </svg>
        </div>

        
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-50 rounded-full mb-4">
              <span className="text-purple-600 text-sm font-semibold">Layanan Kami</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Layanan Transformasi
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Terpadu
              </span>
            </h2>
            <p className="text-gray-600 md:text-lg text-md mt-6 max-w-2xl mx-auto">
              Solusi teknologi untuk mempercepat digitalisasi bisnis Anda
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="group relative p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-bl-full opacity-50"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Konsultasi Transformasi Digital
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategi digital yang membantu perusahaan merancang roadmap
                  teknologi yang tepat.
                </p>
              </div>
            </article>

            <article className="group relative p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-purple-500 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-bl-full opacity-50"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Pengembangan Software Web & Aplikasi Android
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Pengembangan aplikasi web dan sistem enterprise yang scalable
                  dan modern.
                </p>
              </div>
            </article>

           <article className="group relative p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-indigo-500 hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-bl-full opacity-50"></div>

            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7a2 2 0 012-2h3l2 2h7a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                SaaS Development & Cloud Application Platform
              </h3>

              <p className="text-gray-600 leading-relaxed">
                <strong>SaaS (Software as a Service)</strong> yang scalable, aman, dan mendukung sistem 
                langganan serta multi-user bagi bisnis digital modern.
              </p>
            </div>
          </article>
          </div>
        </div>
      </section>

      

    </main>
  );
};

export default CompanyProfile;