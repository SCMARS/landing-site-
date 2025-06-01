# Інструкції з деплою

## Підготовка до деплою

### 1. Перевірка готовності
- ✅ Всі компоненти переведені на українську мову
- ✅ Сборка проекту проходить без помилок
- ✅ Всі зображення присутні в папці `public/images/`
- ✅ Метадані оновлені для SEO
- ✅ PWA маніфест налаштований

### 2. Налаштування перед деплоєм

#### Оновіть metadataBase в layout.tsx
```typescript
metadataBase: new URL('https://your-actual-domain.com'),
```

#### Налаштуйте EmailJS
1. Зареєструйтеся на [EmailJS](https://www.emailjs.com/)
2. Створіть email service
3. Створіть email template
4. Оновіть конфігурацію в `src/app/components/ContactForm.tsx`:
   - `service_qhx09ai` - замініть на ваш Service ID
   - `template_97afpjb` - замініть на ваш Template ID
   - `-j1Fh_CLrCOK3u27J` - замініть на ваш Public Key

#### Оновіть посилання на Telegram бот
Замініть `http://t.me/solfias_bot` на ваш реальний Telegram бот у файлах:
- `src/app/components/Hero.tsx`
- `src/app/components/ProductInfo.tsx`
- `src/app/components/ContactForm.tsx`
- `src/app/components/Reviews.tsx`
- `src/app/components/WhyChooseUs.tsx`

#### Оновіть контактну інформацію
У `src/app/components/Footer.tsx` та `src/app/components/Hero.tsx`:
- Телефон: `+380501234567`
- Email: `info@salt.com.ua`
- Адреса: `Україна, м. Київ`

## Варіанти деплою

### 1. Vercel (Рекомендовано)

#### Через GitHub
1. Завантажте код на GitHub
2. Зайдіть на [vercel.com](https://vercel.com)
3. Підключіть GitHub репозиторій
4. Vercel автоматично визначить Next.js проект
5. Натисніть "Deploy"

#### Через CLI
```bash
npm i -g vercel
vercel login
vercel
```

### 2. Netlify

1. Створіть збірку:
```bash
npm run build
```

2. Завантажте папку `.next` на Netlify або підключіть GitHub репозиторій

### 3. Власний сервер

#### Використовуючи PM2
```bash
npm install -g pm2
npm run build
pm2 start npm --name "salt-landing" -- start
```

#### Використовуючи Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Після деплою

### 1. Перевірте функціональність
- [ ] Сайт відкривається
- [ ] Всі секції відображаються коректно
- [ ] Анімації працюють
- [ ] Форма зворотного зв'язку працює
- [ ] Посилання на Telegram працюють
- [ ] Мобільна версія працює коректно

### 2. SEO налаштування
- [ ] Додайте сайт в Google Search Console
- [ ] Створіть sitemap.xml
- [ ] Налаштуйте Google Analytics (якщо потрібно)

### 3. Моніторинг
- [ ] Налаштуйте моніторинг доступності
- [ ] Перевірте швидкість завантаження на PageSpeed Insights

## Підтримка

Для оновлення контенту:
1. Внесіть зміни в код
2. Зробіть commit і push в GitHub
3. Vercel/Netlify автоматично оновить сайт

Для технічної підтримки зверніться до розробника.
