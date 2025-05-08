import ProductInfo from "@/app/components/ProductInfo";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";
import HowToOrder from "@/app/components/HowToOrder";
import Features from "@/app/components/Features";
import Reviews from "@/app/components/Reviews";




export default function Home() {
    return (
        <main className="bg-white text-gray-900 font-sans">
            <Hero />
            <ProductInfo />
            <Features />
            <HowToOrder />
            <Reviews />
            <Footer />
        </main>
    );
}
