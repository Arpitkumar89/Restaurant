import { useState, useEffect } from 'react';
import { StarIcon, CameraIcon, CheckBadgeIcon, ArrowPathIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const ReviewsPage = () => {
  // Sample data
  const restaurant = {
    name: "Spice Haven",
    overallRating: 4.5,
    totalReviews: 128,
    ratingBreakdown: [
      { stars: 5, count: 76, percentage: 60 },
      { stars: 4, count: 32, percentage: 25 },
      { stars: 3, count: 12, percentage: 9 },
      { stars: 2, count: 5, percentage: 4 },
      { stars: 1, count: 3, percentage: 2 },
    ],
    popularDishes: [
      { name: "Paneer Butter Masala", rating: 4.8, reviewCount: 42 },
      { name: "Hyderabadi Biryani", rating: 4.6, reviewCount: 38 },
      { name: "Garlic Naan", rating: 4.7, reviewCount: 35 },
    ],
  };

  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "Foodie123",
      rating: 5,
      text: "Absolutely the best burger I have ever had! Flavorful, fresh ingredients and just the right amount of sauce. A must-try!",
      dish: "Classic Cheeseburger",
      images: ["src/assets/burger1.png", "src/assets/burger2.png"],
      date: "2 days ago",
      visitType: "Dine-in",
      verified: true,
      helpfulCount: 12,
      isHelpful: false,
    },
    {
      id: 2,
      user: "SpiceLover",
      rating: 4.5,
      text: "Every bite was cheesy, crispy, and absolutely delicious. One of the best pizzas I have ever had!",
      dish: "Classic Pizzas",
      images: ["src/assets/pizza1.png"],
      date: "1 week ago",
      visitType: "Delivery",
      verified: true,
      helpfulCount: 8,
      isHelpful: false,
    },
    {
      id: 3,
      user: "CurryFanatic",
      rating: 4,
      text: "Slightly heavier than I expected, but packed with rich chocolate taste. Loved the swirl on top and Smooth texture and a rich vanilla flavor that tastes homemade. Simple yet perfect.",
      dish: "Decadent Chocolate Cupcake and Classic Vanilla Bean Ice Cream",
      images: [],
      date: "3 weeks ago",
      visitType: "Takeaway",
      verified: false,
      helpfulCount: 3,
      isHelpful: false,
    },
  ]);

  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("recent");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort reviews
  const filteredReviews = reviews
    .filter(review => {
      if (filter === "withImages") return review.images.length > 0;
      if (filter === "verified") return review.verified;
      if (filter !== "all") return review.dish === filter;
      return true;
    })
    .filter(review => 
      review.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (review.dish && review.dish.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sort === "recent") return new Date(b.date) - new Date(a.date);
      if (sort === "highest") return b.rating - a.rating;
      if (sort === "lowest") return a.rating - b.rating;
      if (sort === "helpful") return b.helpfulCount - a.helpfulCount;
      return 0;
    });

 const markHelpful = (id) => {
  setReviews(
    reviews.map(review => {
      if (review.id === id) {
        const newHelpfulState = !review.isHelpful;
        return {
          ...review,
          isHelpful: newHelpfulState,
          helpfulCount: newHelpfulState ? review.helpfulCount + 1 : review.helpfulCount - 1
        };
      }
      return review;
    })
  );
};

   const [review, setReview] = useState('');
  const [submittedReview, setSubmittedReview] = useState('');

  const handleReviewSubmit = () => {
    if (review.trim() !== '') {
      setSubmittedReview(review);
      setReview('');
      alert("Review submitted! ✅");
    } else {
      alert("Please write something before submitting.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Restaurant Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 transform transition-all hover:scale-[1.01] hover:shadow-xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{restaurant.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-6 w-6 ${i < Math.floor(restaurant.overallRating) ? 'text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
              {restaurant.overallRating % 1 !== 0 && (
                <div className="relative">
                  <StarIcon className="h-6 w-6 text-gray-300" />
                  <div className="absolute left-0 top-0 w-1/2 overflow-hidden">
                    <StarIcon className="h-6 w-6 text-yellow-400" />
                  </div>
                </div>
              )}
            </div>
            <span className="ml-2 text-gray-700">
              {restaurant.overallRating.toFixed(1)} ({restaurant.totalReviews} reviews)
            </span>
          </div>

          {/* Rating Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-3">Rating Breakdown</h3>
              {restaurant.ratingBreakdown.map((item) => (
                <div key={item.stars} className="flex items-center mb-2">
                  <span className="w-8 text-gray-600">{item.stars}★</span>
                  <div className="flex-1 mx-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-yellow-400 h-2.5 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{item.count}</span>
                </div>
              ))}
            </div>

            {/* Popular Dishes */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Popular Dishes</h3>
              {restaurant.popularDishes.map((dish) => (
                <div key={dish.name} className="mb-3">
                  <div className="flex justify-between">
                    <span className="font-medium">{dish.name}</span>
                    <span className="text-yellow-600">{dish.rating.toFixed(1)}★</span>
                  </div>
                  <div className="text-sm text-gray-500">{dish.reviewCount} reviews</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Filters and Search */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-xl font-bold text-gray-900">Customer Reviews</h2>
              
              <div className="relative w-full sm:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search reviews..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium"
                >
                  <span>Filters</span>
                  <ChevronDownIcon className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>
                
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-yellow-500 focus:border-yellow-500"
                >
                  <option value="recent">Most Recent</option>
                  <option value="highest">Highest Rating</option>
                  <option value="lowest">Lowest Rating</option>
                  <option value="helpful">Most Helpful</option>
                </select>
              </div>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setFilter("all")}
                    className={`px-3 py-1 rounded-full text-sm ${filter === "all" ? 'bg-yellow-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                  >
                    All Reviews
                  </button>
                  <button
                    onClick={() => setFilter("withImages")}
                    className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${filter === "withImages" ? 'bg-yellow-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                  >
                    <CameraIcon className="h-4 w-4" />
                    With Photos
                  </button>
                  <button
                    onClick={() => setFilter("verified")}
                    className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${filter === "verified" ? 'bg-yellow-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                  >
                    <CheckBadgeIcon className="h-4 w-4" />
                    Verified Only
                  </button>
                  
                  {restaurant.popularDishes.map((dish) => (
                    <button
                      key={dish.name}
                      onClick={() => setFilter(dish.name)}
                      className={`px-3 py-1 rounded-full text-sm ${filter === dish.name ? 'bg-yellow-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                    >
                      {dish.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Reviews List */}
          
           <div className="p-6 bg-yellow-50 border-t border-yellow-100">
              <h3 className="font-medium text-gray-900 mb-2">Enjoyed your meal?</h3>
              <p className="text-gray-600 mb-4">Share your experience to help others discover great dishes!</p>

              <textarea
                className="w-full p-3 border border-yellow-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                rows="4"
                placeholder="Write your review here..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
              ></textarea>

              <div className="flex justify-end">
                <button
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg shadow-sm transition-colors"
                  onClick={handleReviewSubmit}
                >
                  Submit Review
                </button>
              </div>

              {submittedReview && (
                <div className="mt-4 text-sm text-green-700 bg-green-100 p-3 rounded">
                  <strong>Your Review:</strong> {submittedReview}
                </div>
              )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;