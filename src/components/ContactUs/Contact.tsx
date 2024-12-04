import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactUs: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-12">Feel free to get in touch with us for any inquiries or questions!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-2xl text-yellow-500 mr-4" />
              <span className="text-lg text-gray-700">123 Adventure Lane, Kigali, Rwanda</span>
            </li>

            <li className="flex items-center">
              <FaEnvelope className="text-2xl text-yellow-500 mr-4" />
              <span className="text-lg text-gray-700">contact@travelrwanda.com</span>
            </li>

            <li className="flex items-center">
              <FaPhoneAlt className="text-2xl text-yellow-500 mr-4" />
              <span className="text-lg text-gray-700">+250 786 384 595</span>
            </li>
          </ul>


          <div className="mt-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-yellow-500"><FaFacebookF size={24} /></a>
              <a href="#" className="text-gray-700 hover:text-yellow-500"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-700 hover:text-yellow-500"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Location</h3>
          <div className="w-full h-[300px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.5179338418575!2d30.0983584156539!3d-1.944072634465642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d5ab74a672d383%3A0x1d3ebbdc02c4b812!2sAkagera%20National%20Park!5e0!3m2!1sen!2srw!4v1632938480375!5m2!1sen!2srw"
              width="100%"
              height="100%"
              allowFullScreen={false}
              loading="lazy"
              className="border-none w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
