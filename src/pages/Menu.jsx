import React, { useState, useEffect } from 'react';
import { FaSearch, FaStar, FaHeart, FaShoppingCart, FaFilter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Sample menu data
const menuData = [
  {
    id: 1,
    name: "Truffle Pasta",
    description: "Handmade pasta with black truffle, parmesan cream sauce",
    price: 24.99,
    category: "main",
    rating: 4.9,
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce",
    tags: ["vegetarian", "signature"]
  },
  {
    id: 2,
    name: "Wagyu Burger",
    description: "Premium wagyu beef with aged cheddar and truffle aioli",
    price: 29.99,
    category: "main",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    tags: ["meat", "popular"]
  },
  {
    id: 3,
    name: "Miso Glazed Salmon",
    description: "Fresh salmon with honey miso glaze and seasonal vegetables",
    price: 26.50,
    category: "main",
    rating: 4.8,
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
    tags: ["fish", "healthy"]
  },
  {
    id: 4,
    name: "Mushroom Risotto",
    description: "Creamy arborio rice with wild mushrooms and white wine",
    price: 22.99,
    category: "main",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c",
    tags: ["vegetarian"]
  },
  {
    id: 5,
    name: "Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla bean ice cream",
    price: 14.99,
    category: "dessert",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    tags: ["sweet"]
  },
  {
    id: 6,
    name: "Caprese Salad",
    description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze",
    price: 12.99,
    category: "starter",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
    tags: ["vegetarian", "light"]
  },
  {
    id: 7,
    name: "Lobster Bisque",
    description: "Creamy soup with fresh lobster meat and herbs",
    price: 18.99,
    category: "starter",
    rating: 4.7,
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
    tags: ["seafood"]
  },
  {
    id: 8,
    name: "Tiramisu",
    description: "Classic Italian dessert with espresso-soaked ladyfingers",
    price: 13.50,
    category: "dessert",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    tags: ["sweet"]
  }
];

const MenuPage = () => {
  const [dishes, setDishes] = useState(menuData);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Menu' },
    { id: 'starter', name: 'Starters' },
    { id: 'main', name: 'Main Courses' },
    { id: 'dessert', name: 'Desserts' }
  ];

  // Additional filters
  const filters = [
    { id: 'all', name: 'All' },
    { id: 'vegetarian', name: 'Vegetarian' },
    { id: 'signature', name: 'Signature' },
    { id: 'chefSpecial', name: "Chef's Special" }
  ];

  // Filter dishes based on search, category and filters
  useEffect(() => {
    let filtered = menuData;
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(dish =>
        dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter(dish => dish.category === activeCategory);
    }
    
    // Additional filters
    if (activeFilter === 'vegetarian') {
      filtered = filtered.filter(dish => dish.tags.includes('vegetarian'));
    } else if (activeFilter === 'signature') {
      filtered = filtered.filter(dish => dish.tags.includes('signature'));
    } else if (activeFilter === 'chefSpecial') {
      filtered = filtered.filter(dish => dish.isChefSpecial);
    }
    
    setDishes(filtered);
  }, [searchTerm, activeCategory, activeFilter]);

  // Toggle favorite
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const navagate=useNavigate();
  const handleAdd=()=>{
    navagate('/add')
  }

  // SVG Wave Animation Component
  const WaveAnimation = () => (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-20"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          className="fill-current text-orange-100"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          className="fill-current text-orange-200"
        ></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          className="fill-current text-orange-300"
        ></path>
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">


      {/* Header with search */}
      <header className="relative bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            {/* Search Input */}
            <div className="relative w-full md:w-1/3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>

              <input
                type="text"
                placeholder="Search dishes..."
                className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Button */}
            <div>
              <button
                className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
                onClick={() => setShowFilters(prev => !prev)}
              >
                <FaFilter /> Filters
              </button>
            </div>
          </div>
        </div>

       
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition ${activeCategory === category.id 
                ? 'bg-orange-500 text-white' 
                : 'bg-white text-gray-800 hover:bg-orange-100'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Filter panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white rounded-lg shadow-md p-4 mb-8 overflow-hidden"
            >
              <h3 className="font-bold text-lg mb-3">Filter by:</h3>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-3 py-1 rounded-full text-sm ${activeFilter === filter.id 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-orange-100'}`}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu items grid */}
        {dishes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dishes.map((dish) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Dish image with hover effect */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {dish.isChefSpecial && (
                    <div className="absolute top-3 right-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      Chef's Special
                    </div>
                  )}
                  <button
                    onClick={() => toggleFavorite(dish.id)}
                    className={`absolute top-3 left-3 p-2 rounded-full ${favorites.includes(dish.id) 
                      ? 'text-red-500 bg-white' 
                      : 'text-white bg-white/30'}`}
                  >
                    <FaHeart />
                  </button>
                </div>

                {/* Dish details */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{dish.name}</h3>
                    <span className="font-bold text-orange-600">${dish.price}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3">{dish.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaStar className="text-amber-400 mr-1" />
                      <span className="text-sm font-medium">{dish.rating}</span>
                    </div>
                    
                    <button onClick={handleAdd} className="flex items-center gap-1 bg-orange-500 text-white px-3 py-1 rounded-full text-sm hover:bg-orange-600 transition">
                      <FaShoppingCart size={12} /> Add
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">No dishes found matching your criteria</h3>
            <button 
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
                setActiveFilter('all');
              }}
              className="mt-4 text-orange-500 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default MenuPage;