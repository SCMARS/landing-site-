"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Features() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Установим видимость через короткую задержку для активации анимаций после монтирования
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const items = [
        {
            title: "Висока щільність пресування",
            emoji: "🔩",
            description: "Наші таблетки солі мають оптимальну щільність для довгої та ефективної роботи"
        },
        {
            title: "Відмінна розчинність",
            emoji: "💧",
            description: "Швидко та рівномірно розчиняється, забезпечуючи стабільну роботу обладнання"
        },
        {
            title: "Підходить для фільтрів та котлів",
            emoji: "♨️",
            description: "Універсальне рішення для всіх типів водом'якшувального обладнання"
        },
        {
            title: "Чистота 99.8%",
            emoji: "🧪",
            description: "Найвищий ступінь очищення для максимальної ефективності регенерації"
        },
        {
            title: "Гарантія якості",
            emoji: "📦",
            description: "Кожна партія проходить суворий контроль якості перед відправкою"
        },
        {
            title: "Вироблено в Україні",
            emoji: "🇺🇦",
            description: "Підтримка вітчизняного виробника та відповідність міжнародним стандартам"
        },
    ];

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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const emojiVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.2,
            rotate: [0, -10, 10, -5, 5, 0],
            boxShadow: "0 0 15px rgba(79, 70, 229, 0.6)",
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        }
    };

    // Дополнительные анимации для фоновых элементов
    // const glowPulse = {
    //     animate: {
    //         boxShadow: [
    //             "0 0 10px rgba(59, 130, 246, 0.3)",
    //             "0 0 20px rgba(99, 102, 241, 0.5)",
    //             "0 0 10px rgba(59, 130, 246, 0.3)"
    //         ],
    //         transition: {
    //             duration: 2,
    //             repeat: Infinity,
    //             ease: "easeInOut"
    //         }
    //     }
    // };

    return (
        <section className="px-6 py-24 relative overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-50">
            {/* Анимированные декоративные элементы */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZzEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2M2I2ZmYiIHN0b3Atb3BhY2l0eT0iMC4xIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOTU1OGIyIiBzdG9wLW9wYWNpdHk9IjAuMiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZzEpIi8+PC9zdmc+')]"></div>

            <motion.div
                className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-300/20 via-indigo-400/30 to-purple-300/20"
                animate={{
                    y: [0, 10, 0],
                    opacity: [0.6, 0.8, 0.6]
                }}
                transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity
                }}
                style={{ transform: "skewY(-3deg)" }}
            ></motion.div>

            <motion.div
                className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-400/20 via-indigo-500/20 to-purple-400/20 rounded-full blur-xl"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.7, 0.5]
                }}
                transition={{
                    duration: 12,
                    ease: "easeInOut",
                    repeat: Infinity
                }}
            ></motion.div>

            <motion.div
                className="absolute top-40 left-10 w-64 h-64 bg-gradient-to-br from-cyan-300/20 via-blue-400/20 to-indigo-300/20 rounded-full blur-lg"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [-50, -30, -50],
                    y: [0, 20, 0]
                }}
                transition={{
                    duration: 15,
                    ease: "easeInOut",
                    repeat: Infinity
                }}
            ></motion.div>

            <motion.div
                className="absolute top-20 right-1/4 w-32 h-32 bg-gradient-to-br from-indigo-300/30 to-purple-400/30 rounded-full blur-md"
                animate={{
                    scale: [1, 1.3, 1],
                    y: [0, 30, 0]
                }}
                transition={{
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: 2
                }}
            ></motion.div>

            <motion.div
                className="absolute bottom-20 left-1/3 w-48 h-48 bg-gradient-to-tr from-blue-400/20 to-cyan-300/30 rounded-full blur-lg"
                animate={{
                    scale: [1, 1.15, 1],
                    x: [0, 20, 0]
                }}
                transition={{
                    duration: 18,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: 1
                }}
            ></motion.div>

            {/* Мелкие частицы */}
            {[
                { top: '25%', left: '10%' },
                { top: '35%', left: '85%' },
                { top: '45%', left: '25%' },
                { top: '55%', left: '75%' },
                { top: '65%', left: '15%' },
                { top: '75%', left: '65%' },
                { top: '85%', left: '35%' },
                { top: '15%', left: '55%' }
            ].map((position, i) => (
                <motion.div
                    key={i}
                    className="absolute w-4 h-4 rounded-full bg-white/80 blur-sm"
                    style={{
                        top: position.top,
                        left: position.left,
                    }}
                    animate={{
                        x: [0, 10, 0],
                        y: [0, 10, 0],
                        opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                        duration: 5 + i * 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: i * 0.5
                    }}
                />
            ))}

            <div className="max-w-6xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
                        Чому обирають нас
                    </h2>
                    <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-400 rounded-full mb-6"></div>
                    <motion.p
                        className="text-lg text-indigo-700 max-w-xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Наша таблетована сіль забезпечує ефективну роботу систем водоочищення та водом&apos;якшення
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    {items.map(({ title, emoji, description }) => (
                        <motion.div
                            key={title}
                            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 flex flex-col items-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-indigo-100/50"
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }}
                        >
                            <motion.div
                                className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center mb-4 text-4xl shadow-md shadow-indigo-200/50"
                                variants={emojiVariants}
                                initial="initial"
                                whileHover="hover"
                            >
                                {emoji}
                            </motion.div>
                            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">{title}</h3>
                            <p className="text-gray-600">{description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    <button className="mt-12 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-indigo-300/30 relative overflow-hidden group">
                        <span className="relative z-10">Дізнатися більше</span>
                        <motion.span
                            className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                            }}
                            transition={{
                                duration: 5,
                                ease: "easeInOut",
                                repeat: Infinity
                            }}
                        />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}