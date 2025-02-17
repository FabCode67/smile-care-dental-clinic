import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactAndFooter = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
              Visit Our Clinic
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {`We're conveniently located in Nyagatare Town. Come visit us for your dental care needs.`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Map Container */}
            <div className="bg-white rounded-2xl shadow-lg p-4 h-[400px] md:h-[500px]">
              <div className="w-full h-full rounded-xl overflow-hidden bg-gray-200">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.807636865456!2d30.321945885268125!3d-1.2896676953411703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dbf3002562f901%3A0xd98ca5fe872c671c!2sSmile%20care%20dental%20clinic!5e0!3m2!1sen!2srw!4v1739476507467!5m2!1sen!2srw"  height="450"   loading="lazy"></iframe>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600">Nyagatare Town, opposite to East African university</p>
                      <p className="text-gray-600">2 floor, above Banque populaire</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600">Reception: 0792497480</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">smilecareltd2@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Working Hours</p>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* About Column */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Smile Care</h3>
              <p className="text-gray-300 mb-6">
                Providing the highest standard of dental care to patients in Nyagatare 
                and Gatsibo region and its surroundings.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-300 hover:text-white transition-colors cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-300 hover:text-white transition-colors cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-300 hover:text-white transition-colors cursor-pointer" />
                <Linkedin className="w-6 h-6 text-gray-300 hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                {[
                  "Dental Prosthodontics",
                  "Orthodontics",
                  "Root Canal Treatment",
                  "Pediatric Dentistry",
                  "General Dentistry",
                  "Dental Diagnosis"
                ].map((service, index) => (
                  <li key={index} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Insurance Partners */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Insurance Partners</h3>
              <ul className="space-y-2">
                {["RSSB", "MMI", "RAMA", "RADIANT"].map((partner, index) => (
                  <li key={index} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    {partner}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
            <p>© {new Date().getFullYear()} Smile Care Dental Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactAndFooter;