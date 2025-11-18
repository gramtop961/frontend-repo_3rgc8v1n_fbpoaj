function PixelCard({ title, subtitle, img }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
      <img src={img} alt="pixel scene" className="h-56 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 p-4">
        <div className="text-white font-bold drop-shadow">{title}</div>
        <div className="text-white/70 text-sm">{subtitle}</div>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Sneak peek</h2>
            <p className="mt-2 text-white/70">A few moments from the journey.</p>
          </div>
          <a href="#wishlist" className="hidden sm:inline-flex px-4 py-2 rounded-md bg-emerald-400 text-slate-900 font-extrabold hover:bg-emerald-300">
            Join the Wishlist
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <PixelCard title="Forest Outskirts" subtitle="Parallax grove" img="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop" />
          <PixelCard title="Neon City" subtitle="Cyber bazaar" img="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop" />
          <PixelCard title="Crystal Caves" subtitle="Echo chambers" img="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
