'use client';

export default function AnimatedGridBg() {
  return (
    <>
      <style>{`
        @keyframes agb-down { from { transform: rotateX(60deg) rotateZ(-18deg) translateY(0); } to { transform: rotateX(60deg) rotateZ(-18deg) translateY(80px); } }
        @keyframes agb-right { from { transform: rotateX(60deg) rotateZ(-18deg) translateX(0); } to { transform: rotateX(60deg) rotateZ(-18deg) translateX(80px); } }
        .agb-h { animation: agb-down 5s linear infinite; will-change: transform; }
        .agb-v { animation: agb-right 5s linear infinite; will-change: transform; }
      `}</style>

      <div style={{
        pointerEvents: 'none',
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        contain: 'strict',
      }}>
        <div style={{
          position: 'absolute',
          inset: '-60%',
          perspective: '500px',
          perspectiveOrigin: '50% 20%',
        }}>
          <div
            className="agb-h"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 80px)',
            }}
          />
          <div
            className="agb-v"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 80px)',
            }}
          />
        </div>

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #060606 100%)',
        }} />
      </div>
    </>
  );
}
