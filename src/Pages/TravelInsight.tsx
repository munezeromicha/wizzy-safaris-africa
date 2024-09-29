import Footer from "../components/Footer/Footer"
import Header from "../components/Header/ComponentHeader"
import GridLayout from "../components/Insight/GridLayout"

function TravelInsight() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <GridLayout />
      <Footer />
    </div>
  )
}

export default TravelInsight