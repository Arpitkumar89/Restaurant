import React, { useState } from 'react';
import pizza2 from "/src/assets/pizza2.png";
import burger1 from "/src/assets/burger1.png";
import cupcake2 from "/src/assets/cupcake2.png";
import icecream1 from "/src/assets/icecream1.png";
const dishes = [
  {
    id: 1,
    name: 'Margherita Pizza',
    price: 249,
    image: pizza2,
    description: 'Classic cheese pizza with tomato base.',
    category: 'Pizza',
  },
  {
    id: 2,
    name: 'Fun & Punny Burger',
    price: 199,
    image: burger1,
    description: 'Juicy Classic Burger.',
    category: 'burger',
  },
  {
    id: 3,
    name: 'Catchy Cupcake',
    price: 49,
    image: cupcake2,
    description: 'Buttercream Bliss.',
    category: 'cupcake',
  },
  {
    id: 4,
    name: 'Punny Icecream',
    price: 149,
    image: icecream1,
    description: 'Choco-lot of Fun',
    category: 'icecream',
  },
  /*{
    id: 5,
    name: 'Veg Biryani',
    price: 179,
    image: vegbiryani,
    description: 'Fragrant basmati rice cooked with vegetables and spices.',
    category: 'Rice',
  },
  {
    id: 6,
    name: 'Butter Naan',
    price: 49,
    image: 'https://via.placeholder.com/150',
    description: 'Soft and fluffy tandoori flatbread with butter.',
    category: 'Bread',
  },
  {
    id: 7,
    name: 'Masala Dosa',
    price: 129,
    image: 'https://via.placeholder.com/150',
    description: 'Crispy South Indian crepe filled with spiced potatoes.',
    category: 'South Indian',
  },
  {
    id: 8,
    name: 'Chicken Tikka',
    price: 299,
    image: 'https://via.placeholder.com/150',
    description: 'Grilled chicken marinated in yogurt and spices.',
    category: 'Starter',
  },
  {
    id: 9,
    name: 'Gulab Jamun',
    price: 79,
    image: 'https://via.placeholder.com/150',
    description: 'Deep-fried milk balls soaked in sugar syrup.',
    category: 'Dessert',
  },
  */
];


const FoodOrderPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (dish) => {
    const existing = cart.find(item => item.id === dish.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === dish.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...dish, qty: 1 }]);
    }
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };

    const handlePayment = () => {
    // You can add payment redirection or popup here
    alert('Redirecting to payment gateway...');
  };

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-600">Order Your Food</h1>

      <div className="grid md:grid-cols-3 gap-6 ">
        {dishes.map((dish) => (
  <div key={dish.id} className="bg-white shadow rounded-xl p-4 flex gap-4 items-center">
    
    <img
      src={dish.image}
      alt={dish.name}
      className="w-28 h-28 object-cover rounded-md"
    />
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-semibold">Details :</h1>
        <span className='text-xl font-extralight'>{dish.description}</span>
        <h2 className="text-xl font-semibold">{dish.name}</h2>
        <p className="text-orange-500 font-bold mt-1">₹{dish.price}</p>
      </div>
      <div className="mt-4 self-end">
        <button
          className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 transition text-sm"
          onClick={() => addToCart(dish)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
))}

      </div>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className="mt-10 bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">🛒 Cart Summary</h2>
          <ul className="space-y-2">
            {cart.map(item => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name} x {item.qty}</span>
                <span>₹{item.price * item.qty}</span>
              </li>
            ))}
          </ul>
          <hr className="my-4" />
          <div className="text-right font-bold text-lg">
            Total: ₹{getTotal()}
          </div>
        <div className="flex justify-end">
            <button
                onClick={handlePayment}
                className="w-fit mt-6 bg-green-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-700 transition"
            >
                Pay Now 
            </button>
            </div>

        </div>
      )}
        
    </div>
  );
};

export default FoodOrderPage; 