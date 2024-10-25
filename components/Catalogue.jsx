import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/productsSlice';

export default function Catalogue({ priceRange }) { 
  const dispatch = useDispatch();
  const { items: products=[] } = useSelector((state) => state.products);

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [sortOption, setSortOption] = useState("1");
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  const getPriceNumber = (price) => parseFloat(price.replace(/[$,]/g, ""));

  const sortedProducts = (Array.isArray(products) ? products : [])
    .filter(product => {
      const price = getPriceNumber(product.price);
      return price >= priceRange[0] && price <= priceRange[1];
    })
    .sort((a, b) => {
      const priceA = getPriceNumber(a.price);
      const priceB = getPriceNumber(b.price);

      if (sortOption === "2") return priceB - priceA; 
      if (sortOption === "3") return priceA - priceB; 
      return 0; 
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const currentProducts = sortedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1); 
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <p className="text-sm md:text-md">
          Showing <span className="font-bold">{currentProducts.length}</span> results from total{" "}
          <span className="font-bold">{sortedProducts.length}</span> for <span className="font-bold">Shirt</span>
        </p>
        <div className="flex gap-2 items-center mt-2 md:mt-0">
          <span className="text-sm md:text-md">Sort by</span>
          <select 
            name="sort" 
            id="sort" 
            value={sortOption} 
            onChange={handleSortChange} 
            className="p-2 border rounded-full bg-gray-100 text-sm md:text-md"
          >
            <option value="1">Popularity</option>
            <option value="2">High Price</option>
            <option value="3">Low Price</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {currentProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onDetailClick={() => openModal(product)} 
          />
        ))}
      </div>

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
        <ProductDetailModal product={selectedProduct} onClose={closeModal} loading={loading} setLoading={setLoading} />
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

function ProductDetailModal({ product, onClose, loading, setLoading }) {
  const handleAddToCart = () => {
    setLoading(true); // Start loading
    setTimeout(() => {
      setLoading(false); // Stop loading after 3 seconds
      onClose(); // Close modal after loading
    }, 3000);
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <img src={product.img} alt={product.name} className="w-full h-[200px] object-cover rounded-lg" />
        <h2 className="text-lg font-bold mt-4">{product.name}</h2>
        <p className="text-gray-900 font-semibold text-lg mt-2">{product.price}</p>
        <p className="text-sm text-gray-600 mt-2">
          {product.desc}
        </p>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          &times;
        </button>
        <div className="mt-4 flex justify-between gap-4">
          <button 
            onClick={handleAddToCart} 
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full w-full"
          >
            {loading ? (
              <span className="flex items-center">
                <svg 
                  className="animate-spin h-5 w-5 mr-3 text-white" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                  />
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8v4a4 4 0 000 8v4a8 8 0 01-8-8z" 
                  />
                </svg>
                Loading...
              </span>
            ) : (
              "Add to Cart"
            )}
          </button>
          <button 
            onClick={onClose} 
            className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-full w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
