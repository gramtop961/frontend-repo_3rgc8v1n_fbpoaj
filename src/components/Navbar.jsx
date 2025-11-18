import { Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="absolute top-0 inset-x-0 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="#" className="group inline-flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-lg shadow-emerald-500/30 ring-1 ring-white/20 flex items-center justify-center">
              <span className="text-slate-900 font-black">8</span>
            </div>
            <div className="leading-tight">
              <div className="text-white font-extrabold tracking-widest uppercase text-sm">
                Pixel Odyssey
              </div>
              <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
                An indie 16-bit adventure
              </div>
            </div>
          </a>

          {/* Nav actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#features"
              className="text-white/80 hover:text-white text-sm font-medium px-3 py-2 rounded-md"
            >
              Features
            </a>
            <a
              href="#gallery"
              className="text-white/80 hover:text-white text-sm font-medium px-3 py-2 rounded-md"
            >
              Gallery
            </a>
            <a
              href="#wishlist"
              className="text-slate-900 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 transition-colors text-sm font-bold px-4 py-2 rounded-md shadow shadow-emerald-500/20"
            >
              Wishlist
            </a>
          </div>

          <button className="sm:hidden inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/10 text-white hover:bg-white/20">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
