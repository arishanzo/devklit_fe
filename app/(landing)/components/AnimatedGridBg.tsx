'use client';

export default function AnimatedGridBg() {
  return (
    <>
      <style>{`
        @keyframes grid-move-h {
          from { background-position: 0 0; }
          to   { background-position: 0 80px; }
        }
        @keyframes grid-move-v {
          from { background-position: 0 0; }
          to   { background-position: 80px 0; }
        }
        .agb-h { animation: grid-move-h 5s linear infinite; }
        .agb-v { animation: grid-move-v 5s linear infinite; }
      `}</style>

      <div style={{
        pointerEvents: 'none',
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        userSelect: 'none',
      }}>
        {/* 3D perspective wrapper */}
        <div style={{
          position: 'absolute',
          inset: '-60%',
          perspective: '500px',
          perspectiveOrigin: '50% 20%',
        }}>
          {/* Horizontal lines */}
          <div
            className="agb-h"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.09) 0px, rgba(255,255,255,0.09) 1px, transparent 1px, transparent 80px)',
              transform: 'rotateX(60deg) rotateZ(-18deg)',
            }}
          />
          {/* Vertical lines */}
          <div
            className="agb-v"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.09) 0px, rgba(255,255,255,0.09) 1px, transparent 1px, transparent 80px)',
              transform: 'rotateX(60deg) rotateZ(-18deg)',
            }}
          />
        </div>

        {/* Vignette — fade edges so grid doesn't look harsh */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #060606 100%)',
        }} />
      </div>
    </>
  );
}
