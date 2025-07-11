import React from 'react';
import { FaLeaf, FaAward, FaUtensils, FaMapMarkerAlt, FaPhone, FaClock, FaInstagram, FaFacebook, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { restaurantExterior, chefPortrait, dish1, dish2, dish3, teamPhoto, customer1, customer2, customer3, kitchen, diningArea } from '../assets/Images';

const AboutUs = () => {
  // Timeline data
  const milestones = [
    { year: '2010', event: 'Founded as a small family bistro' },
    { year: '2014', event: 'Featured in "Top 10 New Restaurants" by Food Magazine' },
    { year: '2017', event: 'Expanded to current location with 50 seats' },
    { year: '2020', event: 'Awarded Michelin Star for culinary excellence' },
    { year: '2023', event: 'Launched sustainable farm-to-table initiative' },
  ];

  // Awards data
  const awards = [
    { name: 'Michelin Star', year: '2020' },
    { name: 'Best Fine Dining', year: '2021' },
    { name: 'Top 10 Restaurants', year: '2022' },
    { name: 'Sustainability Award', year: '2023' },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "The most memorable dining experience I've had. Every dish tells a story!",
      author: "Sarah Johnson",
      role: "Food Critic",
      image: {customer1}
    },
    {
      quote: "Our go-to spot for anniversary dinners. The ambiance and flavors are perfect.",
      author: "Michael & Lisa Chen",
      role: "Regular Customers",
      image: {customer2}
    },
    {
      quote: "As a chef myself, I truly appreciate the technique and passion in every plate.",
      author: "Carlos Mendez",
      role: "Executive Chef",
      image: {customer3 }
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src={restaurantExterior } 
          alt="Restaurant exterior" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div 
          className="relative z-20 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">Our Story</h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
            A culinary journey that began with passion and grew into an unforgettable dining experience
          </p>
        </motion.div>
      </section>

      {/* 1. Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How We Started</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010 by Chef Marco Bellini, our restaurant began as a small 20-seat bistro with a simple mission: to create extraordinary dining experiences using the freshest local ingredients.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              What started as a passion project quickly gained recognition for our innovative approach to traditional recipes, earning us a loyal following and critical acclaim.
            </p>
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Chef Marco's Vision</h3>
              <p className="text-gray-700">
                "Food should tell a story - of the land, the people, and the traditions. Every dish we create is a chapter in our culinary narrative."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-amber-100 w-full h-[400px] rounded-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-full h-[400px] border-2 border-amber-300 rounded-2xl overflow-hidden">
              <img 
                src={teamPhoto} 
                alt="Our team in the kitchen" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-amber-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`md:w-1/2 p-4 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="inline-block bg-amber-600 text-white px-4 py-2 rounded-full mb-2">
                      {milestone.year}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">{milestone.event}</h4>
                  </div>
                  <div className="hidden md:block w-1/2"></div>
                  <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-600 rounded-full border-4 border-white"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Cuisine Specialty */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Culinary Philosophy</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-amber-600 text-4xl mb-4">
                <FaUtensils />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mediterranean Fusion</h3>
              <p className="text-gray-600">
                We blend traditional Mediterranean flavors with modern techniques, creating dishes that are both familiar and excitingly new.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-amber-600 text-4xl mb-4">
                <FaLeaf />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Farm-to-Table</h3>
              <p className="text-gray-600">
                We partner with local farmers and producers to bring you the freshest seasonal ingredients, often harvested just hours before serving.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-amber-600 text-4xl mb-4">
                <FaAward />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Signature Dishes</h3>
              <p className="text-gray-600">
                Try our famous Truffle Risotto, Seafood Linguine, and Chocolate Soufflé - dishes that have become synonymous with our name.
              </p>
            </motion.div>
          </div>

          {/* Dish Gallery */}
          <div className="mt-16">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                }
              }}
              className="rounded-xl overflow-hidden"
            >
              <SwiperSlide>
                <div className="relative h-80 overflow-hidden rounded-xl">
                  <img src={dish1} alt="Signature dish 1" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-white font-semibold text-lg">Truffle Risotto</h4>
                    <p className="text-amber-200">Our most requested dish</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-80 overflow-hidden rounded-xl">
                  <img src={dish2} alt="Signature dish 2" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-white font-semibold text-lg">Seafood Linguine</h4>
                    <p className="text-amber-200">Fresh catch of the day</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-80 overflow-hidden rounded-xl">
                  <img src={dish3} alt="Signature dish 3" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-white font-semibold text-lg">Chocolate Soufflé</h4>
                    <p className="text-amber-200">A perfect ending</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* 3. Mission & Values */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-xl text-amber-200 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-300">
                We never compromise on ingredients or preparation, ensuring every dish meets our exacting standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-300">
                We're committed to eco-friendly practices, from sourcing to waste reduction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Happiness</h3>
              <p className="text-gray-300">
                Every guest is treated like family, with personalized attention to create memorable experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-300">
                We actively support local initiatives and believe in giving back to our neighborhood.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Awards & Recognition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
              >
                <div className="text-amber-500 text-4xl mb-4">
                  <FaAward />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{award.name}</h3>
                <p className="text-gray-500">{award.year}</p>
              </motion.div>
            ))}
          </div>

          {/* Press Mentions */}
          <div className="mt-16 bg-amber-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-center mb-8">Featured In</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center text-gray-400 text-2xl font-serif italic">Food & Wine</div>
              <div className="text-center text-gray-400 text-2xl font-serif italic">Michelin Guide</div>
              <div className="text-center text-gray-400 text-2xl font-serif italic">Gourmet Today</div>
              <div className="text-center text-gray-400 text-2xl font-serif italic">Culinary Arts</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Ambiance & Experience */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Ambiance</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Where every detail creates a memorable atmosphere
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dining Environment</h3>
                <p className="text-gray-600 mb-6">
                  Our space blends modern elegance with rustic charm, featuring warm wood tones, soft lighting, and an open kitchen where you can watch our chefs at work.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Intimate 50-seat dining room</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Seasonal outdoor patio seating</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Live acoustic music on weekends</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Private dining room for special events</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="rounded-xl overflow-hidden h-48">
                <img src={diningArea} alt="Dining area" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden h-48">
                <img src={kitchen} alt="Open kitchen" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden h-48 col-span-2">
                <img src={restaurantExterior} alt="Outdoor seating" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Chef Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Chef</h2>
              <p className="text-lg text-gray-600 mb-6">
                Chef Marco Bellini brings over 20 years of culinary expertise to our kitchen. Trained in Milan and having worked in Michelin-starred restaurants across Europe, he combines traditional techniques with innovative approaches.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                "My philosophy is simple: respect the ingredients, honor the traditions, and always push the boundaries of flavor. Every plate should tell a story."
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Italian Cuisine</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Farm-to-Table</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Seasonal Menus</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 relative"
            >
              <div className="bg-amber-100 w-full h-[500px] rounded-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-full h-[500px] border-2 border-amber-300 rounded-2xl overflow-hidden">
                <img 
                  src={chefPortrait} 
                  alt="Chef Marco Bellini" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Location & Reach */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
            <p className="text-xl text-amber-200 max-w-2xl mx-auto">
              Visit our restaurant or enjoy our food at home
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800 p-8 rounded-xl h-full">
                <h3 className="text-2xl font-semibold mb-6">Location</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-amber-500 mr-4 mt-1">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-300">123 Culinary Avenue, Food District, Milan 20100</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-amber-500 mr-4 mt-1">
                      <FaPhone size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Reservations</h4>
                      <p className="text-gray-300">+39 02 1234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-amber-500 mr-4 mt-1">
                      <FaClock size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Hours</h4>
                      <p className="text-gray-300">
                        <span className="block">Tuesday - Thursday: 6PM - 10PM</span>
                        <span className="block">Friday - Saturday: 5:30PM - 11PM</span>
                        <span className="block">Sunday: 5PM - 9PM</span>
                        <span className="block">Monday: Closed</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl overflow-hidden h-full"
            >
              {/* Map placeholder - replace with actual map component */}
              <div className="h-full w-full bg-gray-700 flex items-center justify-center">
                <div className="text-center w-full h-full p-8">
          
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.6578471552384!2d76.66985527618796!3d30.53071269536689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc2e25466d5e7%3A0xf0bbb65fa7fca376!2sSwami%20Vivekanand%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1752058794591!5m2!1sen!2sin"
                   width="600" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map Location" className='h-full w-full' ></iframe>
                  <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition">
                    <a href="https://www.google.com/maps/place/Swami+Vivekanand+Institute+of+Engineering+%26+Technology/@30.5307127,76.6698553,17z" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-800 text-lg" > 
                  Get Directions </a>

                    
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Delivery Partners */}
          <div className="mt-16 bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-center mb-8">Delivery Partners</h3>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-white p-4 rounded-lg w-32 h-20 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-800">Zomato</span>
              </div>
              <div className="bg-white p-4 rounded-lg w-32 h-20 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-800">Swiggy</span>
              </div>
              <div className="bg-white p-4 rounded-lg w-32 h-20 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-800">Uber Eats</span>
              </div>
              <div className="bg-white p-4 rounded-lg w-32 h-20 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-800">Deliveroo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Behind the Scenes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse into our world
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[kitchen, diningArea, dish1, dish2, dish3, teamPhoto].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl aspect-square"
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Video Tour */}
          <div className="mt-16 bg-gray-100 rounded-2xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-black">
              {/* Video placeholder - replace with actual video component */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 mx-auto text-amber-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-2xl font-semibold mb-2">Restaurant Tour</h3>
                  <p className="text-gray-600 mb-4">Video would appear here</p>
                  <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition">
                    Play Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              }
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg h-full"
                >
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 mr-4">
                      <img 
                        src={kitchen} 
                        alt={testimonial.author} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-5 h-5" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic">
                    "{testimonial.quote}"
                  </blockquote>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 10. Sustainability */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Commitment to Sustainability</h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe great food shouldn't come at the expense of our planet. That's why we've implemented comprehensive sustainability initiatives throughout our operations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <FaLeaf className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Eco-Friendly Packaging</h4>
                    <p className="text-gray-600">100% compostable containers for takeout and delivery</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <FaLeaf className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Zero Waste Kitchen</h4>
                    <p className="text-gray-600">Comprehensive composting and recycling program</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <FaLeaf className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Support</h4>
                    <p className="text-gray-600">Weekly donations to local food banks and shelters</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-2xl p-8"
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainability in Numbers</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-100 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-green-700 mb-2">95%</div>
                    <div className="text-sm text-green-800">Locally sourced ingredients</div>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-green-700 mb-2">100%</div>
                    <div className="text-sm text-green-800">Compostable packaging</div>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-green-700 mb-2">2,500+</div>
                    <div className="text-sm text-green-800">Meals donated monthly</div>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-green-700 mb-2">80%</div>
                    <div className="text-sm text-green-800">Waste diverted from landfill</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;