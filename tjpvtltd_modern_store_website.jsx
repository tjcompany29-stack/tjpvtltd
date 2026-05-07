export default function TJPVTLTDWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800 sticky top-0 bg-black/90 backdrop-blur z-50">
        <h1 className="text-2xl font-bold tracking-widest">TJPVTLTD</h1>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#products" className="hover:text-gray-400">Products</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center px-6 py-28 bg-gradient-to-b from-gray-900 to-black"
      >
        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Modern Online Store
        </h2>
        <p className="max-w-2xl text-gray-300 text-lg mb-8">
          Welcome to TJPVTLTD — a stylish and modern shopping experience with premium collections, trendy fashion, and top-quality products.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
            Shop Now
          </button>
          <button className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition">
            Explore
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="px-8 py-20">
        <div className="text-center mb-14">
          <h3 className="text-4xl font-bold mb-4">Featured Products</h3>
          <p className="text-gray-400">Discover our latest collection</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Luxury Sneakers",
              price: "₹4,999",
              image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
            },
            {
              name: "Premium Hoodie",
              price: "₹2,499",
              image:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
            },
            {
              name: "Smart Watch",
              price: "₹6,999",
              image:
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-2">{item.name}</h4>
                <p className="text-gray-400 mb-4">{item.price}</p>
                <button className="w-full bg-white text-black py-3 rounded-2xl font-semibold hover:bg-gray-200 transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="px-8 py-24 bg-gradient-to-r from-gray-950 to-gray-900 text-center"
      >
        <h3 className="text-4xl font-bold mb-6">About Us</h3>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-8">
          TJPVTLTD is built for people who love premium style and modern shopping.
          Our mission is to provide quality products with a clean and luxury online experience.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-20">
        <div className="max-w-2xl mx-auto bg-gray-900 p-10 rounded-3xl shadow-2xl">
          <h3 className="text-4xl font-bold mb-6 text-center">Contact Us</h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-2xl bg-black border border-gray-700 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-2xl bg-black border border-gray-700 focus:outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 rounded-2xl bg-black border border-gray-700 focus:outline-none"
            ></textarea>

            <button className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:bg-gray-200 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © 2026 TJPVTLTD. All Rights Reserved.
      </footer>
    </div>
  );
}
