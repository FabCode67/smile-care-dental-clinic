'use client'
import React, { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const NavAndHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Insurances', href: '#insurances' },
    { name: 'Team', href: '#tam' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div id='#' className="relative">
      {/* Navbar */}
      <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
                <a href="#" className="flex items-center gap-2">
                    <img src="/logo.png" alt="Smile Care" className="h-14" />
                </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:0792497480" className="flex items-center text-gray-700 hover:text-blue-600">
                <Phone className="h-5 w-5 mr-2" />
                <span>0792497480</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-1 bg-[url('/bunner.jpg')] bg-cover bg-center"
          style={{
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600/90 to-cyan-900/90" />

        {/* Content */}

        {/* - Appointment (thing) (via email, WhatsApp)
- Amazina yabaganga namafoto.
- Visibility (colors)
- Fix the appointment button
- Insurances */}


        <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
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
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white opacity-70" />
        </div>
      </div>
    </div>
  );
};

export default NavAndHero;