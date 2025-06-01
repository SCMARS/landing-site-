# Таблетована сіль - Landing Page

Сучасна посадкова сторінка для продажу таблетованої солі, створена з використанням Next.js, TypeScript та Tailwind CSS.

## Особливості

- Сучасний та адаптивний дизайн
- Красиві анімації з Framer Motion
- Контактна форма з валідацією
- SEO оптимізація
- PWA підтримка
- Функціонал кошика
- Інтеграція з Google Analytics
- Повністю перекладено на українську мову

## Початок роботи

1. Клонуйте репозиторій
2. Встановіть залежності:
```bash
npm install
```
3. Запустіть сервер розробки:
```bash
npm run dev
```
4. Відкрийте [http://localhost:3000](http://localhost:3000) у браузері

## Збірка для продакшену

```bash
npm run build
npm start
```

## Використані технології

- Next.js 15.3.2
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide Icons
- EmailJS для форми зворотного зв'язку

## Структура проекту

```
src/
├── app/
│   ├── components/
│   │   ├── Hero.tsx          # Головна секція
│   │   ├── ProductInfo.tsx   # Інформація про продукт
│   │   ├── WhyChooseUs.tsx   # Чому обирають нас
│   │   ├── Features.tsx      # Особливості продукту
│   │   ├── HowToOrder.tsx    # Як замовити
│   │   ├── Reviews.tsx       # Відгуки клієнтів
│   │   ├── ContactForm.tsx   # Форма зворотного зв'язку
│   │   ├── Footer.tsx        # Підвал сайту
│   │   └── Cart.tsx          # Кошик
│   ├── globals.css           # Глобальні стилі
│   ├── layout.tsx            # Основний макет
│   └── page.tsx              # Головна сторінка
└── public/
    ├── images/               # Зображення
    ├── icons/                # Іконки
    └── manifest.json         # PWA маніфест
```

## Налаштування

### EmailJS
Для роботи контактної форми потрібно налаштувати EmailJS:
1. Створіть акаунт на [EmailJS](https://www.emailjs.com/)
2. Оновіть конфігурацію в `src/app/components/ContactForm.tsx`

### Telegram Bot
Оновіть посилання на Telegram бот у компонентах:
- `src/app/components/Hero.tsx`
- `src/app/components/ProductInfo.tsx`
- `src/app/components/ContactForm.tsx`
- `src/app/components/Reviews.tsx`



### Vercel
```bash
npm i -g vercel
vercel
```

## Ліцензія

MIT
