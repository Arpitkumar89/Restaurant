import React, { useState, useEffect } from 'react';
import { FaUtensils, FaChevronLeft, FaChevronRight, FaHeart, FaStar, FaShareAlt, FaShoppingCart, FaTimes } from "react-icons/fa";
import { GiMeal, GiForkKnifeSpoon, GiSodaCan } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";
import { motion } from 'framer-motion';

// Import your images here (replace with your actual imports)
import wts1 from './assets/Wts1.png';
import wts3 from './assets/Wts3.png';
import Bannervideo from './assets/Bannervideo.mp4';
import Bannerfood from './assets/Bannerfood.png';
import BannerSmall1 from './assets/Bannersmall1.png';
import BannerSmall2 from './assets/Bannersmall2.png';
import BannerSmall3 from './assets/Bannersmall3.png';
import wws1 from "./assets/wws1.png";
import wws2 from "./assets/wws2.png";
import wws3 from "./assets/wws3.png";
import burger1 from "./assets/burger1.png";
import burger2 from "./assets/burger2.png";
import pizza1 from "./assets/pizza1.png";
import pizza2 from "./assets/pizza2.png";
import cupcake1 from "./assets/cupcake1.png";
import cupcake2 from "./assets/cupcake2.png";
import icecream1 from "./assets/icecream1.png";
import icecream2 from "./assets/icecream2.png";
import {useNavigate } from 'react-router-dom';

