import React from 'react'
import NavAndHero from './components/Hero'
import AboutSection from './components/About'
import ServicesSection from './components/Service'
import InsurancePartnersSection from './components/Insurance'
import TeamSection from './components/Team'
import ContactAndFooter from './components/Contact'

const page = () => {
  return (
    <>
      <NavAndHero />
      <AboutSection />
      <ServicesSection />
      <InsurancePartnersSection />
      <TeamSection />
      <ContactAndFooter />
    </>
  )
}

export default page