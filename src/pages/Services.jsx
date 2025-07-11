import React from "react";
import { FaMobileAlt, FaCreditCard, FaTruck, FaStar, FaConciergeBell, FaHeadset, FaUtensils, FaGift, FaQrcode, FaCog } from "react-icons/fa";

const features = [
  {
    icon: <FaUtensils />, title: "Online Menu",
    desc: "Visually appealing menus with categories, ingredients, and allergen info."
  },
  {
    icon: <FaTruck />, title: "Fast Delivery",
    desc: "Track live orders, contactless options, and fast delivery."
  },
  {
    icon: <FaMobileAlt />, title: "One-Tap Ordering",
    desc: "Mobile-optimized ordering with favorites and reordering support."
  },
  {
    icon: <FaConciergeBell />, title: "Chef's Specials",
    desc: "Seasonal dishes, banners, and daily offers to engage customers."
  },
  {
    icon: <FaStar />, title: "Reviews & Ratings",
    desc: "Ratings, photo reviews, and feedback per dish."
  },
  {
    icon: <FaCreditCard />, title: "Multiple Payments",
    desc: "Cards, UPI, wallets, COD and secure payment gateways."
  },
  {
    icon: <FaGift />, title: "Loyalty & Rewards",
    desc: "Points, coupons, first-order offers, and referral bonuses."
  },
  {
    icon: <FaQrcode />, title: "Takeaway & Dine-In",
    desc: "Reserve tables, pickup options and QR code menus."
  },
  {
    icon: <FaCog />, title: "Order Customization",
    desc: "Customize dishes, toppings, spice levels and instructions."
  },
  {
    icon: <FaHeadset />, title: "Customer Support",
    desc: "Chat, WhatsApp, FAQ, and refund support."
  }
];

const ServicePage = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 py-16 px-6">
      {/* SVG Blob Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <svg className="w-[150%] h-[150%] animate-spin-slow opacity-10" view="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FDBA74" d="M43.6,-70.1C56.7,-60.2,67.6,-47.8,75,-33.5C82.4,-19.2,86.4,-3,81.8,10.6C77.1,24.2,63.8,35.1,50.4,46.6C37,58.1,23.5,70.2,7.8,72.9C-8,75.5,-25.9,68.7,-39.7,58.3C-53.5,48,-63.1,34.1,-67.8,18.9C-72.6,3.6,-72.6,-12.9,-66.5,-26.8C-60.4,-40.6,-48.2,-51.7,-35.1,-62.6C-22,-73.5,-11,-84.1,2.4,-87.9C15.7,-91.6,31.3,-88.4,43.6,-70.1Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600 uppercase tracking-wide mb-4">Our Key Services</h2>
          <p className="text-lg md:text-xl text-gray-700">Making every bite better — features built for comfort, speed, and satisfaction.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-3xl shadow-xl transform transition-all">
              <div className="text-4xl text-orange-500 mb-4 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
