import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Related() {
  const products = [
    { id: 1, img: "/img/product-1.jpg", name: "Casual Jacket", price: "$120", desc: "T-shirt in midweight cotton jersey with a print motif, round, rib-trimmed neckline, dropped shoulders and a straight-cut hem. Loose fit for a generous but not oversized silhouette." },
    { id: 2, img: "/img/product-2.jpg", name: "Elegant Dress", price: "$150", desc: "Slim-fit leggings in soft jersey with covered elastication at the waist and flared hems." },
    { id: 3, img: "/img/product-3.jpg", name: "Summer Shirt", price: "$80", desc: "T-shirt in midweight cotton jersey with a print motif, round, rib-trimmed neckline, dropped shoulders and a straight-cut hem. Loose fit for a generous but not oversized silhouette." },
    { id: 4, img: "/img/product-4.jpg", name: "Stylish Pants", price: "$95", desc: "Slim-fit leggings in soft jersey with covered elastication at the waist and flared hems." },
    { id: 5, img: "/img/product-5.jpg", name: "Classic Shoes", price: "$140", desc: "T-shirt in midweight cotton jersey with a print motif, round, rib-trimmed neckline, dropped." },
    { id: 6, img: "/img/product-6.jpg", name: "Classic Pants", price: "$140", desc: "Leggings in soft jersey with covered elastication at the waist T-shirt in midweight cotton jersey with a print motif, round, rib-trimmed neckline, dropped." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + products.length) % products.length);
  };

  return (
    <div className="container md:mx-auto mb-24">
      <div className="flex justify-between items-center mb-12">
        <p className="text-xl md:text-4xl font-bold uppercase">OTHER FASHION CATEGORY</p>
        <div className="flex gap-4 items-center">
          <button onClick={handlePrev} className="mx-1 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button onClick={handleNext} className="mx-1 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        {products.slice(currentIndex, currentIndex + 2).map((product) => (
          <div key={product.id} className="flex flex-col md:flex-row items-start border rounded-lg overflow-hidden">
            <img src={product.img} alt={product.name} className="h-48 object-cover w-full md:w-1/2" />
            <div className="flex flex-col w-full md:w-1/2 p-4">
              <p className="text-xl font-semibold">{product.name}</p>
              <p className="text-sm text-gray-500 my-3 line-clamp-3">{product.desc}</p>
              <button className="border rounded-full p-2 bg-gray-100 border-gray-300 inline-block w-full hover:bg-gray-400 hover:text-white text-sm">
                Explore Product <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
