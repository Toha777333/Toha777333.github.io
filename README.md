# Портфолио — Антон Барсуков

Одностраничный сайт-портфолио. Построен на **React + Vite + Tailwind CSS**. Весь контент берётся из `portfolio/src/data/data.json`. Готов к деплою на GitHub Pages по адресу [Toha777333.github.io](https://Toha777333.github.io).

---

## Стек технологий

| Технология | Роль |
|---|---|
| **React 18** | UI-компоненты, рендеринг данных |
| **Vite** | Сборщик проекта, dev-сервер с горячей перезагрузкой |
| **Tailwind CSS v3** | Утилитарные CSS-классы, адаптивность |
| **Lucide React** | Иконки (стрелки, ссылки) |

---

## Структура проекта

```
Toha777333.github.io/
├── portfolio/                  ← папка с исходным кодом
│   ├── public/
│   │   └── assets/projects/    ← медиафайлы проектов (jpg, mp4)
│   ├── src/
│   │   ├── data/
│   │   │   └── data.json       ← ВЕСЬ контент сайта (имя, проекты, ссылки)
│   │   ├── components/
│   │   │   ├── Hero.jsx
│   │   │   ├── Achievements.jsx
│   │   │   ├── FeaturedProjects.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ArchiveProjects.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
├── Example/                    ← исходные макеты и данные (не трогать)
└── README.md
```

---

## Быстрый старт

### 1. Убедись, что установлен Node.js

Скачать: https://nodejs.org (версия 18 или новее)

Проверить в терминале:
```bash
node --version   # должно показать v18.x.x или выше
npm --version    # должно показать 9.x.x или выше
```

### 2. Установи зависимости (один раз)

```bash
cd portfolio
npm install
```

---

## Работа с Vite

### ▶️ Запустить сайт локально (режим разработки)

```bash
cd portfolio
npm run dev
```

После запуска в терминале появится:
```
  VITE v8.x  ready in 200ms

  ➜  Local:   http://localhost:5173/
```

Открой в браузере: **http://127.0.0.1:5173/**

> 💡 **Горячая перезагрузка**: любое изменение в коде → браузер обновится автоматически, без F5.

---

### ⏹️ Остановить dev-сервер

В терминале, где запущен сервер, нажми:
```
Ctrl + C
```

Затем подтверди: `Y` и Enter (если спросит).

---

### 📦 Собрать финальный бандл (для деплоя)

```bash
cd portfolio
npm run build
```

Создаётся папка `portfolio/dist/` — это готовый статический сайт (HTML + CSS + JS). Именно эти файлы нужно выложить на GitHub Pages.

---

## Как изменить контент

Всё содержимое сайта хранится в одном файле:

**`portfolio/src/data/data.json`**

Открой его и отредактируй:

- `personalInfo` — имя, заголовок, email, ссылки на Telegram / GitHub / Google Play
- `achievements` — 4 карточки с метриками
- `featuredProjects` — до 6 главных проектов (каждый с медиафайлом)
- `archiveProjects` — компактный список проектов в таблице

### Добавить медиафайл к проекту

1. Положи файл в `portfolio/public/assets/projects/`
2. В `data.json` укажи путь:
```json
"media": {
  "type": "image",
  "url": "/assets/projects/my-project.jpg"
}
```
или для видео:
```json
"media": {
  "type": "video",
  "url": "/assets/projects/my-project.mp4"
}
```

---

## Деплой на GitHub Pages

Сайт будет доступен по адресу: **https://Toha777333.github.io**

### Как это работает

Исходный код (в папке `portfolio/`) живёт в ветке `main`. GitHub Actions автоматически собирает его и отправляет результат в отдельную ветку `gh-pages`. GitHub Pages смотрит именно на неё.

```
main (твои исходники)       gh-pages (собранный сайт)
─────────────────────       ──────────────────────────
portfolio/                  index.html
  src/                      assets/
  data.json         →           index-xxx.css
  ...               Actions     index-xxx.js
README.md           строит  favicon.svg
.github/            ──────>
```

> ✅ Исходники всегда чистые. При каждом обновлении просто делай `git push` — сайт пересобирается сам.

---

### Настройка (один раз)

#### Шаг 1. Файл workflow уже создан

Файл `.github/workflows/deploy.yml` уже находится в репозитории. Он запускает сборку автоматически при каждом `git push` в ветку `main`.

#### Шаг 2. Запушить в GitHub

```bash
git add .
git commit -m "feat: add portfolio and deploy workflow"
git push origin main
```

После пуша GitHub Actions запустит сборку (~1-2 минуты). Создастся ветка `gh-pages`.

#### Шаг 3. Включить GitHub Pages

1. Открой репозиторий на GitHub
2. Перейди в `Settings` → `Pages`
3. Выбери:
   - **Source**: `Deploy from a branch`
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. Нажми **Save**

Через 1–2 минуты сайт появится на **https://Toha777333.github.io** ✅

---

### Как обновлять сайт в будущем

Просто вноси изменения (в `data.json`, компоненты, стили) и пушь в `main`:

```bash
git add .
git commit -m "update: изменил описание проекта"
git push origin main
```

GitHub Actions автоматически пересоберёт и обновит сайт. Больше ничего делать не нужно.

---



## Частые вопросы

**Q: Сайт открывается локально, но на GitHub Pages сломана вёрстка / не грузятся файлы?**
A: Проверь, что в `vite.config.js` есть `base: './'` — это обязательное условие для корректной работы на статическом хостинге.

**Q: Как добавить ещё проекты в Featured Projects?**
A: Добавь объект в массив `featuredProjects` в `data.json`. Сетка автоматически расширится.

**Q: Как остановить и снова запустить сервер?**
A:
```bash
# Остановить: Ctrl + C в терминале с сервером

# Запустить снова:
cd portfolio
npm run dev
```

**Q: Внёс изменения, но сайт на GitHub Pages не обновился?**
A: GitHub Pages обновляется с задержкой 1–3 минуты. Подожди или сделай хард-рефреш в браузере: `Ctrl + Shift + R`.

---

## Авторство

© 2025 Антон Барсуков — Built for games, systems, and ideas that need to ship.
