"use client";

import { useState } from "react";

const FormContact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setLoading(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #f8faff 0%, #f3f0ff 50%, #f0f9ff 100%)' }} />
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl shadow-gray-200/80 border border-gray-100">

        {/* Left Panel */}
        <div className="bg-blue-900 p-10 flex flex-col justify-between ">
          <div>
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Mari Berbicara</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-10">
              Punya pertanyaan atau proyek menarik? Kami siap membantu Anda mewujudkan ide menjadi kenyataan.
            </p>

            <div className="space-y-5">
              {[
                { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Email", value: "hello@devklit.my,id" },
                { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", label: "Telepon", value: "+62 888 0531 7354" },
                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", label: "Lokasi", value: "Lamongan, Indonesia" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-zinc-200 text-xs">{item.label}</p>
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 mt-10">
            {["M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
              "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
              "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
            ].map((d, i) => (
              <button key={i} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={d} />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="bg-white p-10">
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900">Pesan Terkirim!</h3>
              <p className="text-zinc-400 text-sm">Kami akan menghubungi Anda segera.</p>
              <button onClick={() => { setStatus(null); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                className="mt-2 text-zinc-500 text-sm hover:text-zinc-700 transition-colors">
                Kirim pesan lain →
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">Kirim Pesan</h3>
              <p className="text-zinc-400 text-sm mb-8">Isi form di bawah dan kami akan segera merespons.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField label="Nama Lengkap" name="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} />
                  <InputField label="Email" name="email" type="email" placeholder="john@email.com" value={formData.email} onChange={handleChange} />
                </div>
                <InputField label="Subjek" name="subject" type="text" placeholder="Topik pesan Anda" value={formData.subject} onChange={handleChange} />

                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-300 text-sm font-medium">Pesan</label>
                  <textarea
                    name="message" rows={5} required placeholder="Tuliskan pesan Anda di sini..."
                    value={formData.message} onChange={handleChange}
                    className="bg-gray-50 border border-gray-200 text-zinc-900 placeholder-zinc-400 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
                  />
                </div>

                <button type="submit" disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-zinc-700 disabled:opacity-50 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      Kirim Pesan
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const InputField = ({ label, name, type, placeholder, value, onChange }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-zinc-700 text-sm font-medium">{label}</label>
    <input
      type={type} name={name} required placeholder={placeholder} value={value} onChange={onChange}
      className="bg-gray-50 border border-gray-200 text-zinc-900 placeholder-zinc-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
    />
  </div>
);

export default FormContact;
