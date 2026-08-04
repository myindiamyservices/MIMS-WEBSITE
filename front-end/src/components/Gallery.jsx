import { Award, Gem } from "lucide-react";
import nikhilBadhwarImg from "../assets/nikhil-badhwar-car.png";
import rollsRoyceImg from "../assets/rolls-royce-phantom.jpg";

function Gallery() {
  const stories = [
    {
      image: nikhilBadhwarImg,
      badge: "Air Force Veteran",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      title: "41-Year-Old Maruti Van (DID 6016)",
      owner: "Officer Nikhil Badhwar",
      job: "Indian Air Force Veteran",
      description: "A cherished family companion for over four decades, this 1985 Maruti Van witnessed generations of memories. Bidding farewell to such an icon is emotional, but Officer Nikhil Badhwar chose the honorable path of responsible recycling. MIMS processed the vehicle following strict environmental norms, ensured legal de-registration, and issued the official Certificate of Deposit.",
      icon: Award,
    },
    {
      image: rollsRoyceImg,
      badge: "Luxury Milestone",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
      title: "Rolls Royce Phantom",
      owner: "",
      job: "",
      description: "In a remarkable milestone, My India My Services successfully handled the scrapping of a luxury Rolls Royce Phantom — a symbol of ultimate prestige transformed into sustainability. Every component was processed with top-tier precision, ensuring maximum material recovery while following strict environmental and legal norms.",
      icon: Gem,
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-[#e6eef2] to-[#dfe8e4]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold tracking-wider uppercase text-xs sm:text-sm">
            MIMS Scrap Diaries
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Our <span className="text-green-600">Wall of Trust</span> & Gallery
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Real stories of responsible citizens choosing compliance and sustainability when retiring their beloved vehicles.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stories.map((story, i) => {
            const Icon = story.icon;
            return (
              <div 
                key={i} 
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group h-full"
              >
                {/* IMAGE */}
                <div className="relative h-60 sm:h-72 md:h-80 overflow-hidden bg-gray-100">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                </div>

                {/* CONTENT */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* BADGES & INFO */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${story.badgeColor}`}>
                        {story.badge}
                      </span>
                      <Icon className="text-green-600 h-5 w-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-green-600 transition-colors">
                      {story.title}
                    </h3>
                    
                    {/* OWNER / CUSTOMER */}
                    {story.owner ? (
                      <p className="text-xs text-gray-500 font-medium mb-4">
                        Owner: <span className="text-gray-800 font-semibold">{story.owner}</span>{story.job && ` • ${story.job}`}
                      </p>
                    ) : (
                      <div className="h-4"></div> /* Spacer when no owner info is present */
                    )}

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {story.description}
                    </p>
                  </div>

                  {/* FOOTER ACTION */}
                  <div className="border-t pt-4 flex items-center justify-between text-xs text-gray-400">
                    <span>100% Legally Scrapped</span>
                    <span>COD Issued ✓</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Gallery;
