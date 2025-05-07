import React from 'react';
import { 
  Stethoscope, 
  Baby, 
  Search, 
  Replace, 
  AlignVerticalJustifyCenter,
  Sparkles,
  Rotate3DIcon
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Replace className="w-12 h-12" />,
      title: "Dental Prosthodontics",
      description: "Expert tooth replacement services including dentures, crowns, and bridges to restore your smile.",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: <AlignVerticalJustifyCenter className="w-12 h-12" />,
      title: "Orthodontics",
      description: "Professional teeth alignment services using modern techniques and equipment.",
      color: "from-cyan-600 to-cyan-400"
    },
    {
      icon: <Rotate3DIcon className="w-12 h-12" />,
      title: "Root Canal Treatments",
      description: "Specialized root canal procedures using advanced techniques for minimal discomfort.",
      color: "from-indigo-600 to-indigo-400"
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "Diagnostic Services",
      description: "Advanced digital periapical x-ray services for accurate dental diagnostics.",
      color: "from-purple-600 to-purple-400"
    },
    {
      icon: <Baby className="w-12 h-12" />,
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children in a friendly and comfortable environment.",
      color: "from-pink-600 to-pink-400"
    },
    {
      icon: <Stethoscope className="w-12 h-12" />,
      title: "General Dentistry",
      description: "Comprehensive dental services including fillings, cleaning, whitening, and extractions.",
      color: "from-teal-600 to-teal-400"
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of dental services using modern technology and techniques
            to ensure the best possible care for your dental health.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl 
                         transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Service Icon */}
              <div className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 
                              bg-gradient-to-br ${service.color} opacity-10 
                              rounded-full group-hover:scale-150 transition-transform duration-500`} />
              
              <div className={`inline-block p-3 rounded-2xl 
                              bg-gradient-to-br ${service.color} text-white 
                              mb-6 relative`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>

              {/* Hover Effect Decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent 
                            via-blue-500 to-transparent opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Additional Services Info */}
        <div className="mt-16 bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-800">Additional Features</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Modern Equipment & Technology",
              "Experienced Dental Team",
              "Comfortable Environment"
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-white/80 p-4 rounded-xl"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;