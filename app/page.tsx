import React from 'react'
import NavAndHero from './components/Hero'
import AboutSection from './components/About'
import ServicesSection from './components/Service'
import InsurancePartnersSection from './components/Insurance'
import TeamSection from './components/Team'
import ContactAndFooter from './components/Contact'

const page = () => {
  return (
    <div className='scrollbar-thin scroll-smooth scrollbar-thumb-blue-500 scrollbar-track-blue-100'>
      <NavAndHero />
      <AboutSection />
      <ServicesSection />
      <InsurancePartnersSection />
      <TeamSection />
      <ContactAndFooter />
    </div>
  )
}

export default page