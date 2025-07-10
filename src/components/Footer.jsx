import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaClock } from 'react-icons/fa';
import { SiVisa, SiMastercard, SiPaytm } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Quick Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-amber-600 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-amber-400 transition">Home</a></li>
              <li><a href="/menu" className="hover:text-amber-400 transition">Menu</a></li>
              <li><a href="/about" className="hover:text-amber-400 transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-amber-400 transition">Contact</a></li>
              <li><a href="/reviews" className="hover:text-amber-400 transition">Reviews</a></li>
              <li><a href="/reservation" className="hover:text-amber-400 transition">Reservation</a></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-amber-600 pb-2">Opening Hours</h3>
            <div className="flex items-start mb-2">
              <FaClock className="mt-1 mr-2 text-amber-400" />
              <div>
                <p className="font-medium">Monday - Friday</p>
                <p>10:00 AM - 11:00 PM</p>
              </div>
            </div>
            <div className="flex items-start mb-2">
              <FaClock className="mt-1 mr-2 text-amber-400" />
              <div>
                <p className="font-medium">Saturday - Sunday</p>
                <p>9:00 AM - 12:00 AM</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaClock className="mt-1 mr-2 text-amber-400" />
              <div>
                <p className="font-medium">Delivery Hours</p>
                <p>11:00 AM - 10:30 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-amber-600 pb-2">Contact Us</h3>
            <div className="flex items-start mb-3">
              <FaPhone className="mt-1 mr-2 text-amber-400" />
              <a href="tel:+1234567890" className="hover:text-amber-400 transition">+1 (234) 567-890</a>
            </div>
            <div className="flex items-start mb-3">
              <FaEnvelope className="mt-1 mr-2 text-amber-400" />
              <a href="mailto:info@arpitsrestroo.com" className="hover:text-amber-400 transition">info@arpitsrestroo.com</a>
            </div>
            <div className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-2 text-amber-400" />
              <address className="not-italic">
                123 Food Street, Culinary District<br />
                Mumbai, India 400001
              </address>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-amber-600 pb-2">Stay Connected</h3>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="mb-2">Subscribe to our newsletter:</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-gray-800 text-white rounded-l focus:outline-none focus:ring-1 focus:ring-amber-400 w-full"
                />
                <button className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-r transition">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="mb-4">
              <p className="mb-2">Follow us:</p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-amber-400 transition">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-amber-400 transition">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-amber-400 transition">
                  <FaTwitter />
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-amber-400 transition">
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-6">
              <a 
                href="/reservation" 
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-full transition mb-2 w-full text-center"
              >
                Book a Table
              </a>
              <a 
                href="/order" 
                className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-full transition w-full text-center"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>

        {/* Location Map */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 border-b border-amber-600 pb-2"><FaMapMarkerAlt className="text-4xl text-amber-400  "/>Our Location</h3>
       <div className="bg-gray-800 rounded-lg overflow-hidden">
          {/* Map Section with Icon */}
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-center w-full">
                            
              {/* Embedded Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.6578471552384!2d76.66985527618796!3d30.53071269536689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc2e25466d5e7%3A0xf0bbb65fa7fca376!2sSwami%20Vivekanand%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1752058794591!5m2!1sen!2sin"
                width="100%"
                height="350"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
                className="w-full"
              ></iframe>

              {/* External Google Maps Link Below */}
              <div className="p-4">
                <a 
                  href="https://www.google.com/maps/place/Swami+Vivekanand+Institute+of+Engineering+%26+Technology/@30.5307127,76.6698553,17z" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-400 hover:underline text-sm inline-block"
                >
                  📍 View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Payment & Legal */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Payment Methods */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <SiVisa className="text-3xl text-gray-300" />
              <SiMastercard className="text-3xl text-gray-300" />
              <SiPaytm className="text-3xl text-gray-300" />
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-sm">
              <a href="/privacy" className="hover:text-amber-400 transition">Privacy Policy</a>
              <a href="/terms" className="hover:text-amber-400 transition">Terms & Conditions</a>
              <a href="/refund" className="hover:text-amber-400 transition">Refund Policy</a>
            </div>
          </div>

          {/* About & Copyright */}
          <div className="mt-6 text-center">
            <p className="text-amber-400 mb-2">Serving authentic Indian cuisine since 2010</p>
            <p className="text-gray-400 text-sm">
              © {currentYear} Arpit's Restroo. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;