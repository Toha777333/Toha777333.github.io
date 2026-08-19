# Руководство по редактированию сайта

Это практическая шпаргалка: что менять, в каком файле, и как это сразу увидеть.

---

## Подготовка: запусти локальный сервер

Перед любыми правками открой терминал и запусти dev-сервер:

```bash
cd portfolio
npm run dev
```

Открой браузер: **http://127.0.0.1:5173/**

Теперь все изменения в коде будут отображаться в браузере **мгновенно** — сохранил файл, страница обновилась сама.

---

## 1. Изменить текстовый контент

**Файл:** `portfolio/src/data/data.json`

Это единственный источник данных для всего сайта. Открой его и меняй нужные поля.

### Личная информация

```json
"personalInfo": {
  "name": "Антон Барсуков",          ← имя в шапке
  "headline": "Разрабатываю игры с 2018 года",  ← главный заголовок Hero
  "subHeadline": "Технический лидер...",         ← подзаголовок Hero
  "email": "a.barsukov_00@mail.ru",
  "telegram": "https://t.me/toha777333",
  "github": "https://github.com/Toha777333",
  "googlePlay": "https://play.google.com/store/..."
}
```

### Карточки достижений

```json
"achievements": [
  {
    "id": 1,
    "metric": "Почти 7 лет",           ← крупная цифра/текст
    "description": "коммерческого опыта"  ← пояснение под цифрой
  },
  ...
]
```

> ⚠️ Карточек ровно 4 — они образуют сетку 2×2. Первая — тёмная, вторая — с синей цифрой.

### Главные проекты (Featured Projects)

```json
"featuredProjects": [
  {
    "id": "уникальный-id",
    "title": "Название проекта",
    "description": "Описание проекта.",
    "techStack": ["Unity", "C#", "Android SDK"],
    "media": {
      "type": "image",        ← "image" или "video"
      "url": "/assets/projects/файл.jpg"
    },
    "links": {
      "sourceCode": null,     ← ссылка на GitHub или null
      "liveDemo": "https://..."  ← ссылка на демо или null
    }
  }
]
```

### Архив проектов (Project Archive)

```json
"archiveProjects": [
  {
    "id": "archive-1",
    "year": "2024",
    "title": "Название проекта",
    "techStack": ["Golang", "REST API"],
    "link": null   ← ссылка или null
  }
]
```

---

## 2. Добавить медиафайл к проекту

**Шаг 1.** Положи файл в папку:
```
portfolio/public/assets/projects/
```

**Шаг 2.** В `data.json` укажи путь:
```json
"media": {
  "type": "image",
  "url": "/assets/projects/my-game.jpg"
}
```

Для видео:
```json
"media": {
  "type": "video",
  "url": "/assets/projects/my-game.mp4"
}
```

> 💡 Видео воспроизводится автоматически, без звука, по кругу. Формат: MP4, желательно сжатый (< 5 МБ).

---

## 3. Изменить цвета сайта

**Файл:** `portfolio/src/index.css`

В начале файла находятся CSS-переменные — цвета всего сайта:

```css
:root {
  --color-bg: #F5F2EE;       ← фон всей страницы (бежевый)
  --color-text: #1A1A1A;     ← основной цвет текста
  --color-accent: #2563EB;   ← синий акцент (теги, ссылки, метрики)
  --color-footer: #111111;   ← фон футера
}
```

Просто замени HEX-значение — изменение применится ко всему сайту сразу.

**Пример** — сменить акцентный цвет с синего на зелёный:
```css
--color-accent: #16A34A;
```

---

## 4. Изменить шрифт

**Файл:** `portfolio/index.html` — смени ссылку на Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:...&display=swap" rel="stylesheet" />
```

Замени `Inter` на нужный шрифт, например `Outfit` или `Space Grotesk`.

**Файл:** `portfolio/src/index.css` — примени шрифт:
```css
body {
  font-family: 'Outfit', sans-serif;  ← сюда новое название
}
```

---

## 5. Изменить отступы, размеры, сетку

Все отступы и размеры задаются через **Tailwind CSS классы** прямо в JSX-компонентах.

**Файлы компонентов:**
```
portfolio/src/components/
├── Hero.jsx              ← секция с именем и кнопками
├── Achievements.jsx      ← сетка 2×2 с метриками
├── FeaturedProjects.jsx  ← сетка главных проектов
├── ProjectCard.jsx       ← отдельная карточка проекта
├── ArchiveProjects.jsx   ← таблица архива
└── Footer.jsx            ← тёмный футер
```

### Как читать Tailwind-классы

```jsx
<section className="max-w-[680px] mx-auto px-6 pb-24">
```

| Класс | Что делает |
|---|---|
| `max-w-[680px]` | максимальная ширина секции 680px |
| `mx-auto` | центрирует по горизонтали |
| `px-6` | отступ слева/справа 24px |
| `pb-24` | отступ снизу 96px |

### Полезные примеры изменений

**Сделать сайт шире (например 800px):**
```jsx
// Hero.jsx, Achievements.jsx и т.д. — замени во всех секциях:
className="max-w-[800px] mx-auto ..."
```

**Изменить размер заголовка Hero:**
```jsx
// Hero.jsx, строка с <h1>:
className="font-black text-[72px] ..."
//                       ↑ меняй это значение
```

**Изменить отступы между секциями:**
```jsx
// В каждом компоненте найди pb-24 или pb-32 и измени:
className="... pb-16"   ← меньше отступ снизу
```

---

## 6. Изменить цвета карточек проектов

**Файл:** `portfolio/src/components/ProjectCard.jsx`

В начале файла массив цветов для каждой карточки:

```js
const CATEGORY_COLORS = [
  { label: 'SYSTEM / 01',   bg: '#3B5BDB' },  ← 1-я карточка (синяя)
  { label: 'BACKEND / 02',  bg: '#1A1A1A' },  ← 2-я карточка (чёрная)
  { label: 'GAMEPLAY / 03', bg: '#E8441E' },  ← 3-я карточка (красная)
  { label: 'PIPELINE / 04', bg: '#12B886' },  ← 4-я карточка (зелёная)
  { label: 'PC GAME / 05',  bg: '#7048E8' },  ← 5-я карточка (фиолетовая)
  { label: 'DEV TOOL / 06', bg: '#E91E8C' },  ← 6-я карточка (розовая)
]
```

Меняй `bg` (цвет фона когда нет медиафайла) и `label` (подпись на карточке).

---

## 7. Добавить новый раздел на сайт

**Шаг 1.** Создай файл компонента в `portfolio/src/components/NewSection.jsx`:

```jsx
export default function NewSection() {
  return (
    <section className="max-w-[680px] mx-auto px-6 pb-24">
      <h2>Новый раздел</h2>
    </section>
  )
}
```

**Шаг 2.** Подключи в `portfolio/src/App.jsx`:

```jsx
import NewSection from './components/NewSection'

function App() {
  return (
    <main>
      <Hero ... />
      <Achievements ... />
      <NewSection />        {/* ← вставь здесь */}
      <FeaturedProjects ... />
      ...
    </main>
  )
}
```

---

## Цикл работы над изменениями

```
1. npm run dev          ← запусти один раз
2. Открой файл в редакторе и внеси изменение
3. Сохрани файл (Ctrl+S)
4. Посмотри результат в браузере (обновится автоматически)
5. Повторяй шаги 2–4

Когда доволен результатом:
6. git add .
7. git commit -m "описание изменений"
8. git push origin main   ← GitHub Actions задеплоит автоматически
```
