import React from "react";

const destinations = [
  {
    name: "Goa",
    image: "https://plus.unsplash.com/premium_photo-1661964446598-630884d8d1c9?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Hotels, Budget Hotels, Resorts, Best Hotels, North Goa, Villas",
  },
  {
    name: "Delhi",
    image: "https://images.unsplash.com/photo-1723108034000-e7fd897e3be0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Hotels, Budget Hotels, Resorts, Best Hotels, Near IGI Airport",
  },
  {
    name: "Bangalore",
    image: "https://images.unsplash.com/photo-1709805471116-26c5adf3012b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Hotels, Budget Hotels, Resorts, Near Airport, Guhantara Resort",
  },
  {
    name: "Ooty",
    image: "https://images.unsplash.com/photo-1697229607256-2f00764adec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Hotels, Resorts, Cottages, Budget Hotels, Homestay",
  },
  {
    name: "Mumbai",
    image: "https://images.unsplash.com/photo-1685697075109-7e51a8006c7d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Hotels, Budget Hotels, Resorts, Near Mumbai Airport",
  },
  {
    name: "Shimla",
    image: "https://images.unsplash.com/photo-1710398867368-3adba74f7d89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Hotels, Budget Hotels, Best Hotels, Resorts, Near Mall Road",
  },
  {
    name: "Jaipur",
    image: "https://images.unsplash.com/photo-1638619281167-b134b7fb3095?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Hotels, Resorts, Budget Hotels, Best Hotels, Near Railway Station",
  },
  {
    name: "Manali",
    image: "https://images.unsplash.com/photo-1640114162784-20c35f7aec3f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Hotels, Resorts, Budget Hotels, Best Hotels, Near Mall Road",
  },
  {
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1699796831583-b398459387f6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Hotels, Budget Hotels, 5 Star Hotels, Apart-Hotels, Homestays",
  },
  {
    name: "Singapore",
    image: "https://images.unsplash.com/photo-1640114162784-20c35f7aec3f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Hotels, 5 Star Hotels, Little India, Orchard Road, Sentosa",
  },
  {
    name: "Bangkok",
    image: "https://images.unsplash.com/photo-1658203117798-dbfb909019bc?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Hotels, 3 Star Hotels, 5 Star Hotels, Hostels, Budget Hotels",
  },
  {
    name: "Pattaya",
    image: "https://plus.unsplash.com/premium_photo-1661964079694-ccfaf7dc8028?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Hotels, Budget Hotels, 5 Star Hotels, Resorts, Central Pattaya",
  },
  {
    name: "Phuket",
    image: "https://images.unsplash.com/photo-1699796831583-b398459387f6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Hotels, Resorts, Budget Hotels, Beachfront Properties",
  },
  {
    name: "Bali",
    image: "https://images.unsplash.com/photo-1711707246899-cf0d1a5d0472?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Hotels, Resorts, 5 Star Hotels, Villas, Beachfront Properties",
  },
  {
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1606787947151-1c54964042e5?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Hotels, 3 Star Hotels, Resorts, 5 Star Hotels, Hotels in Male",
  },
  {
    name: "Others",
    image: "https://images.unsplash.com/photo-1668503048231-3a23b7e65a28?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Puri Hotels, OYO Delhi, Alleppey Houseboat, Mahabaleshwar Hotels",
  },
];

const HotelCard = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
        {destinations.map((dest, index) => (
          <div key={index} className="flex items-center space-x-4 p-1 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <img
              src={dest.image}
              alt={dest.name}
              className="w-13 h-13 rounded-full object-cover"
            />
            <div>
              <h2 className="text-lg font-bold text-gray-900">{dest.name}</h2>
              <p className="text-gray-600 text-sm">{dest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelCard;
