// src/components/CartDropdown.jsx
import React from "react";
import { X } from "lucide-react";

const CartDropdown = ({ items, onRemove }) => {
  return (
    <div className="absolute right-0 mt-3 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-300 px-4 py-2">
        <h3 className="text-sm font-semibold text-gray-800 uppercase">
          Cart Items
        </h3>
        <span className="text-xs text-gray-500">{items.length} items</span>
      </div>

      {/* Product List */}
      <div className="max-h-100 overflow-y-auto">
        {items.length === 0 ? (
          <p className="text-center text-gray-500 py-4 text-sm">
            Your cart is empty.
          </p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition"
            >
              {/* Product Image */}
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-md border border-gray-200"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">{item.name}</p>
                  <p className="text-xs text-gray-500">${item.price}</p>
                </div>
              </div>

              {/* Remove Icon */}
              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-600 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {items.length > 0 && (
        <div className="border-t border-gray-300 px-4 py-3">
          <button className="w-full bg-amber-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-amber-600 transition">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
