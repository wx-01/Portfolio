import React from 'react'
import ThemeToggle from '../component/ThemeToggle'
import StarBackground from '../component/StarBackground'
import Navbar from '../component/Navbar'
import HeroSection from '../component/HeroSection'
import AboutSection from '../component/AboutSection'
import SkillsSection from '../component/SkillsSection'
import ProjectSection from '../component/ProjectSection'
import ContactSection from '../component/ContactSection'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden' >
          {/* theme toggle */}
          <ThemeToggle />
          {/* background effects */}
         <StarBackground />
          {/* navbar */}
         <Navbar />
          {/* main content */}
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
          </main>

          {/* footer */}
          <Footer />
    </div>
  )
}

export default Home