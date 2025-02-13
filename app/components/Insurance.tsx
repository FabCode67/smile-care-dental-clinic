import React from 'react';
import { Shield, CheckCircle, Building2 } from 'lucide-react';

const InsurancePartnersSection = () => {
  const insurancePartners = [
    {
      name: "RSSB",
      coverage: ["Dental checkups", "Root canal treatment", "Dental surgeries"],
      discount: "Up to 85% coverage"
    },
    {
      name: "MMI",
      coverage: ["Regular cleanings", "Dental procedures", "Emergency care"],
      discount: "Up to 80% coverage"
    },
    {
      name: "RAMA",
      coverage: ["Preventive care", "Basic procedures", "Major procedures"],
      discount: "Up to 75% coverage"
    },
    {
      name: "RADIANT",
      coverage: ["Dental examinations", "X-rays", "Dental treatments"],
      discount: "Up to 70% coverage"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Insurance Partners
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with leading insurance providers to make quality dental care accessible and affordable.
          </p>
        </div>

        {/* Insurance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {insurancePartners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl 
                       transition-all duration-300 hover:-translate-y-1"
            >
              {/* Partner Logo Container */}
              <div className="h-24 flex items-center justify-center mb-6">
                <div className="w-32 h-32 bg-gray-200 rounded-xl flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-gray-400" />
                </div>
              </div>

              {/* Partner Name */}
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                {partner.name}
              </h3>

              {/* Coverage List */}
              <ul className="space-y-3 mb-6">
                {partner.coverage.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Discount Badge */}
              <div className="bg-blue-50 text-blue-700 py-2 px-4 rounded-full text-center font-semibold">
                {partner.discount}
              </div>
            </div>
          ))}
        </div>

        {/* Information Boxes */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* How to Use Insurance */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              How to Use Your Insurance
            </h3>
            <ul className="space-y-4">
              {[
                "Present your valid insurance card at reception",
                "We'll verify your coverage and benefits",
                "Get treatment with reduced out-of-pocket costs",
                "We handle all insurance paperwork for you"
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-600">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Information */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Additional Information
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                {`We're constantly working to expand our network of insurance partners to provide 
                better coverage options for our patients.`}
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-yellow-700">
                  {`Don't see your insurance provider listed? Contact us to discuss your coverage 
                  options and alternative payment plans.`}
                </p>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white 
                               py-3 px-6 rounded-xl font-semibold hover:shadow-lg 
                               transition-shadow duration-300">
                Contact Our Insurance Coordinator
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsurancePartnersSection;