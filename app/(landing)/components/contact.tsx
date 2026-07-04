
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Mail, Send,  Shield, RefreshCw, PenTool, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '10k-25k',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionReceipt, setSubmissionReceipt] = useState<any | null>(null);

  // Signature Canvas references
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSigned, setHasSigned] = useState(false);

  // Setup signature drawing logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas high resolution for crisp lines
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    const pos = getCoordinates(e, canvas);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pos = getCoordinates(e, canvas);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    setHasSigned(true);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSigned(false);
  };

  const getCoordinates = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>,
    canvas: HTMLCanvasElement
  ) => {
    const rect = canvas.getBoundingClientRect();
    if ('touches' in e) {
      if (e.touches.length === 0) return { x: 0, y: 0 };
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple Validation
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Visual identification name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid network email is required.';
    if (!formData.message.trim()) errors.message = 'Project constraints data is required.';
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    // Simulate secure compilation payload
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Save signature state as dataUrl if signed
      let signatureDataUrl = '';
      if (hasSigned && canvasRef.current) {
        signatureDataUrl = canvasRef.current.toDataURL();
      }

      setSubmissionReceipt({
        id: `TX_${Math.floor(Math.random() * 900000) + 100000}`,
        timestamp: new Date().toISOString(),
        status: '201_CREATED',
        name: formData.name,
        email: formData.email,
        budget: formData.budget,
        message: formData.message,
        signature: signatureDataUrl,
      });
    }, 1800);
  };

  return (
    <div className="py-4 lg:py-1 bg-transparent text-white relative flex flex-col justify-start">
      <div id="contact-glow" className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-950/5 blur-[120px] pointer-events-none" />

      <div id="contact-container" className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div id="contact-header" className="mb-6 lg:mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Mail className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">COMMUNICATION CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans">
            Initiate Project.exe <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-violet-300">
              Establish Connection.
            </span>
          </h2>
        </div>

        <div id="contact-layout-grid" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT: Premium Visual Card & Info */}
          <div
            id="contact-info-panel"
            className="bg-[#121212] border border-white/5 rounded-[32px] p-8 hover:border-white/10 transition-all duration-300 relative flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent pointer-events-none" />

            <div>
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block mb-6">SECURE NETWORK ROUTING</span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-4">Let's craft visual speed.</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed mb-8 font-sans">
                Ready to transcend standard corporate templates? Secure an architecture slot today. Let's build a product of outstanding fluid animations and reliable backend performance.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'DIRECT SECURE GMAIL', value: 'devklittech@gmail.com' },
                  { title: 'OFFICE COORDINATES', value: 'Los Angeles, California' },
                  { title: 'DEPLOYMENT TIMEZONE', value: 'PST (UTC-7)' },
                ].map((item, idx) => (
                  <div id={`contact-info-item-${idx}`} key={idx} className="border-b border-white/5 pb-4">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">{item.title}</span>
                    <span className="text-sm font-semibold font-mono text-white mt-1 block">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
              <Shield className="w-5 h-5 text-blue-400 animate-pulse" />
              <p className="text-[10px] font-mono text-zinc-500 leading-normal uppercase">
                ALL INBOUND TRANSMISSIONS ARE ENCRYPTED VIA END-TO-END TLS CHANNELS.
              </p>
            </div>
          </div>

          {/* RIGHT: High-End Contact Form / Success Screen */}
          <div
            id="contact-form-panel"
            className="bg-[#121212] border border-white/5 rounded-[32px] p-8 hover:border-white/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/15 to-transparent pointer-events-none" />

            {/* CASE 1: Form Submitted Success Receipt Sheet */}
            {submissionReceipt ? (
              <div id="contact-success-sheet" className="space-y-6 text-center animate-[scaleUp_0.3s_ease-out]">
                <div className="w-14 h-14 rounded-full bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                </div>
                
                <h3 className="text-2xl font-extrabold tracking-tight">TRANSMISSION SHIPPED</h3>
                <p className="text-sm text-zinc-400 font-light max-w-sm mx-auto leading-relaxed font-sans">
                  Your project blueprint payload was compiled successfully. I will inspect the logs and dispatch routing instructions within 4 hours.
                </p>

                {/* Secure Receipt Box */}
                <div className="bg-black/85 rounded-2xl p-5 border border-white/10 text-left font-mono text-[10px] space-y-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:10px_10px]" />
                  
                  <div className="flex justify-between border-b border-white/5 pb-2 text-[11px] text-blue-400 font-bold">
                    <span>BluePrint receipt</span>
                    <span>{submissionReceipt.status}</span>
                  </div>
                  
                  <div className="flex justify-between mt-2">
                    <span className="text-neutral-500">CLIENT_ID:</span>
                    <span className="text-white font-semibold">{submissionReceipt.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">ENDPOINT_EMAIL:</span>
                    <span className="text-white font-semibold">{submissionReceipt.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">EST_BUDGET:</span>
                    <span className="text-blue-400 font-bold">{submissionReceipt.budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">TRANSACTION_HASH:</span>
                    <span className="text-white">{submissionReceipt.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">STAMP_UTC:</span>
                    <span className="text-white">{submissionReceipt.timestamp}</span>
                  </div>

                  {/* Render Drawing verification signature image if present */}
                  {submissionReceipt.signature && (
                    <div className="mt-4 pt-3 border-t border-white/5 flex flex-col gap-1">
                      <span className="text-neutral-500 text-[9px] uppercase">DYNAMIC VERIFICATION SIGNATURE:</span>
                      <div className="h-14 bg-neutral-900 rounded-lg flex items-center justify-center p-1.5 overflow-hidden border border-white/5">
                        <img src={submissionReceipt.signature} alt="Client Verification Signature" className="h-full object-contain filter invert opacity-85" />
                      </div>
                    </div>
                  )}
                </div>

                <button
                  id="contact-receipt-reset"
                  onClick={() => {
                    setSubmissionReceipt(null);
                    setFormData({ name: '', email: '', budget: '10k-25k', message: '' });
                    setHasSigned(false);
                  }}
                  className="px-6 py-2 rounded-full border border-white/10 hover:border-white/20 text-xs font-mono text-zinc-400 hover:text-white transition-all cursor-pointer"
                >
                  Return to compiler
                </button>
              </div>
            ) : (
              // CASE 2: Active Contact Form
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                
                {/* Visual Header */}
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-xs font-mono text-zinc-400">BLUEPRINT COMPILER</span>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
                  </div>
                </div>

                {/* Input 1: Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name-input" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Client Identity / Name</label>
                  <input
                    id="name-input"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g., Julian Vercel"
                    className="px-4 py-3 bg-black border border-white/5 rounded-xl text-sm focus:border-blue-500 focus:outline-none transition-all placeholder-neutral-700 font-sans text-white"
                  />
                  {formErrors.name && (
                    <span className="text-[10px] font-mono text-red-400">{formErrors.name}</span>
                  )}
                </div>

                {/* Input 2: Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email-input" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Communication Tunnel / Email</label>
                  <input
                    id="email-input"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="E.g., julian@vercel.com"
                    className="px-4 py-3 bg-black border border-white/5 rounded-xl text-sm focus:border-blue-500 focus:outline-none transition-all placeholder-neutral-700 font-mono text-white"
                  />
                  {formErrors.email && (
                    <span className="text-[10px] font-mono text-red-400">{formErrors.email}</span>
                  )}
                </div>

                {/* Input 3: Budget Range selector */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="budget-select" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Estimated Resource Budget</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: '5k-10k', label: '$5k - $10k' },
                      { id: '10k-25k', label: '$10k - $25k' },
                      { id: '25k+', label: '$25k+' },
                    ].map((opt) => (
                      <button
                        id={`budget-opt-${opt.id}`}
                        key={opt.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: opt.id })}
                        className={`py-3.5 px-2 rounded-xl border font-mono text-xs text-center transition-all cursor-pointer ${
                          formData.budget === opt.id
                            ? 'border-blue-500 bg-blue-950/20 text-blue-300 font-bold'
                            : 'bg-black border-white/5 text-zinc-400 hover:text-white hover:border-white/10'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input 4: Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message-input" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Project Specifications</label>
                  <textarea
                    id="message-input"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your design and performance expectations..."
                    className="px-4 py-3 bg-black border border-white/5 rounded-xl text-sm focus:border-blue-500 focus:outline-none transition-all placeholder-neutral-700 font-sans text-white resize-none"
                  />
                  {formErrors.message && (
                    <span className="text-[10px] font-mono text-red-400">{formErrors.message}</span>
                  )}
                </div>

                {/* HTML5 Interactive Signature Canvas Pad */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-baseline">
                    <label htmlFor="signature-canvas" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                      <PenTool className="w-3.5 h-3.5 text-blue-400" /> Client Verification Sign-off
                    </label>
                    {hasSigned && (
                      <button
                        id="contact-sig-clear"
                        type="button"
                        onClick={clearSignature}
                        className="text-[9px] font-mono text-zinc-500 hover:text-red-400 transition-colors uppercase cursor-pointer"
                      >
                        [clear]
                      </button>
                    )}
                  </div>
                  
                  <div className="h-20 bg-black border border-white/5 rounded-xl overflow-hidden relative cursor-crosshair">
                    <canvas
                      id="signature-canvas"
                      ref={canvasRef}
                      onMouseDown={startDrawing}
                      onMouseMove={draw}
                      onMouseUp={stopDrawing}
                      onMouseLeave={stopDrawing}
                      onTouchStart={startDrawing}
                      onTouchMove={draw}
                      onTouchEnd={stopDrawing}
                      className="absolute inset-0 w-full h-full"
                    />
                    {!hasSigned && (
                      <div className="absolute inset-0 bg-black/10 pointer-events-none flex items-center justify-center">
                        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">DRAW SIGNATURE HERE TO SIGN CONTRACT</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 text-white font-bold text-xs tracking-widest uppercase transition-all hover:brightness-115 disabled:opacity-50 cursor-pointer shadow-[0_5px_25px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" /> COMPILING ENVELOPE...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" /> COMPILE & TRANSMIT
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
