'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

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

  const navItems = [
    { name: 'Ahabanza', href: '#' },
    { name: 'Amakuru ukeneye', href: '#about' },
    { name: 'Service Dutanga', href: '#services' },
    { name: 'Ubwishingizi Dukorana', href: '#insurances' },
    { name: 'Gusaba Rendevu', href: '#appointment' },
    { name: 'Tuvugishe', href: '#contact' }
  ];

  return (
    <div id='#' className="relative">
      {/* Top Bar - Always Visible and Fixed */}
      <div className="bg-red-600 text-white py-2 fixed top-0 w-full z-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#events" className="text-sm font-medium">EVENTS</a>
            <a href="#blogs" className="text-sm font-medium">BLOGS</a>
          </div>
          <div className="text-sm hidden md:block">
            MAIN BRANCH: JAMHURI STREET | CALL US NOW: +255 (0) 677 051 745
          </div>
        </div>
      </div>

      {/* Main Navbar - Only Color Changes on Scroll */}
      <nav 
        className={`${
          scrolled 
            ? "bg-white shadow-lg" 
            : "bg-red-600"
        } fixed w-full z-40 transition-all duration-300`}
        style={{ top: '40px' }} // Always below top bar
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center gap-2">
                <img src="/images/logo.png" alt="Smile Care" className="h-14" />
                <div className={scrolled ? "text-red-600" : "text-white"}>
                  <div className="text-2xl font-bold">Smiles</div>
                  <div className="text-sm uppercase tracking-wider">DENTAL CLINIC</div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${
                      scrolled 
                        ? "text-gray-700 hover:text-red-600" 
                        : "text-white hover:text-yellow-200"
                    } transition-colors duration-300 font-medium uppercase text-sm py-1 ${
                      index === 0 ? (scrolled ? "border-b-2 border-red-600" : "border-b-2 border-white") : ""
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Appointment button - always visible, just changes color */}
            <div className="hidden md:block">
              <a 
                href="#appointment" 
                className={`px-6 py-2 ${
                  scrolled 
                    ? "bg-red-600 text-white" 
                    : "bg-white text-red-600"
                } rounded font-medium uppercase text-sm hover:opacity-90 transition-colors duration-300`}
              >
                Gusaba Rendevu
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={scrolled ? "text-gray-800" : "text-white"}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden ${scrolled ? "bg-gray-100" : "bg-red-700"}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 uppercase text-sm ${
                    scrolled 
                      ? "text-gray-700 hover:text-red-600" 
                      : "text-white hover:text-yellow-200"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with appropriate spacing */}
      <div className="relative min-h-screen pt-32">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-[url('/bunner.jpg')] bg-cover bg-center"
          style={{
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600/90 to-cyan-900/90" />

        <div className="relative pt-16 pb-16 sm:pt-24 sm:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Smile Care
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Providing the highest standard of dental care to patients in Nyagatare and Gatsibo region
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#services"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full 
                          font-semibold transition-colors duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full 
                          font-semibold transition-colors duration-300 backdrop-blur-sm"
              >
                Contact Us
              </a>
            </div>

            {/* Floating Cards */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: 'Professional Team', desc: 'Experienced and highly qualified dentists' },
                { title: 'Modern Equipment', desc: 'State-of-the-art dental technology' },
                { title: 'Comprehensive Care', desc: 'Wide range of dental procedures' }
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white 
                            border border-white/20 hover:border-white/40 transition-all duration-300
                            hover:transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-200">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href='#about' className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white opacity-70" />
        </a>
      </div>
    </div>
  );
};

export default NavAndHero;