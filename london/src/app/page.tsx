import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/london-hero.jpg')",
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
              LONDON
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              May - November 2025
            </p>
            <a
              href="#content"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Explore More
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="content" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
              Places I have visited in London
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm documenting all the places I discover in London, including cafes, pubs, and restaurants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 font-serif">Cafes</h3>
              <p className="text-gray-600">
                Places for coffees & many pastries.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 font-serif">Pubs</h3>
              <p className="text-gray-600">
                For when you fancy a pint.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 font-serif">Restaurants</h3>
              <p className="text-gray-600">
                Cutest wine bars, brunch spots, and more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
