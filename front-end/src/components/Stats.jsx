function Stats() {
  return (
    <section className="py-6 md:py-8 bg-[#020617] text-center">

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto px-4">

        <div className="bg-[#0b1220] py-4 md:py-5 px-4 md:px-5 rounded-lg">
          <h3 className="text-xl md:text-3xl font-bold text-green-400">
            1200+
          </h3>
          <p className="text-gray-400 mt-1 text-xs md:text-sm">
            Tons Recycled
          </p>
        </div>

        <div className="bg-[#0b1220] py-4 md:py-5 px-4 md:px-5 rounded-lg">
          <h3 className="text-xl md:text-3xl font-bold text-green-400">
            5500+
          </h3>
          <p className="text-gray-400 mt-1 text-xs md:text-sm">
            Clients
          </p>
        </div>

        <div className="bg-[#0b1220] py-4 md:py-5 px-4 md:px-5 rounded-lg">
          <h3 className="text-xl md:text-3xl font-bold text-green-400">
            120+
          </h3>
          <p className="text-gray-400 mt-1 text-xs md:text-sm">
            Cities
          </p>
        </div>

      </div>

    </section>
  );
}

export default Stats;