const Home = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentServiceSlide, setCurrentServiceSlide] = useState(0);
    const [showOrderModal, setShowOrderModal] = useState(false);
    const [selectedOrderItem, setSelectedOrderItem] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    
    // Auto slider effect for trending items
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % trendingItems.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    
    // Auto slider effect for services
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentServiceSlide((prev) => (prev + 1) % services.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const services = [
        {
            img: wws1,
            title: 'One-Tap Ordering 📲',
            text: 'Skip the hassle! With just one tap, your cravings are on their way to your doorstep!',
        },
        {
            img: wws2,
            title: 'Flash-Speed Delivery ⚡',
            text: "We don't just deliver food, we deliver happiness—hot & fresh, faster than ever!",
        },
        {
            img: wws3,
            title: 'Five-Star Quality ⭐',
            text: 'Every bite is a masterpiece! Only the best ingredients for an unforgettable experience.',
        },
    ];

    const menuItems = [
        { name: "Burger", price: 25.0, icon: "🍔", image1: burger1, image2: burger2 },
        { name: "Pizza", price: 110.0, icon: "🍕", image1: pizza1, image2: pizza2 },
        { name: "Cupcake", price: 50.0, icon: "🧁", image1: cupcake1, image2: cupcake2 },
        { name: "Ice Cream", price: 20.0, icon: "🍦", image1: icecream1, image2: icecream2 },
    ];

    const [selectedItem, setSelectedItem] = useState(menuItems[0]);

    // Trending and popular items data
    const trendingItems = [
        {
            id: 1,
            name: "Spicy Chicken Burger",
            description: "Juicy chicken with spicy mayo, lettuce, and cheese",
            price: 12.99,
            image: burger1,
            category: "burger",
            rating: 4.8,
            reviews: 245,
            tags: ["🔥 Trending", "⭐ Customer Favorite"],
            dietary: ["🥩 Non-Vegetarian", "🌾 Gluten-Free"],
        },
        {
            id: 2,
            name: "Margherita Pizza",
            description: "Classic pizza with tomato sauce, mozzarella, and basil",
            price: 14.99,
            image: pizza1,
            category: "pizza",
            rating: 4.7,
            reviews: 189,
            tags: ["⭐ Customer Favorite"],
            dietary: ["🌱 Vegetarian", "🧈 Contains Dairy"],
        },
        {
            id: 3,
            name: "Chocolate Cupcake",
            description: "Rich chocolate cupcake with creamy frosting",
            price: 4.99,
            image: cupcake1,
            category: "dessert",
            rating: 4.9,
            reviews: 132,
            tags: ["🔥 Trending"],
            dietary: ["🌱 Vegetarian", "🧈 Contains Dairy"],
        },
        {
            id: 4,
            name: "Vanilla Ice Cream",
            description: "Creamy vanilla ice cream with chocolate chips",
            price: 3.99,
            image: icecream1,
            category: "dessert",
            rating: 4.5,
            reviews: 98,
            tags: [],
            dietary: ["🌱 Vegetarian", "🧈 Contains Dairy"],
        },
    ];

    const comboOffers = [
        {
            name: "Burger Combo",
            description: "Burger + Fries + Drink",
            price: 15.99,
            originalPrice: 19.99,
            image: burger2,
        },
        {
            name: "Pizza Combo",
            description: "Pizza + Garlic Bread + Drink",
            price: 18.99,
            originalPrice: 23.99,
            image: pizza2,
        },
    ];

    const categories = [
        { id: 'all', name: 'All Items', icon: <IoFastFood className="text-xl" /> },
        { id: 'burger', name: 'Burgers', icon: <GiForkKnifeSpoon className="text-xl" /> },
        { id: 'pizza', name: 'Pizzas', icon: <GiMeal className="text-xl" /> },
        { id: 'dessert', name: 'Desserts', icon: <GiSodaCan className="text-xl" /> },
    ];

    const filteredItems = activeCategory === 'all' 
        ? trendingItems 
        : trendingItems.filter(item => item.category === activeCategory);

    const handleShare = async (item) => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: `Check out ${item.name} from The Crispy Corner`,
                    text: `${item.name} - ${item.description}`,
                    url: window.location.href,
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                const shareUrl = `whatsapp://send?text=Check out ${item.name} from The Crispy Corner: ${window.location.href}`;
                window.open(shareUrl, '_blank');
            }
        } catch (error) {
            console.log('Error sharing:', error);
        }
    };

    const handleAddToCart = (item) => {
        setCartItems([...cartItems, item]);
        setSelectedOrderItem(item);
        setShowOrderModal(true);
    };

    const handleOrderNow = (item) => {
        setSelectedOrderItem(item);
        setShowOrderModal(true);
    };

    const navigate=useNavigate()

    const handleOrder = () => {
        // Optional: Pass item details to checkout page
        navigate('/order');

        // Scroll to top (optional, React Router usually handles this)
        window.scrollTo(0, 0);
        };
    
    const handleMenu=()=>{
        navigate('/menu')
        window.scrollTo(0, 0);
    }

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="bg-white pt-12 md:pt-24 min-h-[500px] flex items-center relative">
                    {/* 3D Blob Background */}
                    <motion.div 
                        className="absolute -z-10 right-0 top-0 w-[700px] h-[700px] opacity-20"
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <path fill="#f97316" d="M38.1,-57.7C50.1,-51.1,62.1,-43.1,69.1,-31.6C76.1,-20.1,78,-5.1,73.2,7.7C68.3,20.4,56.7,30.8,46.5,42.8C36.4,54.8,27.6,68.3,14.6,73.2C1.7,78.1,-15.4,74.4,-27.1,65.3C-38.8,56.2,-45.1,41.6,-54.4,27.9C-63.6,14.2,-75.7,1.5,-77.3,-12.6C-79,-26.7,-70.3,-42.1,-57.5,-51.3C-44.7,-60.5,-27.8,-63.6,-13.1,-65.5C1.6,-67.5,18.3,-68.2,38.1,-57.7Z" transform="translate(100 100)" />
                        </svg>
                    </motion.div>

                    <div className="container mx-auto px-6 md:px-12 xl:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="w-full lg:w-1/2 flex flex-col justify-center">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-600 mb-2 md:mb-3">
                                The Crispy Corner
                            </h3>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                                Claim Best Offer On <br />
                                <span className="text-orange-600">Fast Food</span> <br className="hidden md:block" />
                                & <span className="text-yellow-500">Restaurants</span>
                            </h1>
                            <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6">
                                Our job is to fill your tummy with delicious food <br className="hidden sm:block" />
                                and with fast and free delivery.
                            </p>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                <button
                                    onClick={() => setShowVideo(true)}
                                    className="bg-red-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-red-600 transition hover:scale-105 text-sm md:text-base"
                                >
                                    Get Started
                                </button>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                                <div className="flex -space-x-3">
                                    <img src={BannerSmall1} alt="customer" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md" />
                                    <img src={BannerSmall2} alt="customer" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md" />
                                    <img src={BannerSmall3} alt="customer" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md" />
                                </div>
                                <div>
                                    <p className="text-lg md:text-xl font-bold flex items-center">
                                        <span className="text-yellow-500 mr-2">★★★★★</span>5.58k
                                    </p>
                                    <p className="text-gray-600 text-sm md:text-base">Our Happy Customers</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 flex items-center justify-center">
                            <motion.div 
                                className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none w-full"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <img
                                    src={Bannerfood}
                                    alt="Banner Food"
                                    className="w-full h-auto object-cover rounded-3xl shadow-2xl"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="relative w-full min-h-screen bg-gradient-to-r from-red-50 to-yellow-50 px-4 sm:px-6 lg:px-20 py-12 md:py-20 overflow-hidden">
                <motion.div 
                    className="absolute -top-20 -left-32 w-[500px] h-[500px] opacity-10 -z-10"
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path fill="#f97316" d="M38.1,-57.7C50.1,-51.1,62.1,-43.1,69.1,-31.6C76.1,-20.1,78,-5.1,73.2,7.7C68.3,20.4,56.7,30.8,46.5,42.8C36.4,54.8,27.6,68.3,14.6,73.2C1.7,78.1,-15.4,74.4,-27.1,65.3C-38.8,56.2,-45.1,41.6,-54.4,27.9C-63.6,14.2,-75.7,1.5,-77.3,-12.6C-79,-26.7,-70.3,-42.1,-57.5,-51.3C-44.7,-60.5,-27.8,-63.6,-13.1,-65.5C1.6,-67.5,18.3,-68.2,38.1,-57.7Z" transform="translate(100 100)" />
                    </svg>
                </motion.div>

                <div className="mx-auto text-center max-w-7xl">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 uppercase tracking-widest mb-3">
                        What We Serve
                    </h2>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8 md:mb-12">
                        Delicious Delivered, <br className="hidden sm:block" />
                        Just The Way You Love! 🍕🚀
                    </h1>

                    {/* Auto-sliding services cards */}
                    <div className="relative h-[400px] sm:h-[450px] md:h-[400px] lg:h-[450px] xl:h-[500px] w-full overflow-hidden rounded-xl mb-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${index === currentServiceSlide ? 'opacity-100' : 'opacity-0'}`}
                                initial={{ opacity: 0 }}
                                animate={{ 
                                    opacity: index === currentServiceSlide ? 1 : 0,
                                    x: index === currentServiceSlide ? 0 : (index > currentServiceSlide ? 100 : -100)
                                }}
                                transition={{ duration: 1 }}
                            >
                                <div className="group relative bg-white rounded-xl p-6 shadow-lg w-full max-w-md mx-auto">
                                    <div className="overflow-hidden rounded-lg">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-full h-48 sm:h-56 md:h-48 lg:h-56 xl:h-64 object-contain group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-500 mt-4 sm:mt-6">
                                        {service.title}
                                    </h3>
                                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-2 sm:mt-3 px-2 sm:px-0">
                                        {service.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentServiceSlide(index)}
                                    className={`w-3 h-3 rounded-full ${index === currentServiceSlide ? 'bg-orange-500' : 'bg-gray-300'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Manual navigation buttons for mobile */}
                    <div className="flex justify-center gap-4 md:hidden">
                        <button 
                            onClick={() => setCurrentServiceSlide((prev) => (prev - 1 + services.length) % services.length)}
                            className="p-2 bg-orange-500 text-white rounded-full"
                        >
                            <FaChevronLeft />
                        </button>
                        <button 
                            onClick={() => setCurrentServiceSlide((prev) => (prev + 1) % services.length)}
                            className="p-2 bg-orange-500 text-white rounded-full"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </section>

            {/* Trending Dishes Section */}
            <section className="py-16 bg-gradient-to-b from-orange-50 to-amber-50 relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Our Signature Dishes
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover our most popular and chef's special items that customers love
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex bg-white rounded-full p-1 shadow-md">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${activeCategory === category.id ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-orange-100'}`}
                                >
                                    {category.icon}
                                    <span>{category.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Trending Items Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {filteredItems.map((item) => (
                            <motion.div 
                                key={item.id}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div className="relative">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        {item.tags.map((tag, index) => (
                                            <span 
                                                key={index}
                                                className={`px-2 py-1 text-xs font-bold rounded-full ${tag.includes('🔥') ? 'bg-red-500 text-white' : 'bg-yellow-400 text-gray-800'}`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                                        <FaHeart className="text-red-500" />
                                    </button>
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                                        <span className="text-lg font-bold text-orange-600">${item.price}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                                    
                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {item.dietary.map((diet, index) => (
                                            <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                                {diet}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <FaStar className="text-yellow-400 mr-1" />
                                            <span className="text-sm font-medium">{item.rating}</span>
                                            <span className="text-xs text-gray-500 ml-1">({item.reviews})</span>
                                        </div>
                                        <button 
                                            onClick={() => handleOrderNow(item)}
                                            className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm hover:bg-orange-600 transition flex items-center gap-1"
                                        >
                                            <FaShoppingCart size={14} />
                                            Order
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Special Combos */}
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Special Combos</h3>
                        <p className="text-gray-600 mb-6">Save more with our specially curated meal combos</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {comboOffers.map((combo, index) => (
                            <motion.div 
                                key={index}
                                className="bg-gradient-to-r from-orange-400 to-red-500 rounded-xl p-6 text-white shadow-lg"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex flex-col md:flex-row items-center gap-6">
                                    <div className="w-full md:w-1/3">
                                        <img 
                                            src={combo.image} 
                                            alt={combo.name} 
                                            className="w-full h-40 object-contain"
                                        />
                                    </div>
                                    <div className="w-full md:w-2/3">
                                        <h3 className="text-xl font-bold mb-2">{combo.name}</h3>
                                        <p className="mb-4">{combo.description}</p>
                                        <div className="flex items-center gap-4">
                                            <span className="text-2xl font-bold">${combo.price}</span>
                                            <span className="line-through text-orange-200">${combo.originalPrice}</span>
                                            <span className="bg-white text-orange-500 px-3 py-1 rounded-full text-sm font-bold">
                                                Save ${(combo.originalPrice - combo.price).toFixed(2)}
                                            </span>
                                        </div>
                                        <button 
                                            onClick={() => handleOrderNow(combo)}
                                            className="mt-4 bg-white text-orange-500 px-4 py-2 rounded-full font-bold hover:bg-gray-100 transition"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Auto Slider */}
                    <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden mb-12">
                        {trendingItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className={`absolute inset-0 bg-gray-800 flex items-center justify-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: index === currentSlide ? 1 : 0 }}
                                transition={{ duration: 1 }}
                            >
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                                />
                                <div className="relative z-10 text-center p-6 text-white max-w-2xl">
                                    <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">
                                        🔥 Trending Now
                                    </span>
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{item.name}</h3>
                                    <p className="text-lg mb-6">{item.description}</p>
                                    <button 
                                        onClick={handleOrder}
                                        className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition"
                                    >
                                        Order Now - ${item.price}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                            {trendingItems.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to satisfy your cravings?</h3>
                        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                            Explore our full menu and discover more delicious options
                        </p>
                        <button  onClick={handleMenu}
                        className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-600 transition shadow-lg hover:shadow-xl">
                            Explore Full Menu
                        </button>
                    </div>
                </div>
            </section>

            {/* Menu Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-12 px-4 sm:px-6 md:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-4 overflow-hidden">
                <motion.div 
                    className="absolute -top-32 -left-32 w-[500px] h-[500px] opacity-20 -z-10"
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 50,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill="#f59e0b"
                            d="M38.1,-57.7C50.1,-51.1,62.1,-43.1,69.1,-31.6C76.1,-20.1,78,-5.1,73.2,7.7C68.3,20.4,56.7,30.8,46.5,42.8C36.4,54.8,27.6,68.3,14.6,73.2C1.7,78.1,-15.4,74.4,-27.1,65.3C-38.8,56.2,-45.1,41.6,-54.4,27.9C-63.6,14.2,-75.7,1.5,-77.3,-12.6C-79,-26.7,-70.3,-42.1,-57.5,-51.3C-44.7,-60.5,-27.8,-63.6,-13.1,-65.5C1.6,-67.5,18.3,-68.2,38.1,-57.7Z"
                            transform="translate(100 100)"
                        />
                    </svg>
                </motion.div>

                {/* Left Sidebar */}
                <div className="w-full md:w-3/4 lg:w-1/4 bg-white p-4 md:p-6 rounded-3xl shadow-lg border border-amber-300">
                    <h1 className="text-3xl md:text-4xl font-pacifico text-amber-600 mb-4 md:mb-6 uppercase text-center">
                        Our Menu
                    </h1>
                    <p className="text-base md:text-lg font-comfortaa text-amber-700 italic mb-4 md:mb-6 text-center">
                        Menu That Always <br /> Makes You Fall In Love
                    </p>
                    <div className="space-y-3 md:space-y-4">
                        {menuItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedItem(item)}
                                className={`flex items-center justify-between w-full p-2 md:p-3 rounded-2xl transition-all duration-300 shadow-md border ${
                                    selectedItem.name === item.name
                                        ? "bg-amber-600 text-white border-amber-600"
                                        : "bg-white text-gray-800 border-amber-300 hover:bg-amber-500 hover:text-white"
                                }`}
                            >
                                <div className="flex items-center space-x-2 md:space-x-3">
                                    <div
                                        className={`w-10 h-10 md:w-12 flex items-center justify-center rounded-full shadow-md transition-all duration-300 transform ${
                                            selectedItem.name === item.name
                                                ? "bg-gradient-to-r from-yellow-400 to-orange-500 scale-110 text-white"
                                                : "bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 hover:scale-110"
                                        }`}
                                    >
                                        <span className="text-lg md:text-xl">{item.icon}</span>
                                    </div>
                                    <h3 className="text-sm md:text-base font-semibold">{item.name}</h3>
                                </div>
                                <span className="text-sm md:text-base font-bold">${item.price}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Side Display */}
                <div className="w-full lg:w-3/4 flex flex-col items-center">
                    <div className="relative flex flex-col md:flex-row gap-4 md:gap-6">
                        <motion.div 
                            className="p-2 md:p-4 rounded-3xl"
                            whileHover={{ scale: 1.02 }}
                        >
                            <img
                                src={selectedItem.image1}
                                alt={`${selectedItem.name} 1`}
                                className="w-full md:w-[400px] lg:w-[450px] h-auto object-cover rounded-xl shadow-lg"
                            />
                        </motion.div>

                        <motion.div 
                            className="p-2 md:p-4 rounded-3xl"
                            whileHover={{ scale: 1.02 }}
                        >
                            <img
                                src={selectedItem.image2}
                                alt={`${selectedItem.name} 2`}
                                className="w-full md:w-[400px] lg:w-[460px] h-auto object-cover rounded-xl shadow-lg"
                            />
                        </motion.div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mt-4 md:mt-6 text-gray-800">
                        {selectedItem.name}
                    </h2>
                    <p className="text-xl md:text-2xl font-semibold text-amber-600">
                        ${selectedItem.price}
                    </p>

                    {/* Navigation Buttons */}
                    <div className="mt-4 md:mt-6 flex gap-3 md:gap-4 lg:gap-6">
                        <button
                            onClick={() => {
                                const currentIndex = menuItems.findIndex(
                                    (item) => item.name === selectedItem.name
                                );
                                setSelectedItem(
                                    menuItems[(currentIndex - 1 + menuItems.length) % menuItems.length]
                                );
                            }}
                            className="p-2 md:p-3 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-500 transition"
                        >
                            <FaChevronLeft size={18} />
                        </button>
                        <button
                            onClick={() => {
                                const currentIndex = menuItems.findIndex(
                                    (item) => item.name === selectedItem.name
                                );
                                setSelectedItem(menuItems[(currentIndex + 1) % menuItems.length]);
                            }}
                            className="p-2 md:p-3 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-500 transition"
                        >
                            <FaChevronRight size={18} />
                        </button>
                    </div>

                    {/* Action Icons */}
                    <div className="mt-4 md:mt-6 flex items-center space-x-3 md:space-x-4 lg:space-x-6">
                        <motion.div 
                            className="flex items-center justify-center p-2 md:p-3 bg-white rounded-full shadow-xl"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaHeart className="text-red-500" size={20} />
                        </motion.div>
                        <motion.div 
                            className="flex items-center justify-center p-2 md:p-3 bg-white rounded-full shadow-xl"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaStar className="text-yellow-500" size={20} />
                        </motion.div>
                        <motion.div 
                            className="flex items-center justify-center p-2 md:p-3 bg-white rounded-full shadow-xl"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaShareAlt 
                                className="text-blue-500" 
                                size={20} 
                                onClick={() => handleShare(selectedItem)}
                            />
                        </motion.div>
                        <motion.button
                            className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleAddToCart(selectedItem)}
                        >
                            <FaShoppingCart />
                            Add to Cart
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 xl:px-2 flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 xl:gap-16">
                    {/* Left Text Content */}
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl border border-white/20 relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8">
                                    <FaUtensils className="text-orange-500 text-xl sm:text-2xl lg:text-3xl" />
                                    <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-orange-600 uppercase tracking-wider">
                                        Testimonials
                                    </span>
                                </div>

                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 leading-tight">
                                    Epicurean Echoes: <br className="hidden md:block" /> Savor the Moments
                                </h2>

                                <div className="bg-white/40 rounded-xl p-4 sm:p-6 md:p-6 lg:p-8 mb-6 border border-white/30">
                                    <div className="flex gap-1 sm:gap-2 mb-3 text-orange-400">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                        ))}
                                    </div>
                                    <blockquote className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-700 italic mb-4 sm:mb-6">
                                        "The Crispy Corner is the best. Besides the many and delicious meals, the service is also very good,
                                        especially the very fast delivery..."
                                    </blockquote>
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <img
                                            src={wts3}
                                            alt="Customer"
                                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-orange-200"
                                        />
                                        <div>
                                            <h4 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-gray-800">
                                                John Carter
                                            </h4>
                                            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
                                                Food Enthusiast
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Content */}
                    <div className="w-full md:w-1/2 order-1 md:order-2 mb-6 md:mb-10">
                        <motion.div 
                            className="relative group"
                            whileHover={{ scale: 1.02 }}
                        >
                            <img
                                src={wts1}
                                alt="Happy Customer"
                                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                                style={{ maxWidth: "min(100%, 640px)" }}
                            />
                            <motion.div 
                                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-6 md:-right-2 bg-white p-2 sm:p-3 md:p-4 rounded-2xl shadow-lg"
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                }}
                            >
                                <img
                                    src={wts3}
                                    alt="Customer"
                                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-orange-200"
                                />
                                <div className="absolute -bottom-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                    5★
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {showVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-4xl">
                        <button 
                            onClick={() => setShowVideo(false)}
                            className="absolute -top-10 right-0 text-white text-2xl hover:text-orange-500"
                        >
                            &times;
                        </button>
                        <video 
                            src={Bannervideo} 
                            controls 
                            autoPlay 
                            className="w-full h-auto rounded-lg"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}

            {/* Order Modal */}
            {showOrderModal && selectedOrderItem && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                    <motion.div 
                        className="bg-white rounded-xl p-6 max-w-md w-full relative"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                    >
                        <button 
                            onClick={() => setShowOrderModal(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <FaTimes size={24} />
                        </button>
                        
                        <div className="text-center">
                            <img 
                                src={selectedOrderItem.image || selectedOrderItem.image1} 
                                alt={selectedOrderItem.name} 
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedOrderItem.name}</h3>
                            <p className="text-gray-600 mb-4">{selectedOrderItem.description || 'Delicious food item'}</p>
                            <p className="text-xl font-bold text-orange-600 mb-6">${selectedOrderItem.price}</p>
                            
                            <div className="flex justify-center gap-4">
                                <button 
                                    onClick={() => {
                                        setCartItems([...cartItems, selectedOrderItem]);
                                        setShowOrderModal(false);
                                    }}
                                    className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
                                >
                                    Add to Cart
                                </button>
                                <button onClick={handleOrder} className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
                                    Order Now
                                </button>
                            </div>
                            
                            {cartItems.length > 0 && (
                                <div className="mt-6 pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-600 mb-2">
                                        {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in cart
                                    </p>
                                    
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Home;