'use client'

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ShoppingCart, Award, Check, Info } from "lucide-react";
import Image from "next/image";
import fot from "/images/fot.png";

export default function ProductInfo() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const featuresRef = useRef(null);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isMobile && featuresRef.current) {
            const activeElement = featuresRef.current.children[activeTab];
            activeElement?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, [activeTab, isMobile]);

    const features = [
        { icon: <Award className="text-blue-500" size={24} />, title: "Преміум якість", desc: "100% натуральні компоненти без штучних домішок" },
        { icon: <Check className="text-green-500" size={24} />, title: "Багата на мінерали", desc: "Містить 84 необхідних організму мікроелементів" },
        { icon: <Info className="text-amber-500" size={24} />, title: "Без хімії", desc: "Жодних консервантів, ароматизаторів та підсилювачів смаку" },
        { icon: <span className="text-blue-500 text-xl">🇺🇦</span>, title: "Зроблено в Україні", desc: "Підтримуємо локальне виробництво найвищої якості" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 70,
                duration: 0.8
            }
        }
    };

    return (
        <section className="px-4 sm:px-6 py-12 sm:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            {/* Wrapper for content */}
            <motion.div
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                variants={containerVariants}
                className="max-w-6xl mx-auto"
            >
                {/* Heading Section */}
                <div className="text-center mb-8 sm:mb-12">
                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
                    >
                        Таблетована сіль
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg"
                    >
                        Відкрийте для себе унікальний смак та корисні властивості натуральної таблетованої солі
                    </motion.p>
                </div>

                {/* Main Grid: Image + Info */}
                <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                    {/* Image Column */}
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative group order-2 md:order-1"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-1000" />
                        <div className="relative bg-white rounded-lg overflow-hidden shadow-xl transform group-hover:scale-105 transition duration-500">
                            <div className="aspect-square w-full bg-gradient-to-br from-gray-100 to-white p-6 flex items-center justify-center">
                                <Image
                                    src={fot}
                                    alt="Таблетована сіль"
                                    className="w-full h-auto object-contain"
                                    priority
                                />
                            </div>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-blue-600">
                                Преміум якість
                            </div>
                        </div>
                    </motion.div>

                    {/* Info Column */}
                    <div className="order-1 md:order-2">
                        <motion.h2
                            variants={itemVariants}
                            className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
                        >
                            Чому наша сіль особлива?
                        </motion.h2>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={isVisible ? 'visible' : 'hidden'}
                            className="space-y-3 sm:space-y-4"
                            ref={featuresRef}
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={`p-3 sm:p-4 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${
                                        activeTab === index ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-100'
                                    }`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    <div className="flex items-center">
                                        <div className="mr-3 flex-shrink-0">{feature.icon}</div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-base sm:text-lg">{feature.title}</h4>
                                            <p className="text-gray-600 text-sm sm:text-base mt-1">{feature.desc}</p>
                                        </div>
                                        <ChevronRight
                                            className={`text-blue-500 transition-transform duration-300 ${
                                                activeTab === index ? 'rotate-90' : ''
                                            }`}
                                            size={isMobile ? 16 : 20}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Buttons */}
                        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
                            >
                                <ShoppingCart className="mr-2" size={18} />
                                Придбати зараз
                            </motion.button>
                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-white text-blue-600 border border-blue-200 px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                Дізнатися більше
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Usage Info Block */}
                <motion.div
                    variants={itemVariants}
                    className="mt-12 sm:mt-16 p-4 sm:p-6 bg-blue-50 rounded-xl border border-blue-100"
                >
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-blue-800">
                        Як використовувати таблетовану сіль
                    </h3>
                    <p className="text-gray-700 mb-4">
                        Таблетована сіль ідеально підходить для систем водоочищення, пом'якшувачів води та інших промислових і побутових потреб. Наші таблетки рівномірно розчиняються, забезпечуючи стабільну концентрацію солі.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                        <div className="p-3 bg-white rounded-lg shadow-sm">
                            <p className="font-medium text-blue-700">Водоочисні системи</p>
                        </div>
                        <div className="p-3 bg-white rounded-lg shadow-sm">
                            <p className="font-medium text-blue-700">Пом'якшення води</p>
                        </div>
                        <div className="p-3 bg-white rounded-lg shadow-sm">
                            <p className="font-medium text-blue-700">Промислове використання</p>
                        </div>
                    </div>
                </motion.div>


            </motion.div>
        </section>
    );
}

