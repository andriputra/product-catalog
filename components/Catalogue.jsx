import { useState } from "react";

export default function Catalogue() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const products = [
    { id: 1, img: "/img/cat-1.jpg", name: "KNIT OTTOMAN COMB JACKET", price: "$300" },
    { id: 2, img: "/img/cat-2.jpg", name: "SHIRT OTTOMAN SERIES", price: "$360" },
    { id: 3, img: "/img/cat-3.jpg", name: "KNIK JAZZ SERIES", price: "$300" },
    { id: 4, img: "/img/cat-4.jpg", name: "KNIT OTTOMAN COMB JACKET", price: "$300" },
    { id: 5, img: "/img/cat-5.jpg", name: "LONG JEANS", price: "$300" },
    { id: 6, img: "/img/cat-6.jpg", name: "KNIT LINE BLUE", price: "$290" },
    { id: 7, img: "/img/cat-1.jpg", name: "KNIT OTTOMAN COMB JACKET", price: "$300" },
    { id: 8, img: "/img/cat-2.jpg", name: "SHIRT OTTOMAN SERIES", price: "$360" },
    { id: 9, img: "/img/cat-3.jpg", name: "KNIK JAZZ SERIES", price: "$300" },
    { id: 10, img: "/img/cat-4.jpg", name: "KNIT OTTOMAN COMB JACKET", price: "$300" },
    { id: 11, img: "/img/cat-5.jpg", name: "LONG JEANS", price: "$300" },
    { id: 12, img: "/img/cat-6.jpg", name: "KNIT LINE BLUE", price: "$290" },
    { id: 13, img: "/img/cat-4.jpg", name: "KNIT OTTOMAN COMB JACKET", price: "$300" },
    { id: 14, img: "/img/cat-5.jpg", name: "LONG JEANS", price: "$300" },
    { id: 15, img: "/img/cat-6.jpg", name: "KNIT LINE BLUE", price: "$290" },
    { id: 16, img: "/img/cat-1.jpg", name: "KNIT OTTOMAN COMB JACKET", price: "$300" },
    { id: 17, img: "/img/cat-2.jpg", name: "SHIRT OTTOMAN SERIES", price: "$360" },
  ];

  // Pagination calculations
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <p className="text-sm md:text-md">
          Showing <span className="font-bold">{currentProducts.length}</span> results from total{" "}
          <span className="font-bold">{products.length}</span> for <span className="font-bold">Shirt</span>
        </p>
        <div className="flex gap-2 items-center mt-2 md:mt-0">
          <span className="text-sm md:text-md">Sort by</span>
          <select name="sort" id="sort" className="p-2 border rounded-full bg-gray-100 text-sm md:text-md">
            <option value="1">Popularity</option>
            <option value="2">High Price</option>
            <option value="3">Low Price</option>
          </select>
        </div>
      </div>

      {/* Catalogue Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} onDetailClick={() => openModal(product)} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-12 relative">
        <hr className="w-full absolute top-5 z-0" />
        <div className="bg-[#ffffff] inline-block text-center z-1 relative px-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`relative z-1 mx-1 px-4 py-2 rounded-full ${
                currentPage === index + 1 ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {showModal && selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
}

function ProductCard({ product, onDetailClick }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={product.img} alt={product.name} className="w-full h-[200px] object-cover rounded-lg" />
      <div className="flex justify-between items-center my-2">
        <span className="text-gray-900 text-sm">{product.name}</span>
        <span className="text-red-800 font-bold">{product.price}</span>
      </div>
      <button
        onClick={onDetailClick}
        className="bg-[#978877] hover:bg-red-700 text-white py-2 px-4 rounded-full w-full"
      >
        See Detail
      </button>
    </div>
  );
}

function ProductDetailModal({ product, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <img src={product.img} alt={product.name} className="w-full h-[200px] object-cover rounded-lg" />
        <h2 className="text-lg font-bold mt-4">{product.name}</h2>
        <p className="text-gray-900 font-semibold text-lg mt-2">{product.price}</p>
        <p className="text-sm text-gray-600 mt-2">
          This is a placeholder description for the product. Detailed description goes here.
        </p>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          &times;
        </button>
        <div className="mt-4 flex gap-2">
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full w-full">
            Add to Cart
          </button>
          <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-full w-full">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
