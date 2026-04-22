'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { getArtikel } from "@/app/services/getArtikel";
import { dataArtikel } from "@/app/types";

const getFirstImage = (html: string) => {
  const match = html.match(/<img[^>]+src="([^"]+)"/);
  return match ? match[1] : null;
};

const stripHtml = (html: string) => html.replace(/<[^>]*>/g, '').slice(0, 120) + '...';

const ArtikelPage = () => {
  const [artikel, setArtikel] = useState<dataArtikel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArtikel()
      .then(setArtikel)
      .catch((e) => console.error("Error get Artikel", e))
      .finally(() => setLoading(false));
  }, []);

  const featured = artikel[0];
  const rest = artikel.slice(1, 5);

  return (
    <section id="artikel" className="relative bg-gray-50 py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto p-4">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Artikel & Berita</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Terbaru dari Kami</h2>
          </div>
        
        </div>

        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`bg-white rounded-2xl overflow-hidden animate-pulse ${i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <div className="bg-gray-200 w-full h-56" />
                <div className="p-5 space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-1/3" />
                  <div className="h-5 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : artikel.length === 0 ? (
          <p className="text-center text-gray-400 py-20">Belum ada artikel.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Featured Article */}
            {featured && (
              <Link href={featured.link} target="_blank"
                className="lg:col-span-2 group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="relative h-72 lg:h-96 overflow-hidden">
                  <img
                    src={featured.thumbnail || getFirstImage(featured.description) || '/placeholder.jpg'}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex gap-2 mb-3">
                      {featured.categories?.slice(0, 2).map((cat, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">{cat}</span>
                      ))}
                    </div>
                    <h2 className="text-white text-xl lg:text-2xl font-bold leading-snug mb-2 group-hover:text-blue-300 transition-colors">
                      {featured.title}
                    </h2>
                    <div className="flex items-center gap-3 text-white/70 text-xs">
                      <span>Admin</span>
                      <span>•</span>
                      <span>{featured.pubDate}</span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Side Articles */}
            <div className="flex flex-col gap-4 overflow-y-auto max-h-96 pr-1 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
              {rest.map((ar, i) => (
                <Link key={i} href={ar.link} target="_blank"
                  className="group flex gap-4 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                    <img
                      src={ar.thumbnail || getFirstImage(ar.description) || '/placeholder.jpg'}
                      alt={ar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      {ar.categories?.[0] && (
                        <span className="text-blue-600 text-xs font-semibold uppercase tracking-wide">{ar.categories[0]}</span>
                      )}
                      <h3 className="text-gray-900 font-semibold text-sm leading-snug mt-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {ar.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">{ar.pubDate}</p>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default ArtikelPage;
