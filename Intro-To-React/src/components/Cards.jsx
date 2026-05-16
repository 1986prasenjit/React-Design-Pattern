import React from "react";

const ProductCard = ({ thumbnail, title, price, description }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white">
      
      {/* Product Image */}
      <img
        className="w-full h-56 object-cover"
        src={thumbnail}
        alt={title}
      />

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        
        <p className="text-gray-600 text-sm mt-2">
          {description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-green-600">
            ₹{price}
          </span>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;