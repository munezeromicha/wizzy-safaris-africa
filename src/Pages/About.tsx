import CommitmentSection from "../components/About/CommitmentSection"
import HeroSection from "../components/About/HeroSection"
import WhyChooseUs from "../components/About/WhyChooseUs"
import WizzExperience from "../components/About/WizzExperience"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/ComponentHeader"
import VisionSection from "../components/About/VisionSection"

function About() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <VisionSection/>
      <WizzExperience />
      <CommitmentSection />
      <HeroSection />
      <WhyChooseUs />
      <Footer />
    </div>
  )
}

export default About