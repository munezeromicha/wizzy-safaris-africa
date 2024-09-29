import ContactUs from "../components/ContactUs/Contact"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/ComponentHeader"

function Contact() {
  return (
    <div className="flex flex-col gap-10">
      <Header/>
      <ContactUs />
      <Footer/>
    </div>
  )
}

export default Contact