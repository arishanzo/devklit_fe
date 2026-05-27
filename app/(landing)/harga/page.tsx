'use client'

import { useState, useMemo, FormEvent } from 'react';
import useReveal from '@/app/hooks/useReveal';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check, CheckCircle,Cpu,ArrowRight } from 'lucide-react';
import { FeatureOption } from '@/app/types';
import { FEATURE_DATABASE } from '@/app/lib/FeatureDB';
import DynamicUseMemo from '@/app/context/dynamicUseMemo';


const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'decimal' }).format(price);
};

const formatWeeksRange = (days: number) => {
  if (days <= 9) return "1 - 2 Minggu";
  if (days >= 10 && days <= 17) return "2 - 3 Minggu";
  if (days >= 18 && days <= 24) return "3 - 4 Minggu";
  return "4+ Minggu (atau lebih)";
};



export default function InteractiveCalculator() {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['konsultasi-redesign', 'audit-redesign', 'standard-sla']);
  const [targetIndustry, setTargetIndustry] = useState<string>('E-Commerce / Retail');
  const [companyName, setCompanyName] = useState<string>('');
  const [referenceLink, setReferenceLink] = useState<string>('');
  const [isProposalGenerated, setIsProposalGenerated] = useState(false);

  const activePlatformId = useMemo(() => {
    return selectedFeatures.find(fId => {
      const feat = FEATURE_DATABASE.find(f => f.id === fId);
      return feat?.category === 'platform';
    }) || 'konsultasi-redesign';
  }, [selectedFeatures]);

  const visibleFeatures = useMemo(() => {
    return FEATURE_DATABASE.filter(f => 
      f.category === 'feature' && 
      (!f.allowedPlatforms || f.allowedPlatforms.includes(activePlatformId))
    );
  }, [activePlatformId]);

  const toggleFeature = (id: string, category: string) => {
    setSelectedFeatures(prev => {

      if (category === 'platform') {
        const withoutPlatformsAndTiers = prev.filter(fId => {
          const feat = FEATURE_DATABASE.find(f => f.id === fId);
          return feat?.category !== 'platform' && feat?.category !== 'feature';
        });

        // Pick one default feature belonging to the new platform to yield better initial user interaction
        const defaultFeatureIdForNewPlatform = FEATURE_DATABASE.find(f => 
          f.category === 'feature' && f.allowedPlatforms?.includes(id)
        )?.id;

        const defaultFeaturesArray = defaultFeatureIdForNewPlatform ? [defaultFeatureIdForNewPlatform] : [];

        return [id, ...defaultFeaturesArray, ...withoutPlatformsAndTiers];
      }
      
      // If it's a tier (SLA), let's ensure only one SLA is active
      if (category === 'tier') {
        const withTiredRemoved = prev.filter(fId => {
          const feat = FEATURE_DATABASE.find(f => f.id === fId);
          return feat?.category !== 'tier';
        });
        return [...withTiredRemoved, id];
      }
      
      if (prev.includes(id)) {
        return prev.filter(fId => fId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Calculations
  const calculatedSpecs = useMemo(() => {
    let totalPrice = 0;
    let totalDays = 0;
    const selectedList: FeatureOption[] = [];

    selectedFeatures.forEach(id => {
      const feat = FEATURE_DATABASE.find(f => f.id === id);
      // Ensure the feature belongs to the currently active platform, or is general
      if (feat) {
        if (feat.category === 'feature' && feat.allowedPlatforms && !feat.allowedPlatforms.includes(activePlatformId)) {
          return; // skip stale feature selections from prior platform switches
        }
        totalPrice += feat.basePrice;
        totalDays += feat.addedDays;
        selectedList.push(feat);
      }
    });

    // Clamp days to a minimum of 5 days
    if (totalDays < 5) totalDays = 5;

    return {
      price: totalPrice,
      days: totalDays,
      items: selectedList
    };
  }, [selectedFeatures, activePlatformId]);

  const whatsappLink = useMemo(() => {
    const baseText = `Halo Sinergi Solutions, saya ingin konsultasi proyek IT kustom untuk ${companyName || 'bisnis saya'}${referenceLink ? ` (Referensi: ${referenceLink})` : ''} dengan estimasi biaya Rp ${formatPrice(calculatedSpecs.price)} dan estimasi waktu ${formatWeeksRange(calculatedSpecs.days)}.`;
    const encoded = encodeURIComponent(baseText).replace(/%20/g, '%2520');
    return `https://wa.me/6288805317354?text=${encoded}`;
  }, [companyName, referenceLink, calculatedSpecs.price, calculatedSpecs.days]);

  
 const { dynamicBenefits } = DynamicUseMemo(targetIndustry ,  activePlatformId);
  const revealHeader = useReveal();
  const revealStep1 = useReveal();
  const revealStep2 = useReveal();
  const revealStep3 = useReveal();
  const revealRight = useReveal();
  const handleCreateProposal = (e: FormEvent) => {
    e.preventDefault();
    setIsProposalGenerated(true);
  };

  return (
    <section id="it-calculator" className="mt-32 mb-12 md:py-36 bg-slate-100 text-slate-800 relative overflow-hidden border-t border-slate-200">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div ref={revealHeader.ref} className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${revealHeader.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full  border border-slate-100 text-slate-600 text-xs font-semibold mb-3 tracking-wide uppercase">
    
            Simulator Rencana Biaya & SLA
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 ">
            Kalkulator Pembuatan Sistem
          </h2>
          <p className="mt-4 text-xs md:text-sm text-slate-600">
            Rakit platform bisnis Anda sendiri di bawah ini. Estimasi harga, waktu deploy, dan rincian arsitektur teknologi akan disimulasikan secara presisi.
          </p>
        </div>

        {/* Main Grid: Form Left, Output Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* COLUMN LEFT: Interatice Checklists (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Step 1: Platforms Choose */}
            <div ref={revealStep1.ref} className={`bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/20 transition-all duration-700 delay-100 ${revealStep1.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg  bg-violet-100 border border-violet-200 text-violet-650 flex items-center justify-center text-xs font-mono">1</span>
                Tipe Platform yang Diinginkan
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FEATURE_DATABASE.filter(f => f.category === 'platform').map((item) => {
                  const isSelected = selectedFeatures.includes(item.id);
                  return (
                    <div
                      id={`calc-platform-${item.id}`}
                      key={item.id}
                      onClick={() => toggleFeature(item.id, 'platform')}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                        isSelected 
                          ? 'bg-indigo-50 border-indigo-200 text-indigo-900 shadow-md shadow-indigo-100' 
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100/50'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected ? 'bg-indigo-600 border-indigo-500 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isSelected && <Check size={10} strokeWidth={3} />}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-indigo-600">
                          {formatWeeksRange(item.addedDays)}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-800 tracking-wide">{item.name}</h4>
                        <p className="text-[9.5px] text-slate-500 leading-tight mt-1 mb-2.5">{item.description}</p>
                        <span className="text-[10px] font-mono font-bold text-indigo-600 block">Mulai Rp {formatPrice(item.basePrice)}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Custom Modules Features */}
            <div ref={revealStep2.ref} className={`bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/20 transition-all duration-700 delay-200 ${revealStep2.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-violet-100 border border-violet-200 text-violet-650 flex items-center justify-center text-xs font-mono">2</span>
                  Fitur Integrasi & Fitur Pintar
                </h3>
                <span className="text-[9.5px] text-violet-700 bg-violet-50 px-2 py-0.5 rounded-full border border-violet-100">
                  Disesuaikan dengan platform pilihan Anda
                </span>
              </div>
              
              <div className="space-y-2.5">
                {visibleFeatures.map((item) => {
                  const isSelected = selectedFeatures.includes(item.id);
                  return (
                    <div
                      id={`calc-feature-${item.id}`}
                      key={item.id}
                      onClick={() => toggleFeature(item.id, 'feature')}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                        isSelected 
                          ? 'bg-violet-50 border-violet-200 text-violet-900 shadow-md shadow-violet-100' 
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100/50'
                      }`}
                    >
                      <div className="flex gap-3 items-center">
                        <span className={`w-4 h-4 rounded-md border shrink-0 flex items-center justify-center ${
                          isSelected ? 'bg-violet-600 border-violet-500 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isSelected && <Check size={10} strokeWidth={3} />}
                        </span>
                        <div>
                          <h4 className="text-xs font-bold text-slate-800">{item.name}</h4>
                          <p className="text-[9px] md:text-[10px] text-slate-500 leading-tight mt-0.5">{item.description}</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-[11px] font-bold text-slate-850 text-slate-800 block mt-0.5">+Rp {formatPrice(item.basePrice)}</span>
                        <span className="text-[9px] font-mono text-violet-600 font-bold">+{item.addedDays} Hari</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: SLA Priority Options */}
            <div ref={revealStep3.ref} className={`bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/20 transition-all duration-700 delay-300 ${revealStep3.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-100 border border-emerald-250 text-emerald-650 flex items-center justify-center text-xs font-mono">3</span>
                Tingkat Server & SLA Kecepatan Dukungan
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FEATURE_DATABASE.filter(f => f.category === 'tier').map((item) => {
                  const isSelected = selectedFeatures.includes(item.id);
                  return (
                    <div
                      id={`calc-tier-${item.id}`}
                      key={item.id}
                      onClick={() => toggleFeature(item.id, 'tier')}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                        isSelected 
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-900 shadow-md shadow-emerald-50/50' 
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100/50'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected ? 'bg-emerald-600 border-emerald-500 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isSelected && <Check size={10} strokeWidth={3} />}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-emerald-600">
                          {item.id === 'express-sla' ? 'Akselerasi SLA' : 'Sesuai Antrean'}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-800 tracking-wide">{item.name}</h4>
                        <p className="text-[9.5px] text-slate-500 leading-tight mt-1 mb-2">{item.description}</p>
                        {item.basePrice > 0 ? (
                           <span className="text-[10px] font-mono font-bold text-emerald-600 block">+Rp {formatPrice(item.basePrice)}</span>
                        ) : (
                          <span className="text-[10px] font-mono font-bold text-slate-400 block">Gratis Setup</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* COLUMN RIGHT: Outputs & Proposal Generators (6 cols) */}
          <div ref={revealRight.ref} className={`lg:col-span-6 text-white transition-all duration-700 delay-200 ${revealRight.visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 p-6 rounded-2xl border border-indigo-700 shadow-2xl flex flex-col space-y-6">
              
              {/* Proposal View Header */}
              <div className="overflow-hidden">
                <span className="text-[9px] md:text-[10px] font-mono text-indigo-300 uppercase tracking-widest block mb-1 whitespace-nowrap">
                  HASIL KALKULASI PROYEK
                </span>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white flex items-center gap-1.5 whitespace-nowrap">
                  <Cpu size={16} className="text-indigo-300 animate-spinScale shrink-0" />
                  <span>Sinergi IT Specs Estimator</span>
                </h3>
                <hr className="border-white/10 my-3.5" />
              </div>

              {/* Simulation Numbers Block */}
              <div className="grid grid-cols-2 gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-center border-r border-white/10">
                  <span className="text-[9px] text-slate-300 block uppercase font-bold tracking-wider mb-1">Estimasi Investasi</span>
                  <div className="flex items-baseline justify-center gap-0.5 flex-wrap">
                    <span className="text-xs font-bold text-indigo-300 mr-0.5">Rp</span>
                    <span id="estimated-price" className="text-lg md:text-xl font-extrabold text-white">{formatPrice(calculatedSpecs.price)}</span>
                  </div>
                  <span className="text-[8px] text-slate-400 block mt-1">Pembayaran bertahap</span>
                </div>
                
                <div className="text-center">
                  <span className="text-[9px] text-slate-300 block uppercase font-bold tracking-wider mb-1">Perkiraan Pengerjaan</span>
                  <div className="flex items-baseline justify-center gap-0.5">
                    <span id="estimated-days" className="text-base md:text-lg font-extrabold text-emerald-400">{formatWeeksRange(calculatedSpecs.days)}</span>
                  </div>
                  <span className="text-[8px] text-emerald-400 block mt-1">SLA Jaminan Tepat Waktu</span>
                </div>
              </div>

              {/* Dynamic Double Panel for Chosen System & Standard Checklist */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border-t border-b border-white/10 py-4">
                {/* Column 1: Chosen System */}
                <div>
                  <span className="text-[10px] text-indigo-300 tracking-wider font-mono block mb-2.5 uppercase font-bold">SISTEM YANG AKAN ANDA DAPATKAN:</span>
                  <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                    {calculatedSpecs.items.map((item, id) => (
                      <div id={`calc-item-list-${id}`} key={id} className="flex gap-2 items-start text-xs text-slate-200">
                        <CheckCircle size={12} className="text-indigo-400 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-semibold block text-[10.5px] leading-snug">{item.name}</span>
                        </div>
                      </div>
                    ))}
                    <div className="flex gap-2 items-start text-xs text-slate-200">
                      <CheckCircle size={12} className="text-indigo-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold block text-[10.5px] leading-snug">Gratis Source Code & Serah Terima Aset</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2: Benefits list (Ex: "✔ 15-25 Halaman Premium", "✔ Desain Exclusive", etc) */}
                <div className="border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-indigo-300 tracking-wider font-mono block mb-2.5 uppercase font-bold">BENEFIT & KUALITAS STANDAR:</span>
                    <div className="space-y-1.5 max-h-full overflow-y-auto pr-1">
                      {dynamicBenefits.items.map((benefit, idx) => (
                        <div key={idx} className="flex gap-1.5 items-start text-slate-200 text-[10.5px]">
                          <span className="text-emerald-400 font-bold shrink-0">✔</span>
                          <span className="leading-tight">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 bg-violet-500/10 p-2 rounded-lg border border-violet-500/20 text-center">
                    <span className="text-[10px] font-semibold text-violet-300 leading-tight block">
                      {dynamicBenefits.footer}
                    </span>
                  </div>
                </div>
              </div>

               {/* Advanced proposal form fields */}
              <div className="mt-4">
                <form onSubmit={handleCreateProposal} className="space-y-3">
                  <div>
                    <label className="block text-[10px] text-slate-300 font-semibold mb-1 uppercase tracking-wide">Nama Bisnis & Industri</label>
                    <div className="grid grid-cols-2 gap-2">
                       <input 
                        id="form-company-name"
                        type="text" 
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Contoh: Toko Maju Jaya" 
                        className="bg-white/5 border border-white/10 text-xs rounded-lg px-2.5 py-1.5 w-full text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:bg-white/10"
                      />
                      <select
                        id="form-select-industry"
                        value={targetIndustry}
                        onChange={(e) => setTargetIndustry(e.target.value)}
                        className="bg-white/5 border border-white/10 text-xs rounded-lg px-2 py-1.5 w-full text-white focus:outline-none focus:border-indigo-400 focus:bg-white/10"
                      >
                        <option>E-Commerce / Retail</option>
                        <option>SaaS Aplikasi</option>
                        <option>Kesehatan / Farmasi</option>
                        <option>Gudang / Logistik</option>
                        <option>Makanan / Restoran</option>
                        <option>Lainnya</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-300 font-semibold mb-1 uppercase tracking-wide">Link Referensi Website / Aplikasi (Opsional)</label>
                    <input 
                      id="form-reference-link"
                      type="text" 
                      value={referenceLink}
                      onChange={(e) => setReferenceLink(e.target.value)}
                      placeholder="Contoh: https://tokopedia.com atau beji.dev" 
                      className="bg-white/5 border border-white/10 text-xs rounded-lg px-2.5 py-1.5 w-full text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:bg-white/10"
                    />
                  </div>

                  <button
                    id="btn-generate-quotation"
                    type="submit"
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-xs rounded-xl transition duration-150 flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-indigo-950/20"
                  >
                    <Sparkles size={13} />
                    Generasikan Dokumen Penawaran
                  </button>
                </form>
              </div>

              {/* Output PDF Preview Area on simulation */}
              <AnimatePresence>
                {isProposalGenerated && (
                  <motion.div
                    id="mock-quotation-modal"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white/5 border border-indigo-400/30 p-4 rounded-xl mt-4 relative animate-fade-in"
                  >
                    <span className="text-[8px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">PROPOSAL BERHASIL DIGENERASIKAN</span>
                    <h4 className="text-xs font-bold text-white">#Q-{Math.floor(100000 + Math.random() * 900000)} - {companyName || 'Bisnis Anda'}</h4>
                    <p className="text-[10px] text-slate-200 mt-1">
                      Estimasi final investasi: <strong className="text-white">Rp {formatPrice(calculatedSpecs.price)},-</strong> dengan masa pengerjaan terjamin <strong className="text-white">{formatWeeksRange(calculatedSpecs.days)}</strong>.
                    </p>
                    {referenceLink && (
                      <p className="text-[9px] text-slate-350 mt-1 truncate">
                        Referensi: <span className="text-indigo-300 underline">{referenceLink}</span>
                      </p>
                    )}
                    
                    <a
                      id="btn-whatsapp-proposal"
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex w-full items-center justify-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold rounded-lg transition"
                    >
                      Kirim ke Konsultan WhatsApp
                      <ArrowRight size={12} />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
