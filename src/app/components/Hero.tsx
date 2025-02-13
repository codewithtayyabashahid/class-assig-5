import React from "react";


const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12">
      {/* Left Text Section */}
      <div className="max-w-md text-left">
        <h2 className="text-2xl md:text-7xl font-serif text-white leading-tight pt-28">
          IMPECCABLE <br /> CRAFTSMANSHIP AND FINESSE
        </h2>
        <p className="text-white text-xl pt-6">
          An example of intricate workmanship and detail, elegant necklaces and
          long and short chains form a part of our desirable collection.
        </p>
        <button className="mt-6 bg-[#A09875] text-white px-6 py-2 rounded-md hover:bg-[#8C8662] w-[288px] h-[58px] text-2xl transition">
          Explore Now
        </button>
      </div>

      {/* Right Image Section */}
      <div className="relative mt-8 md:mt-0">
        <div className="relative">
          <img
            src="/rs-group-wrap.svg" 
            className="rounded-lg"
          />
        </div>
        </div>
    </section>
  );
};
export default Hero;

