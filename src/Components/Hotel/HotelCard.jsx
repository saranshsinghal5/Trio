import React from "react";

const hotels = [
  {
    name: "Crowne Plaza Kochi",
    distance: "Kundanoor Junction NH-47 Bypass",
    rating: 4.8,
    reviews: 22,
    price: 26978,
    stars: 5,
    image: " https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Radisson Blu Hotel, Kochi",
    distance: "Sahodaran Ayyappan Rd, ",
    rating: 4.4,
    reviews: 13,
    price: 5844,
    stars: 4,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Taj Wayanad Resort",
    distance: " Manjoora East Crescent Road",
    rating: 4.6,
    reviews: 14,
    price: 1080,
    stars: 4,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Taj Wayanad Resort",
    distance: " Manjoora East Crescent Road",
    rating: 4.6,
    reviews: 14,
    price: 1080,
    stars: 4,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Taj Wayanad Resort",
    distance: " Manjoora East Crescent Road",
    rating: 4.6,
    reviews: 14,
    price: 1080,
    stars: 4,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Taj Wayanad Resort",
    distance: " Manjoora East Crescent Road",
    rating: 4.6,
    reviews: 14,
    price: 1080,
    stars: 4,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Taj Wayanad Resort",
    distance: " Manjoora East Crescent Road",
    rating: 4.6,
    reviews: 14,
    price: 1080,
    stars: 4,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Taj Wayanad Resort",
    distance: " Manjoora East Crescent Road",
    rating: 4.6,
    reviews: 14,
    price: 1080,
    stars: 4,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HotelCard = ({ hotel }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-4 w-full sm:w-80">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{hotel.name}</h3>
        <p className="text-gray-500 text-sm">{hotel.distance}</p>
        <div className="flex items-center mt-2">
          <span className="text-lg font-bold">{hotel.rating}/5</span>
          <span className="text-sm text-gray-500 ml-2">{hotel.reviews} reviews</span>
        </div>
        <div className="flex items-center mt-2">
          {[...Array(hotel.stars)].map((_, i) => (
            <span key={i} className="text-red-500">★</span>
          ))}
        </div>
        <p className="text-xl font-bold mt-2">₹{hotel.price.toLocaleString()}</p>
        <p className="text-sm text-gray-500">Per night</p>
      </div>
    </div>
  );
};

const HotelList = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {hotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
