import React from "react";

const TopNav = ({ isSticky }) => {
  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Partners", href: "#partners" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/tapResto.png"
            alt="Tap Resto Logo"
            className="w-10 md:w-16 h-10 md:h-16 object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 font-medium hover:text-brand-pink transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions (Visible on ALL screens) */}
        <div className="flex items-center gap-3">
          {/* Login */}
          <a
            href="/store-login"
            className="
              text-brand-pink font-bold
              px-4 py-2
              rounded-full
              border-2 border-brand-pink
              hover:bg-brand-pink hover:text-white
              transition-all
              text-sm sm:text-base
            "
          >
            Login
          </a>

          {/* Primary CTA */}
          <a
            href="https://wa.me/919628316081?text=Hi%20Tap%20Resto%2C%20I%27d%20like%20a%20demo"
            className="
              bg-brand-pink text-white
              px-5 py-2.5
              rounded-full
              font-bold
              text-sm sm:text-base
              shadow-lg hover:shadow-pink-200
              hover:bg-pink-700
              transition-all
            "
          >
            Start Free Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
