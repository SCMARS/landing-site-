import ProductInfo from "@/app/components/ProductInfo";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";
import HowToOrder from "@/app/components/HowToOrder";
import Features from "@/app/components/Features";
import Reviews from "@/app/components/Reviews";
import Cart from "@/app/components/Cart";
import ContactForm from "@/app/components/ContactForm";
import Analytics from "@/app/components/Analytics";
import WhyChooseUs from "@/app/components/WhyChooseUs";

// Enable static generation for this page
export const dynamic = 'force-static';

export default function Home() {
    return (
        <main className="bg-white text-gray-900 font-sans">
            <Analytics />
            <Hero />
            <ProductInfo />
            <WhyChooseUs />
            <Features />
            <HowToOrder />
            <Reviews />
            <ContactForm />
            <Footer />
            <Cart />
        </main>
    );
}
