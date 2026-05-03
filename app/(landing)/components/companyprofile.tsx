const CompanyProfile = () => {
  
  return (
    <main className="bg-white">

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-2 mx-auto relative overflow-hidden">
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

      

    </main>
  );
};

export default CompanyProfile;