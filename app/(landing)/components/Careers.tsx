import { jobs } from "@/app/lib/jobs";
import { Users, Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";




export default function Careers() {
  // Tambahkan data lowongan di sini.
  // Kosongkan array jika belum ada rekrutmen.

  return (
    <section className=" relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="md:flex md:justify-between md:items-end gap-10 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-blue-400" />

              <span className="text-xs font-mono uppercase tracking-[0.3em] text-blue-400">
                Career
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Bergabung Bersama
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-violet-300">
                Tim Devklit Tech.
              </span>
            </h2>
          </div>

          <p className="text-zinc-400 max-w-md leading-7">
            Kami percaya produk digital hebat dibangun oleh tim yang hebat.
            Lihat posisi yang tersedia dan jadilah bagian dari perjalanan kami.
          </p>
        </div>

        {/* Content */}
        {jobs.length === 0 ? (
          <div className="bg-[#121212] border border-white/5 rounded-[32px] p-12 text-center">

            <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-9 h-9 text-blue-400" />
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Belum Ada Rekrutmen
            </h3>

            <p className="text-zinc-400 max-w-xl mx-auto leading-7">
              Saat ini kami belum membuka lowongan kerja pada bulan ini.
              Pantau terus halaman ini atau ikuti media sosial kami untuk
              mendapatkan informasi rekrutmen terbaru.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition">
              Hubungi Kami
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">

            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-[#121212] border border-white/5 rounded-[28px] p-8 hover:border-blue-500/20 transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold">
                    {job.type}
                  </span>

                  <ArrowRight className="w-5 h-5 text-zinc-500" />
                </div>

                <h3 className="text-2xl font-bold mb-5">
                  {job.title}
                </h3>

                <div className="space-y-3 text-sm text-zinc-400 mb-8">

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Pengalaman {job.experience}
                  </div>

                </div>

                <button className="w-full h-12 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition">
                  Lamar Sekarang
                </button>

              </div>
            ))}

          </div>
        )}
      </div>
    </section>
  );
}