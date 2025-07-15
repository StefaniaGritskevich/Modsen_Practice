## Kanban Board - Управление задачами
Это приложение Kanban доски, разработанное на React с TypeScript, Redux Toolkit и styled-components. Оно позволяет управлять задачами, перемещая их между колонками, а также редактировать и удалять задачи и колонки.

📋 Функционал
Задачи:
Добавление новых задач
Редактирование существующих задач
Удаление задач
Перемещение задач между колонками (drag-and-drop)
Установка приоритета (Высокий, Средний, Низкий)
Колонки:
Добавление новых колонок
Редактирование названий колонок
Удаление колонок
Перемещение задач внутри колонки
Интерфейс:
Адаптивный дизайн
Темная/светлая тема
Локальное сохранение состояния (redux-persist)

🚀 Запуск проекта
Предварительные требования
Node.js (версия 16 или выше)
npm (версия 8 или выше)

Установка:
Клонируйте репозиторий:
git clone https://github.com/ваш-username/kanban-board.git
Перейдите в директорию проекта:
cd kanban-board

Установите зависимости:
npm install

Запуск в development режиме
npm start
Приложение будет доступно по адресу: http://localhost:3000

Сборка для production
npm run build

Линтинг кода
npm run lint

Форматирование кода (Prettier)
npm run format

🛠 Технологии
Frontend

React 19

TypeScript

Redux Toolkit

styled-components

React DnD (для drag-and-drop)

redux-persist

Инструменты разработки

ESLint

Prettier

Husky (pre-commit хуки)

Jest + Testing Library

📁 Структура проекта
text
src/
├── components/       # Компоненты приложения
├── store/            # Redux store и slices
├── styles/           # Глобальные стили и темы
├── types/            # TypeScript типы
├── utils/            # Вспомогательные функции
├── App.tsx           # Главный компонент
└── index.tsx         # Точка входа
