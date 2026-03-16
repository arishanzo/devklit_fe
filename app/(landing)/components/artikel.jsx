'use client'

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const Artikel = () => {
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [indexArray, setIndexArray] = useState([])
  
  const articles = [
    {
      title: "React UI Modern",
      desc: "Membangun UI modern dengan React dan Tailwind."
    },
     {
      title: "React UI Modern",
      desc: "Membangun UI modern dengan React dan Tailwind."
    },
     {
      title: "React UI Modern",
      desc: "Membangun UI modern dengan React dan Tailwind."
    }
  ];

  
    return (

           <section className=" relative  px-2 md:py-8 py-4 bg-white overflow-hidden">
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

           <div className="max-w-7xl mx-auto relative z-10 px-4 mb-8">
       
              <header className="text-center mb-12">
                        <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
                            <span className="text-blue-600 text-sm font-semibold">Berita</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                          Artikel
                            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                               Baca Sekarang
                            </span>
                        </h3>
                    </header>

      <div ref={scrollRef}  className="flex gap-2 overflow-x-auto snap-x snap-mandatory  scrollbar-hide pb-4">
      

     
         {articles && articles.length > 0 ? (


          articles.map((ar, i) => (

              
                  
         <article key={i} className="group flex-shrink-0 grid grid-cols-2  md:grid-cols-4 bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-300">
                    <Link  href="/" >        
                                {/* Tags */}
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 md:text-sm text-xs bg-blue-100 text-blue-600 rounded-full">
              React
            </span>
            <span className="px-3 py-1 md:text-sm text-xs bg-purple-100 text-purple-600 rounded-full">
              UI/UX
            </span>
          </div>

          {/* Title */}
          <h1 className="md:text-xl text-md font-bold text-gray-900 leading-tight mb-4">
             {ar.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 text-gray-500 mb-8">
          
            <div>
              <p className="md:text-sm text-xs font-medium text-gray-700">Admin</p>
              <p className="text-xs">16 March 2026</p>
            </div>
          </div>
       
       </Link>  
        </article>
      

         ))

         ) : (
           <p className="text-center text-gray-500">Belum ada artikel</p>

         )} 
        

        </div>
        </div>
        {indexArray}
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
         {indexArray.map(num => (

            <button
              key={num}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                index === num ? "bg-black scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>
    )
}

export default Artikel;