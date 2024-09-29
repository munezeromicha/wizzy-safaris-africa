import { useLocation } from "react-router-dom";
import Layout from "../../Pages/Layout";
import img from "../../assets/Images/Masai.jpg";

function Header() {
  const location = useLocation();
  const getPageTitle = () => {
    const path = location.pathname.slice(1);

    switch (path) {
      case "":
        return "Home";
      case "about":
        return `About`;
      case "contact":
        return "Contact";
      case "travelInsight":
        return "TravelInsight";
      default:
        return path.charAt(0).toUpperCase() + path.slice(1);
    }
  };
  return (
    <div>
      <Layout />
      <section
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center pl-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            {getPageTitle()}
          </h2>
          <div className="flex space-x-4"></div>
        </div>
      </section>
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://wa.me/+250786384595"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-12 h-12"
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
