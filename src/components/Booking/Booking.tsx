import React, { useState } from "react";
import imgbookingbg from "../../assets/Images/WhatsApp Image 2024-09-28 at 11.56.01_9f0d9e84.jpg";
import emailjs from "emailjs-com";

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    additionalInfo: "",
    place: "",
    vehicle: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      place: formData.place,
      vehicle: formData.vehicle,
      additionalInfo: formData.additionalInfo,
    };
    const serviceId = "service_zlxbkz5";
    const tamplate = "template_y7ozgds";
    const pub = "Pl8WXtMZkOa80fRGT";

    emailjs
      .send(
        serviceId, // EmailJS service ID
        tamplate, // EmailJS template ID
        templateParams, // Data to be sent
        pub // EmailJS public key (user ID)
      )
      .then(
        (response) => {
          console.log("Success!", response.status, response.text);
          alert("Booking submitted successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            additionalInfo: "",
            place: "",
            vehicle: "",
          });
        },
        (err) => {
          console.log("Failed...", err);
          alert("Error sending booking information. Please try again.");
        }
      );
  };

  return (
    <section
      className="bg-cover bg-center h-screen sm:h-auto sm:py-16"
      style={{ backgroundImage: `url(${imgbookingbg})` }}
    >
      <div className="flex justify-center items-center p-4 sm:p-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-lg w-full opacity-90"
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center text-gray-800">
            Booking
          </h2>

          <div className="mb-4 sm:mb-6">
            <label
              htmlFor="place"
              className="block text-sm font-medium text-gray-700"
            >
              Select Place <span className="text-red-500">*</span>
            </label>
            <select
              name="place"
              id="place"
              value={formData.place}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              required
            >
              <option value="">Select a place</option>
              <option value="AKAGERA">AKAGERA National park</option>
              <option value="NYUNGWE">NYUNGWE National park</option>
              <option value="VOLCANO">VOLCANO</option>
              <option value="musanze-cave">Musanze Cave</option>
              <option value="ellen-gorilla-campus">
                Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund
              </option>
              <option value="buhanga-eco-park">Buhanga Éco park</option>
              <option value="lake-kivu">Lake Kivu</option>
              <option value="nyandungu-eco-park">Nyandungu eco park</option>
              <option value="kigali-city-tours">Kigali city tours</option>
              <option value="ethnographic-museum">Ethnographic museum</option>
              <option value="genocide">Genocide memorial site</option>
            </select>
          </div>

          <div className="mb-4 sm:mb-6">
            <label
              htmlFor="vehicle"
              className="block text-sm font-medium text-gray-700"
            >
              Select Vehicle <span className="text-red-500">*</span>
            </label>
            <select
              name="vehicle"
              id="vehicle"
              value={formData.vehicle}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              required
            >
              <option value="">vehicle</option>
              <option value="safari-jeep">Safari Jeep</option>
              <option value="land-cruiser">Land Cruiser</option>
              <option value="minivan">Minivan</option>
              <option value="coaster-bus">Coaster Bus</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 sm:mb-6">
            <div className="col-span-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="col-span-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="col-span-1">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          <div className="mb-4 sm:mb-6">
            <label
              htmlFor="additionalInfo"
              className="block text-sm font-medium text-gray-700"
            >
              Additional Information
            </label>
            <textarea
              name="additionalInfo"
              id="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Write your message here..."
              rows={4}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-400 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;
