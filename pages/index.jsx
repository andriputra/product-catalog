import { useState } from "react";
import Navbar from "@/components/Navbar";
import '../styles/global.css';
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import Catalogue from "@/components/Catalogue";
import Related from "@/components/Related";
import { Provider } from 'react-redux';
import store from '../store';

export default function Home() {
    const [priceRange, setPriceRange] = useState([100, 500]);
    const [currentPage, setCurrentPage] = useState(1); // Add this line to manage current page state

    const handlePriceChange = (newPriceRange) => {
        setPriceRange(newPriceRange); 
        setCurrentPage(1);
    };

    return (
      <Provider store={store}>
        <div className="min-h-screen bg-white text-black">
            <Navbar />
            <div className="px-3 md:px-0">
                <Hero />
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mb-[80px]">
                    <div className="col-span-1 hidden md:block">
                        <Sidebar onPriceChange={handlePriceChange} />
                    </div>
                    <div className="col-span-1 md:col-span-4">
                        <Catalogue priceRange={priceRange} currentPage={currentPage} />
                    </div>
                </div>
                <Related />
            </div>
            <footer className="text-center text-gray-600 py-4 bg-gray-100">
                &copy; 2024 Flexbox Fashion. All rights reserved.
            </footer>
        </div>
      </Provider>
    );
}
