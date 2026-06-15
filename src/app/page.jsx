import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Indoor Plants",
            "Outdoor Plants",
            "Fruit Trees",
            "Flower Plants",
            "Office Plants",
            "Gardening Tools",
          ].map((item) => (
            <div
              key={item}
              className="p-6 rounded-xl border shadow-sm hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Best Selling Plants
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Snake Plant",
              "Money Plant",
              "Rose Plant",
              "Mango Tree",
              "Peace Lily",
              "Aloe Vera",
            ].map((plant) => (
              <div
                key={plant}
                className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-xl">{plant}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Healthy Plants",
            "Fast Delivery",
            "Affordable Price",
            "Expert Support",
          ].map((item) => (
            <div
              key={item}
              className="p-6 border rounded-xl text-center hover:bg-green-50"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Customer Reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <p>Amazing quality plants and excellent customer service.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Gardening Tips</h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="border p-3 rounded-lg w-80 max-w-full"
        />
      </section>
    </>
  );
}
