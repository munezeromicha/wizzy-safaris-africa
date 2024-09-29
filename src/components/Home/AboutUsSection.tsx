import img1 from "../../assets/Images/WhatsApp Image 2024-09-28 at 12.06.15_9d48ec76.jpg";
import img2 from "../../assets/Images/WhatsApp Image 2024-09-28 at 11.56.01_0ac431a0.jpg";

const AboutUsSection = () => {
  return (
    <section className="bg-[#fef5e6] p-10 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
      <div className="flex flex-col space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src={img1}
            alt="Tour Adventure"
            className="rounded-lg shadow-md w-3/4"
          />
        </div>
        <img
          src={img2}
          alt="Group Hiking"
          className="rounded-lg shadow-md w-1/2"
        />
      </div>
      <div className="md:w-3/4 space-y-4 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6d4625] p-2 tracking-wide">
          Empowering Accessible Adventures for All
        </h2>
        <p className="text-gray-700 text-left tracking-wide">
          Africa Wizzy Safaris is a leading travel company dedicated to creating
          unforgettable safari experiences across Africa, with a special focus
          on inclusivity for disabled travelers. Our mission is to break
          barriers and open the wonders of Africa's breathtaking landscapes,
          wildlife, and culture to everyone, regardless of physical limitations.
          We offer fully accessible safari packages that are carefully designed
          to meet the needs of individuals with mobility challenges. From
          wheelchair-friendly vehicles to accommodations with accessible
          facilities, every detail is taken into consideration to ensure comfort
          and safety without compromising the thrill of adventure. At Africa
          Wizzy Safaris, we believe that everyone deserves the opportunity to
          experience Africa's beauty and wildlife in a way that is seamless,
          enjoyable, and empowering. Whether it's a visit to the majestic
          Serengeti, a tour of the vibrant Maasai Mara, or a peaceful retreat in
          the heart of the African wilderness, our team is committed to
          delivering personalized, life-changing experiences for all travelers.
          Join us on a journey where the spirit of Africa meets accessibility.
          With Africa Wizzy Safaris, the wild is within reach for everyone.
        </p>
        <a
          href="#"
          className="inline-block bg-[#8b5c29] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#73471d] transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default AboutUsSection;
