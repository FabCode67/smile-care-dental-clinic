import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen relative bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50" />
      
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen p-6 lg:p-12">
          
          {/* Image Side */}
          <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 group-hover:opacity-80 transition-opacity duration-500" />
            <img
              src="about.jpg"
              alt="Dental Team"
              className="w-full h-full object-cover object-center rounded-2xl shadow-2xl 
                         transform group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Floating Stats */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-700">Years Experience</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-3xl font-bold text-cyan-600">1000+</div>
                <div className="text-sm text-gray-700">Happy Patients</div>
              </div>
            </div>
          </div>
          
          {/* Text Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                About Smile Care
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
            </div>
            
            <div className="space-y-6 text-gray-600">
              <p className="text-lg">
                Smile Care Dental Clinic is fully dedicated to providing the highest standard of dental care 
                to patients in Nyagatare and Gatsibo region and its surroundings.
              </p>
              
              <p className="text-lg">
                Our team of experienced and highly qualified dentists is specialized in a wide range of 
                dental procedures, from preventative and restorative dentistry to cosmetic dentistry.
              </p>

              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  We are committed to providing comprehensive dental, orthodontic, and prosthodontics 
                  services of high quality.
                </p>
              </div>

              {/* Core Values */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  'Professionalism',
                  'Patient Satisfaction',
                  'High Quality Services',
                  'Teamwork Spirit'
                ].map((value, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 bg-white/30 p-3 rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
                    <span className="text-gray-700 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;