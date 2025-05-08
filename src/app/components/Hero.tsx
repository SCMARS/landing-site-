"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Phone, Truck, Award } from "lucide-react";

// Компонент для анимации чисел
function CountUp({ end, isVisible, className }) {
    const [count, setCount] = useState(0);
    const frameRef = useRef(null);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        const duration = 1500; // ms
        const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentCount = Math.floor(end * easeOutCubic(progress));
            setCount(currentCount);

            if (progress < 1) {
                frameRef.current = requestAnimationFrame(animate);
            }
        };

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
    }, [end, isVisible]);

    // Стили для плавающих элементов (float)
    const floatStyles = `
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  `;

    return (
        <>
            <style jsx>{floatStyles}</style>
            <div className={className}>{count.toLocaleString()}</div>
        </>
    );
}

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setIsVisible(true);

        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-24 text-white">
            <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
                <div
                    className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-400 animate-float"
                    style={{ animationDelay: "0s" }}
                />
                <div
                    className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-blue-300 animate-float"
                    style={{ animationDelay: "1s" }}
                />
                <div
                    className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-blue-200 animate-float"
                    style={{ animationDelay: "2s" }}
                />
            </div>

            {/* Анимированная волна внизу */}
            <div className="absolute -bottom-2 left-0 w-full overflow-hidden">
                <svg
                    className="relative block w-full h-16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="fill-white"
                    />
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Контент */}
                    <div
                        className={`transition-all duration-1000 transform ${
                            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Таблетована сіль <span className="text-blue-300">вищої якості</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-blue-100">
                            Ідеальне рішення для водоочищення, промислових котлів та харчових виробництв з гарантією якості
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://t.me/your_bot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden flex items-center justify-center gap-2 bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                                onMouseEnter={(e) => {
                                    const x = e.nativeEvent.offsetX;
                                    const y = e.nativeEvent.offsetY;
                                    const ripple = document.createElement("span");
                                    ripple.style.left = `${x}px`;
                                    ripple.style.top = `${y}px`;
                                    ripple.className = "absolute rounded-full bg-blue-200 opacity-70 pointer-events-none";
                                    e.currentTarget.appendChild(ripple);
                                    setTimeout(() => {
                                        ripple.style.width = "300px";
                                        ripple.style.height = "300px";
                                        ripple.style.opacity = "0";
                                        ripple.style.transition = "all 0.8s ease-out";
                                        setTimeout(() => ripple.remove(), 800);
                                    }, 10);
                                }}
                            >
                                Замовити в Telegram <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                            </a>
                            <a
                                href="tel:+380501234567"
                                className="group relative overflow-hidden flex items-center justify-center gap-2 bg-transparent border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
                                onMouseEnter={(e) => {
                                    const x = e.nativeEvent.offsetX;
                                    const y = e.nativeEvent.offsetY;
                                    const ripple = document.createElement("span");
                                    ripple.style.left = `${x}px`;
                                    ripple.style.top = `${y}px`;
                                    ripple.className = "absolute rounded-full bg-white opacity-20 pointer-events-none";
                                    e.currentTarget.appendChild(ripple);
                                    setTimeout(() => {
                                        ripple.style.width = "300px";
                                        ripple.style.height = "300px";
                                        ripple.style.opacity = "0";
                                        ripple.style.transition = "all 0.8s ease-out";
                                        setTimeout(() => ripple.remove(), 800);
                                    }, 10);
                                }}
                            >
                                <Phone size={20} /> Зателефонувати нам
                            </a>
                        </div>
                        <div className="mt-8 flex flex-wrap justify-between gap-4">
                            {[{ value: 1000, label: "клієнтів" }, { value: 10, label: "років досвіду" }, { value: 5000, label: "тонн солі на рік" }].map((stat, i) => (
                                <div
                                    key={i}
                                    className={`transition-all duration-700 transform ${
                                        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                    }`}
                                    style={{ transitionDelay: `${i * 150 + 300}ms` }}
                                >
                                    <CountUp end={stat.value} isVisible={isVisible} className="text-3xl font-bold text-blue-300" />
                                    <p className="text-sm text-blue-100">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[{ icon: <Truck size={24} />, text: "Доставка по всій Україні" }, { icon: <Award size={24} />, text: "Сертифікований продукт" }, { icon: <Phone size={24} />, text: "Технічна підтримка 24/7" }].map((item, i) => (
                                <div
                                    key={i}
                                    className={`flex items-center gap-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm transition-all duration-700 transform ${
                                        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                    } hover:bg-white/20 hover:scale-105`}
                                    style={{ transitionDelay: `${i * 150 + 500}ms` }}
                                >
                                    <div className="text-blue-300">{item.icon}</div>
                                    <p className="text-sm font-medium">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Изображение с параллакс-эффектом */}
                    <div
                        className={`relative transition-all duration-1000 transform ${
                            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                        style={{ transitionDelay: "300ms" }}
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
                            <Image src="/images/Hero.png" alt="Таблетована сіль" width={800} height={600} className="w-full h-auto object-cover" priority />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                            <div className="absolute inset-0 opacity-30 bg-gradient-to-tr from-transparent via-white/30 to-transparent animate-shimmer" style={{ backgroundSize: "200% 200%" }} />
                        </div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 rounded-2xl opacity-20 animate-pulse" style={{ transform: `translateY(${scrollY * -0.08}px)` }} />
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-300 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '6s', transform: `translateY(${scrollY * -0.1}px)` }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
