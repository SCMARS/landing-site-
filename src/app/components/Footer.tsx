     "use client";

import { Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Перевірка розміру екрану для адаптивного дизайну
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Відстеження появи футера в зоні видимості
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const footerElement = document.getElementById('footer');
        if (footerElement) {
            observer.observe(footerElement);
        }

        return () => {
            if (footerElement) {
                observer.unobserve(footerElement);
            }
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 70 }
        }
    };

    return (
        <footer id="footer" className="bg-gradient-to-b from-gray-800 to-gray-900 text-white px-4 sm:px-6 py-8 sm:py-10">
            <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={containerVariants}
                className="max-w-6xl mx-auto"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Контактна інформація */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold mb-4 flex items-center text-blue-300">
                            <span className="mr-2">Контакти</span>
                            <div className="h-px flex-grow bg-gradient-to-r from-blue-400 to-transparent"></div>
                        </h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center">
                                <MapPin size={16} className="text-blue-400 mr-2 flex-shrink-0" />
                                <span>Україна, м. Київ</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={16} className="text-blue-400 mr-2 flex-shrink-0" />
                                <a href="tel:+380501234567" className="hover:text-blue-300 transition-colors">
                                    +38 (050) 123-45-67
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail size={16} className="text-blue-400 mr-2 flex-shrink-0" />
                                <a href="mailto:info@salt.com.ua" className="hover:text-blue-300 transition-colors">
                                    info@salt.com.ua
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Send size={16} className="text-blue-400 mr-2 flex-shrink-0" />
                                <a href="https://t.me/your_bot" className="hover:text-blue-300 transition-colors">
                                    Telegram-бот
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Швидкі посилання */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold mb-4 flex items-center text-blue-300">
                            <span className="mr-2">Інформація</span>
                            <div className="h-px flex-grow bg-gradient-to-r from-blue-400 to-transparent"></div>
                        </h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <a href="#" className="hover:text-blue-300 transition-colors flex items-center">
                                    <span className="text-blue-400 mr-2">•</span>
                                    Про компанію
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-300 transition-colors flex items-center">
                                    <span className="text-blue-400 mr-2">•</span>
                                    Каталог продукції
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-300 transition-colors flex items-center">
                                    <span className="text-blue-400 mr-2">•</span>
                                    Доставка і оплата
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-300 transition-colors flex items-center">
                                    <span className="text-blue-400 mr-2">•</span>
                                    Питання та відповіді
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Соціальні мережі та копірайт */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold mb-4 flex items-center text-blue-300">
                            <span className="mr-2">Слідкуйте за нами</span>
                            <div className="h-px flex-grow bg-gradient-to-r from-blue-400 to-transparent"></div>
                        </h3>
                        <div className="flex space-x-4 mb-6">
                            <a href="#" className="bg-gray-700 hover:bg-blue-600 text-white p-2 rounded-full transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="bg-gray-700 hover:bg-blue-600 text-white p-2 rounded-full transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="bg-gray-700 hover:bg-blue-600 text-white p-2 rounded-full transition-colors">
                                <Send size={20} />
                            </a>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-700">
                            <p className="text-sm text-gray-400">© 2025 Таблетована сіль. Всі права захищені.</p>
                            <p className="text-sm text-gray-400 mt-1 flex items-center">
                                <span>Зроблено з</span>
                                <span className="text-blue-400 mx-1">💙</span>
                                <span>в Україні</span>
                                <span className="ml-1">🇺🇦</span>
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Підписка на розсилку - тільки для планшетів і комп'ютерів */}
                {!isMobile && (
                    <motion.div
                        variants={itemVariants}
                        className="mt-8 pt-6 border-t border-gray-700"
                    >
                        <div className="flex flex-col sm:flex-row items-center justify-between">
                            <div className="mb-4 sm:mb-0">
                                <h4 className="text-lg font-medium text-white">Підпишіться на нашу розсилку</h4>
                                <p className="text-sm text-gray-400">Отримуйте новини та спеціальні пропозиції</p>
                            </div>
                            <div className="relative w-full sm:w-auto sm:max-w-md">
                                <input
                                    type="email"
                                    placeholder="Ваш email"
                                    className="bg-gray-700 text-white rounded-lg px-4 py-2 w-full pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-md p-1.5 transition-colors">
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </footer>
    );
}

