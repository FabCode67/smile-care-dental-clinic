'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const NavAndHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect - only for color change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking a nav link
  const handleNavLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Ahabanza', href: '#' },
    { name: 'Amakuru ukeneye', href: '#about' },
    { name: 'Service Dutanga', href: '#services' },
    { name: 'Ubwishingizi Dukorana', href: '#insurances' },
    { name: 'Gusaba Rendevu', href: '#appointment' },
    { name: 'Tuvugishe', href: '#contact' }
  ];

  return (
    <div id="#" className="relative">
      {/* Top Bar - Always Visible and Fixed */}
      <div className="bg-[#4E9FE5] text-white py-2 fixed top-0 w-full z-50">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-center hidden md:block mb-2 sm:mb-0 text-xs sm:text-sm">
              Dukorera: Nyagatare, mu mugi, hejuru ya Bank Populaire, etage ya kabiri
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <div className="hidden sm:flex items-center space-x-2">
                <a href="linkedin.com" className="hover:text-blue-200" aria-label="LinkedIn">
                  <Linkedin size={16} />
                </a>
                <a href="instagram.com" className="hover:text-blue-200" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
                <a href="facebook.com" className="hover:text-blue-200" aria-label="Facebook">
                  <Facebook size={16} />
                </a>
                <a href="twitter.com" className="hover:text-blue-200" aria-label="Twitter">
                  <Twitter size={16} />
                </a>
                <a href="https://wa.me/+250789060310" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hover:text-blue-200">
                  <FaWhatsapp size={16} />
                </a>
              </div>
             
              <div className="flex items-center">
                <span className="mx-1 hidden sm:inline">|</span>
                <p className="mr-1">Tuvugishe kuri:</p>
                <a href="tel:0789060310" className="hover:text-blue-200">
                  <span className="font-semibold">0789060310</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`${
          scrolled ? "bg-white shadow-lg" : "bg-[#4E9FE5]"
        } fixed w-full z-40 transition-all duration-300`}
        style={{ top: '40px' }} // Always below top bar
      >
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center gap-2">
                <img 
                  src="/images/logo.png" 
                  alt="Smile Care"
                  className={`h-16 sm:h-24 ${!scrolled ? "filter brightness-0 invert" : ""} transition-all object-contain duration-300`} 
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-4 xl:space-x-6">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleNavLinkClick}
                    className={`${
                      scrolled
                        ? "text-gray-700 hover:text-[#4E9FE5]"
                        : "text-white hover:text-blue-200"
                    } transition-colors duration-300 font-medium uppercase text-xs xl:text-sm py-1 ${
                      index === 0 ? (scrolled ? "border-b-2 border-[#4E9FE5]" : "border-b-2 border-white") : ""
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Appointment button - visible on medium+ screens */}
            <div className="hidden md:block">
              <a
                href="#appointment"
                className={`px-4 sm:px-6 py-2 ${
                  scrolled
                    ? "bg-[#4E9FE5] text-white"
                    : "bg-white text-[#4E9FE5]"
                } rounded font-medium uppercase text-xs sm:text-sm hover:opacity-90 transition-colors duration-300`}
              >
                Gusaba Rendevu
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${scrolled ? "text-gray-800" : "text-white"} p-2`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`lg:hidden ${scrolled ? "bg-white" : "bg-[#4E9FE5]"} shadow-lg`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavLinkClick}
                  className={`block px-3 py-2 rounded-md uppercase text-sm font-medium ${
                    scrolled
                      ? "text-gray-700 hover:text-[#4E9FE5] hover:bg-gray-100"
                      : "text-white hover:text-blue-200 hover:bg-blue-600"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 pb-1">
                <a
                  href="#appointment"
                  onClick={handleNavLinkClick}
                  className={`block mx-3 px-4 py-2 text-center ${
                    scrolled
                      ? "bg-[#4E9FE5] text-white" 
                      : "bg-white text-[#4E9FE5]"
                  } rounded font-medium uppercase text-sm hover:opacity-90 transition-colors duration-300`}
                >
                  Gusaba Rendevu
                </a>
              </div>
              <div className="pt-3 pb-1 px-3 flex justify-center sm:hidden">
                <div className="flex items-center space-x-4">
                  <a href="linkedin.com" className={scrolled ? "text-gray-700" : "text-white"} aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="instagram.com" className={scrolled ? "text-gray-700" : "text-white"} aria-label="Instagram">
                    <Instagram size={18} />
                  </a>
                  <a href="facebook.com" className={scrolled ? "text-gray-700" : "text-white"} aria-label="Facebook">
                    <Facebook size={18} />
                  </a>
                  <a href="twitter.com" className={scrolled ? "text-gray-700" : "text-white"} aria-label="Twitter">
                    <Twitter size={18} />
                  </a>
                  <a href="https://wa.me/+250789060310" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className={scrolled ? "text-gray-700" : "text-white"}>
                    <FaWhatsapp size={18} />
                  </a>

                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with responsive spacing */}
      <div className="relative min-h-screen pt-28 sm:pt-32">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-[url('/bunner.jpg')] bg-cover bg-center"
          style={{
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600/90 to-cyan-900/90" />

        <div className="relative pt-12 pb-16 sm:pt-24 sm:pb-24">
          <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Smile Care
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Providing the highest standard of dental care to patients in Nyagatare and Gatsibo region
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a
                href="#services"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full 
                          font-semibold transition-colors duration-300 shadow-lg hover:shadow-blue-500/50 text-center"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full 
                          font-semibold transition-colors duration-300 backdrop-blur-sm text-center mt-2 sm:mt-0"
              >
                Contact Us
              </a>
            </div>

            {/* Floating Cards */}
            <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {[
                { title: 'Professional Team', desc: 'Experienced and highly qualified dentists' },
                { title: 'Modern Equipment', desc: 'State-of-the-art dental technology' },
                { title: 'Comprehensive Care', desc: 'Wide range of dental procedures' }
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl text-white 
                            border border-white/20 hover:border-white/40 transition-all duration-300
                            hover:transform hover:-translate-y-1"
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm sm:text-base text-gray-200">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href='#about' className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-white opacity-70" />
        </a>
      </div>
    </div>
  );
};

export default NavAndHero;