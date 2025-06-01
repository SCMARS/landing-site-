'use client'

import { motion } from "framer-motion";
import { Nut, Droplets, Flame, Microscope, Package, Flag } from "lucide-react";

export default function WhyChooseUs() {
    const features = [
        {
            icon: <Nut className="text-blue-500" size={24} />,
            title: "Висока щільність пресування",
            description: "Наші таблетки солі мають оптимальну щільність для довгої та ефективної роботи"
        },
        {
            icon: <Droplets className="text-blue-500" size={24} />,
            title: "Відмінна розчинність",
            description: "Швидко та рівномірно розчиняється, забезпечуючи стабільну роботу обладнання"
        },
        {
            icon: <Flame className="text-blue-500" size={24} />,
            title: "Підходить для фільтрів та котлів",
            description: "Універсальне рішення для всіх типів водоом'якшувального обладнання"
        },
        {
            icon: <Microscope className="text-blue-500" size={24} />,
            title: "Чистота 99.8%",
            description: "Найвищий ступінь очищення для максимальної ефективності регенерації"
        },
        {
            icon: <Package className="text-blue-500" size={24} />,
            title: "Гарантія якості",
            description: "Кожна партія проходить суворий контроль якості перед відправкою"
        },
        {
            icon: <Flag className="text-blue-500" size={24} />,
            title: "Вироблено в Україні",
            description: "Підтримка вітчизняного виробника та відповідність міжнародним стандартам"
        }
    ];

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
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <section className="px-4 sm:px-6 py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="max-w-6xl mx-auto"
            >
                <motion.div variants={itemVariants} className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                        Чому обирають нас
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Наша таблетована сіль забезпечує ефективну роботу систем водоочищення та водом&apos;якшення
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
                        >
                            <div className="flex items-start">
                                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="mt-12 text-center"
                >
                    <a
                        href="http://t.me/solfias_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
                    >
                        Дізнатися більше
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}