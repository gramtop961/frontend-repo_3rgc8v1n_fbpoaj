import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import CTA from './components/CTA';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <CTA />

      {/* Footer */}
      <footer className="py-10 bg-slate-950/90 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/70 text-sm">© {new Date().getFullYear()} Pixel Odyssey</div>
          <div className="text-white/50 text-sm">Crafted with love for retro games</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
