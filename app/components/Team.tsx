import React from 'react';
import { Mail, Phone, Award, GraduationCap, Calendar } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Dental Surgeon",
      specialization: "Oral Surgery",
      experience: "12 years experience",
      education: "DDS - Harvard School of Dental Medicine",
      availability: "Mon - Fri"
    },
    {
      name: "Dr. Michael Chen",
      role: "Orthodontist",
      specialization: "Orthodontics",
      experience: "8 years experience",
      education: "DMD - University of Pennsylvania",
      availability: "Tue - Sat"
    },
    {
      name: "Dr. Emily Williams",
      role: "Prosthodontist",
      specialization: "Prosthetic Dentistry",
      experience: "10 years experience",
      education: "DDS - NYU College of Dentistry",
      availability: "Mon - Thu"
    },
    {
      name: "Dr. James Wilson",
      role: "Pediatric Dentist",
      specialization: "Children's Dentistry",
      experience: "6 years experience",
      education: "DMD - Boston University",
      availability: "Wed - Sun"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of highly qualified dental professionals is committed to providing 
            you with the best possible care and treatment.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg 
                         hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Member Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                <img
                  src="/team.jpg"
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-200">{member.role}</p>
                </div>
              </div>

              {/* Member Details */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Award className="w-5 h-5 text-blue-500" />
                  <span>{member.specialization}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <GraduationCap className="w-5 h-5 text-blue-500" />
                  <span>{member.education}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span>{member.availability}</span>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between">
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>Call</span>
                  </button>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Combined Experience", value: "35+ Years" },
            { label: "Satisfied Patients", value: "10,000+" },
            { label: "Dental Procedures", value: "15,000+" },
            { label: "Team Members", value: "15+" }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center 
                         shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 
                            bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-16 bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Join Our Growing Team
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
           {` We're always looking for talented dental professionals to join our team. 
            If you're passionate about providing excellent dental care, we'd love to hear from you.`}
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white 
                           py-3 px-8 rounded-xl font-semibold hover:shadow-lg 
                           transition-shadow duration-300">
            View Career Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;