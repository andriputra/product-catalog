import Navbar from "@/components/Navbar";
import '../styles/global.css';
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import Catalogue from "@/components/Catalogue";
import Related from "@/components/Related";

export default function Home() {
    return (
      <div className="min-h-screen bg-white text-black">
        <Navbar />
        <div className="px-3 md:px-0">
        <Hero />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mb-[80px]">
          <div className="col-span-1 hidden md:block">
            <Sidebar />
          </div>
          <div className="col-span-1 md:col-span-4">
            <Catalogue />
          </div>
        </div>
        <Related />
        </div>
        <footer className="text-center text-gray-600 py-4 bg-gray-100">
          &copy; 2024 Flexbox Fashion. All rights reserved.
        </footer>
      </div>
    );
}
