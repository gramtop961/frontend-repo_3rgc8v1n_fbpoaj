import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline full-cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Jd4wcqFfe70N-TXP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for mood, don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Now in development
          </div>

          <h1 className="mt-4 text-4xl sm:text-6xl font-black tracking-tight text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.6)]">
            A modern love letter to 16-bit adventures
          </h1>

          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
            Explore vibrant pixel worlds, meet quirky characters, and battle arcade-inspired bosses in a hand-crafted indie epic.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#wishlist" className="px-5 py-3 rounded-md bg-emerald-400 text-slate-900 font-extrabold shadow-lg shadow-emerald-500/20 hover:bg-emerald-300 active:bg-emerald-500">
              Add to Wishlist
            </a>
            <a href="#trailer" className="px-5 py-3 rounded-md border border-white/20 text-white/90 hover:bg-white/10">
              Watch Trailer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
