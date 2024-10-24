import Navbar from "@/components/Navbar";
import '../styles/global.css';
import Hero from "@/components/Hero";

export default function Home() {
    return (
      <div className="min-h-screen bg-white text-black">
        <Navbar/>
        <Hero/>
      </div>
    );
  }
  