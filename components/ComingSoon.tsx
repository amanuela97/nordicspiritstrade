export default function ComingSoon() {
  return (
    <section
      className="bg-white py-16 sm:py-24"
      aria-labelledby="coming-soon-heading"
    >
      <div className="max-w-xl mx-auto text-center px-4">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-gray-400 mb-4">
          Hartwall Original Long Drink
        </p>
        <h2
          id="coming-soon-heading"
          className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6"
        >
          Coming Soon to Nepal
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
          {/* Placeholder copy — final brand copy to be supplied by client */}
          Finland&apos;s most iconic ready-to-drink classic is making its way to
          the Himalayas. Hartwall Long Drink blends premium Finnish gin with
          natural grapefruit soda — light, refreshing, and unmistakably
          Nordic.
        </p>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          {/* Placeholder copy — final brand copy to be supplied by client */}
          Many vibrant flavors. One legendary drink. Available soon across Nepal
          through our exclusive import distribution network.
        </p>
      </div>
    </section>
  );
}
