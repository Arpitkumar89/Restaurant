import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYelp, FaTripadvisor } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill, BsClockFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      {/* 3D Animated Shape */}
      <div className="relative h-32 w-full overflow-hidden mb-12">
        <svg
          viewBox="0 0 500 200"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
            fill="#1F2937"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z;
                M0,100 C150,0 350,200 500,100 L500,00 L0,0 Z;
                M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z
              "
            />
          </path>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
            Enjoy 15% Off Your First Order!
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-amber-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <IoLocationSharp className="mt-1 mr-3 text-orange-500" />
                <span>123 Gourmet Street, Foodie City, FC 12345</span>
              </li>
              <li className="flex items-center">
                <BsTelephoneFill className="mr-3 text-orange-500" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="mr-3 text-orange-500" />
                <span>contact@restaurant.com</span>
              </li>
              <li className="flex items-center">
                <BsClockFill className="mr-3 text-orange-500" />
                <span>Open Daily: 10:00 AM – 11:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-amber-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Menu</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Gallery</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Testimonials</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-amber-400">Our Location</h3>
            <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179054!2d-73.98784492416495!3d40.74844097138989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689876543210!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-amber-400">Newsletter</h3>
            <p className="mb-4">Subscribe to get updates on special offers and events.</p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-amber-400 transition">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-white hover:text-amber-400 transition">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-white hover:text-amber-400 transition">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-white hover:text-amber-400 transition">
                  <FaYelp size={24} />
                </a>
                <a href="#" className="text-white hover:text-amber-400 transition">
                  <FaTripadvisor size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <h3 className="text-lg font-semibold mb-3 text-center text-amber-400">Payment Methods</h3>
          <div className="flex justify-center space-x-6">
            <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="UPI" className="h-8" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" alt="Visa" className="h-8" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="Mastercard" className="h-8" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196554.png" alt="Amex" className="h-8" />
            <img src="https://cdn-icons-png.flaticon.com/512/2489/2489077.png" alt="Cash on Delivery" className="h-8" />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Restaurant Name. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-amber-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;