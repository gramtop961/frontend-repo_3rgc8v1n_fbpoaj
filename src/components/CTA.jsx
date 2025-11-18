function CTA() {
  return (
    <section id="wishlist" className="relative py-20 bg-gradient-to-br from-emerald-400 to-cyan-500">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(135deg,#ffffff22_10%,transparent_10%),linear-gradient(225deg,#ffffff22_10%,transparent_10%)] bg-[length:20px_20px]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Ready to start the quest?
        </h2>
        <p className="mt-3 text-slate-900/80">
          Be first to know when the playable demo drops and snag an exclusive in-game cosmetic.
        </p>
        <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <input type="email" required placeholder="Email address" className="w-full sm:w-96 px-4 py-3 rounded-md bg-white/90 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-900/30" />
          <button type="submit" className="px-5 py-3 rounded-md bg-slate-900 text-white font-extrabold hover:bg-slate-800">
            Join Wishlist
          </button>
        </form>
        <div className="mt-3 text-sm text-slate-900/70">
          No spam. Unsubscribe anytime.
        </div>
      </div>
    </section>
  );
}

export default CTA;
