import { useState } from "react";

export default function Sidebar() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState([100, 500]);

  const productTypes = [
    { name: "Shirt", count: 126 },
    { name: "Pants", count: 40 },
    { name: "Women Dress", count: 300 },
    { name: "Hat", count: 50 },
    { name: "Hoodie", count: 10 },
    { name: "Kids", count: 20 },
    { name: "Man", count: 300 },
    { name: "Accessories", count: 459 },
    { name: "Hijab", count: 1000 },
    { name: "Shoes", count: 5 },
    { name: "T-Shirt", count: 30 },
  ];

  const getColor = (count) => {
    if (count <= 10) return "bg-red-50 text-red-700 ring-red-600/20";
    if (count <= 50) return "bg-yellow-50 text-yellow-700 ring-yellow-600/20";
    return "bg-green-50 text-green-700 ring-green-600/20";
  };

  return (
    <div className="border border-gray-400 p-4 rounded-lg">
      <h2 className="text-md font-bold uppercase mb-4">Filter Products</h2>

      {/* Dropdown for Category */}
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium mb-2">
          Category
        </label>
        <select
          id="category"
          className="w-full p-2 border rounded-full "
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="shirt">Shirt</option>
          <option value="pants">Pants</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>

      {/* Checkbox for product types */}
      <div className="mb-4">
        <h3 className="text-sm font-bold mb-2">Product Type</h3>
        {productTypes.map((product) => (
          <label key={product.name} className="block mb-2 flex justify-between items-center">
            <div className="text-sm flex items-center">
              <input type="checkbox" className="mr-2" /> {product.name}
            </div>
            <span
              className={`text-sm inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${getColor(
                product.count
              )}`}
            >
              {product.count}
            </span>
          </label>
        ))}
      </div>

      <hr className="my-4" />

      {/* Range Slider for Price */}
      <div className="mb-4">
        <h3 className="text-sm font-bold mb-2">Price</h3>
        <input
          type="range"
          min="100"
          max="500"
          value={selectedPrice[1]}
          className="w-full"
          onChange={(e) => setSelectedPrice([100, Number(e.target.value)])}
        />
        <span className="block text-sm mt-2">
          Price: ${selectedPrice[0]} - ${selectedPrice[1]}
        </span>
      </div>

      <hr className="my-4" />
    </div>
  );
}
