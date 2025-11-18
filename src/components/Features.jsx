import { Sparkles, Gamepad2, Swords, Music2 } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Hand-crafted Pixel Art",
    desc: "Crisp 8/16-bit visuals with modern lighting, subtle parallax, and playful animations.",
  },
  {
    icon: Gamepad2,
    title: "Tight, Responsive Controls",
    desc: "Speedrun-friendly movement, snappy attacks, and assist options for all skill levels.",
  },
  {
    icon: Swords,
    title: "Boss Fights with Personality",
    desc: "Learn patterns, dodge, and strike in encounters that feel like arcade classics.",
  },
  {
    icon: Music2,
    title: "Original Chiptune OST",
    desc: "A nostalgic soundtrack with modern mix and dynamic layers that react to gameplay.",
  },
];

function Features() {
  return (
    <section id="features" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Built for players who love pixel art
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Every screen is designed to feel nostalgic and new at the same time.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-slate-900 shadow shadow-emerald-500/20">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-white font-bold text-lg">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
