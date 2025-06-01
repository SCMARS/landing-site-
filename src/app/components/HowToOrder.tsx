"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MousePointerClick, MessageSquare, Truck, Check, ShoppingCart } from "lucide-react";

export default function HowToOrder() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    // Перевірка розміру екрану для адаптивного дизайну
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Відстеження появи секції в зоні видимості
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const sectionElement = document.getElementById('how-to-order');
        if (sectionElement) {
            observer.observe(sectionElement);
        }

        return () => {
            if (sectionElement) {
                observer.unobserve(sectionElement);
            }
        };
    }, []);

    // Розширені кроки замовлення
    const steps = [
        {
            title: "Натисніть кнопку замовлення",
            description: "Знайдіть на нашому сайті кнопку 'Замовити зараз' та натисніть на неї",
            icon: <MousePointerClick size={24} />
        },
        {
            title: "Перейдіть у Telegram-бот",
            description: "Ви будете автоматично перенаправлені до нашого Telegram-боту для оформлення замовлення",
            icon: <MessageSquare size={24} />
        },
        {
            title: "Вкажіть кількість та адресу",
            description: "Оберіть необхідну кількість таблетованої солі та вкажіть адресу доставки",
            icon: <ShoppingCart size={24} />
        },
        {
            title: "Очікуйте доставку",
            description: "Ми доставимо ваше замовлення протягом 1-3 робочих днів у будь-який регіон України",
            icon: <Truck size={24} />
        }
    ];

    // Анімаційні варіанти
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 70 }
        }
    };

    return (
        <section id="how-to-order" className="px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50">
            <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={containerVariants}
                className="max-w-5xl mx-auto"
            >
                <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                        Як замовити таблетовану сіль?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Замовити нашу продукцію можна всього за кілька простих кроків
                    </p>
                </motion.div>

                {/* Десктопна версія - горизонтальні кроки */}
                {!isMobile && (
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-4 gap-4 sm:gap-6 mt-8"
                    >
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                onMouseEnter={() => setHoveredStep(i)}
                                onMouseLeave={() => setHoveredStep(null)}
                                className="relative"
                            >
                                {/* Лінія-з'єднання між кроками */}
                                {i < steps.length - 1 && (
                                    <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-200 z-0"></div>
                                )}

                                <div className="flex flex-col items-center text-center relative z-10">
                                    <div
                                        className={`
                                            w-16 h-16 rounded-full flex items-center justify-center
                                            shadow-lg transition-all duration-300 mb-4
                                            ${hoveredStep === i
                                            ? 'bg-blue-600 text-white scale-110'
                                            : 'bg-white text-blue-500 border-2 border-blue-200'}
                                        `}
                                    >
                                        {step.icon}
                                    </div>
                                    <span
                                        className={`
                                            w-8 h-8 rounded-full absolute top-12 right-4
                                            flex items-center justify-center font-bold text-sm
                                            bg-blue-600 text-white shadow-md
                                        `}
                                    >
                                        {i + 1}
                                    </span>
                                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                                    <p className="text-gray-600 text-sm">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Мобільна версія - вертикальні кроки */}
                {isMobile && (
                    <motion.ol
                        variants={containerVariants}
                        className="space-y-4 sm:space-y-6"
                    >
                        {steps.map((step, i) => (
                            <motion.li
                                key={i}
                                variants={itemVariants}
                                className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                            >
                                <div
                                    className="text-white bg-gradient-to-br from-blue-500 to-blue-600
                                    min-w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md"
                                >
                                    {i + 1}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg">{step.title}</h3>
                                    <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                                </div>
                                <div className="text-blue-500">
                                    {step.icon}
                                </div>
                            </motion.li>
                        ))}
                    </motion.ol>
                )}

                {/* Кнопка замовлення */}
                <motion.div
                    variants={itemVariants}
                    className="flex justify-center mt-10 sm:mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500
                        text-white px-6 py-3 rounded-lg font-medium shadow-lg
                        shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
                    >
                        <Check size={20} />
                        <span>Замовити зараз</span>
                    </motion.button>
                </motion.div>

                {/* Додаткова інформація */}
                <motion.div
                    variants={itemVariants}
                    className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg text-center"
                >
                    <p className="text-gray-700">
                        <span className="font-medium">Маєте питання?</span> Напишіть нам у{' '}
                        <a href="https://t.me/your_bot" className="text-blue-600 hover:underline">
                            Telegram
                        </a>{' '}
                        або зателефонуйте за номером{' '}
                        <a href="tel:+380501234567" className="text-blue-600 hover:underline">
                            +38 (050) 123-45-67
                        </a>
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}