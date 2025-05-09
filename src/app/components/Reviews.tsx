"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, User, MessageCircle } from "lucide-react";

export default function Reviews() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
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

    // Відстеження появи секції відгуків в зоні видимості
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const reviewsElement = document.getElementById('reviews-section');
        if (reviewsElement) {
            observer.observe(reviewsElement);
        }

        return () => {
            if (reviewsElement) {
                observer.unobserve(reviewsElement);
            }
        };
    }, []);

    // Розширений список відгуків
    const reviews = [
        {
            name: "Анна Петренко",
            company: "Водоочисні системи",
            rating: 5,
            text: "Дуже задоволена якістю таблетованої солі. Використовуємо для промислових систем очистки води. Ідеально розчиняється, не залишає осаду. Замовлення прийшло швидко!",
            date: "15 квітня 2025"
        },
        {
            name: "Іван Ковальчук",
            company: "Приватний клієнт",
            rating: 4,
            text: "Натуральна, без зайвих домішок — саме те, що потрібно! Використовую для домашньої системи пом'якшення води. Рекомендую.",
            date: "3 квітня 2025"
        },
        {
            name: "Марія Савченко",
            company: "Готель 'Затишок'",
            rating: 5,
            text: "Співпрацюємо вже понад рік. Замовляємо сіль оптом для наших систем водопідготовки. Якість стабільно висока, доставка завжди вчасна. Окрема подяка за гнучкість в оформленні документів.",
            date: "28 березня 2025"
        },
        {
            name: "Олег Дмитренко",
            company: "Басейни та СПА",
            rating: 5,
            text: "Наша компанія обслуговує басейни і СПА-центри. Перейшли на цю сіль півроку тому і дуже задоволені. Клієнти відзначають чистоту води і відсутність запаху хлору.",
            date: "21 березня 2025"
        }
    ];

    // Анімаційні варіанти
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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

    // Навігація по відгуках
    const nextReview = () => {
        setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    const prevReview = () => {
        setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    // Автоматична зміна відгуків
    useEffect(() => {
        const interval = setInterval(() => {
            nextReview();
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    // Функція рендеру зірочок рейтингу
    const renderStars = (rating) => {
        return Array(5).fill(0).map((_, i) => (
            <Star
                key={i}
                size={16}
                className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
        ));
    };

    // Відображення в залежності від розміру екрану
    return (
        <section id="reviews-section" className="px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-b from-blue-50 to-blue-100">
            <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={containerVariants}
                className="max-w-6xl mx-auto"
            >
                <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                        Відгуки наших клієнтів
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Дізнайтеся, що говорять про нашу таблетовану сіль ті, хто вже оцінив її якість
                    </p>
                </motion.div>

                {/* Мобільна версія - карусель з одним відгуком */}
                {isMobile && (
                    <motion.div variants={itemVariants} className="relative">
                        <div className="bg-white p-5 rounded-xl shadow-lg border border-blue-100">
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-100 rounded-full p-2 mr-3">
                                    <User size={18} className="text-blue-500" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">{reviews[activeIndex].name}</h4>
                                    <p className="text-sm text-gray-500">{reviews[activeIndex].company}</p>
                                </div>
                                <div className="ml-auto flex">
                                    {renderStars(reviews[activeIndex].rating)}
                                </div>
                            </div>
                            <div className="relative">
                                <Quote size={24} className="absolute top-0 left-0 text-blue-200 -translate-x-1 -translate-y-1" />
                                <p className="text-gray-700 pl-6 pr-2">{reviews[activeIndex].text}</p>
                            </div>
                            <div className="mt-4 text-right text-sm text-gray-500">{reviews[activeIndex].date}</div>

                            <div className="flex justify-center mt-4 space-x-2">
                                {reviews.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`w-2 h-2 rounded-full ${activeIndex === idx ? 'bg-blue-500' : 'bg-gray-300'}`}
                                        aria-label={`Перейти до відгуку ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between mt-4">
                            <button
                                onClick={prevReview}
                                className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors shadow-md"
                                aria-label="Попередній відгук"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                onClick={nextReview}
                                className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors shadow-md"
                                aria-label="Наступний відгук"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* Десктопна версія - сітка з відгуками */}
                {!isMobile && (
                    <motion.div
                        variants={containerVariants}
                        className="grid gap-4 sm:gap-6 md:grid-cols-2"
                    >
                        {reviews.map((review, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-blue-50"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <div className="bg-blue-100 rounded-full p-2 mr-3">
                                            <User size={18} className="text-blue-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">{review.name}</h4>
                                            <p className="text-sm text-gray-500">{review.company}</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        {renderStars(review.rating)}
                                    </div>
                                </div>
                                <div className="relative">
                                    <Quote size={24} className="absolute top-0 left-0 text-blue-200 -translate-x-1 -translate-y-1" />
                                    <p className="text-gray-700 pl-6">{review.text}</p>
                                </div>
                                <div className="mt-4 text-right text-sm text-gray-500">{review.date}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Додати відгук - заклик до дії */}
                <motion.div
                    variants={itemVariants}
                    className="mt-8 sm:mt-10 text-center"
                >
                    <a
                        href="http://t.me/solfias_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all font-medium"
                    >
                        <MessageCircle className="mr-2" size={20} />
                        Залишити відгук
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}