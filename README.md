# React Components: Stateful vs Stateless

## Опис проекту

Цей проект демонструє базові концепції React — різницю між **stateful** (становими) та **stateless** (безстановими) компонентами.  
Він містить:

- **Stateless компонент** (`PageTitle`), який приймає пропси і відображає їх без збереження власного стану.  
- **Stateful функціональний компонент** (`ClickCounter`) з використанням React-хука `useState`.  
- **Stateful класовий компонент** (`ClickCounterClass`), який керує своїм станом через `this.state` та `this.setState`.

## Інструкції зі встановлення та запуску

### 1. Клонуйте репозиторій:

```bash
git clone <адреса_репозиторію>
cd my-react-app
```

### 2. Встановіть залежності:

```bash
npm install
```

### 3. Запустіть проект локально:

```bash
npm run dev
```

Відкрийте у браузері адресу, що виведе команда (наприклад, http://localhost:5173).

## Структура проекту
```text
react-state-stateless/
├── src/
│   ├── components/
│   │   ├── StatelessComponent.jsx   (PageTitle)
│   │   ├── StatefulComponent.jsx   (ClickCounter)
│   │   └── ClassComponent.jsx       (ClickCounterClass)
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── README.md
└── ...
```

## Опис компонентів
### `PageTitle` — Stateless компонент

- Приймає проп title і просто відображає його в `<h1>`.
- Не має власного стану.
- Використовує деструктуризацію пропсів для зручності.

### `ClickCounte`r — Stateful функціональний компонент

- Використовує хук useState для керування лічильником кліків.
- При кліку на кнопку збільшує лічильник та відображає його значення.
- Показує сучасний підхід до створення stateful компонентів у React.

### `ClickCounterClass` — Stateful класовий компонент

- Створений за класовим синтаксисом.
- Зберігає стан у this.state.
- Оновлює стан через this.setState.
- Демонструє класовий підхід та життєвий цикл React-компонентів.

## Демо проекту

Розгорнуто на Vercel: https://fullstack-hw39-react-states.vercel.app/

## Критерії оцінювання

- Проект ініціалізовано за допомогою Vite.
- Компоненти відповідають завданню: є stateful та stateless.
- Код структурований, розділений на окремі файли.
- Проект запускається без помилок.
- README.md містить зрозумілі інструкції.
- Розгорнуто на платформі хостингу (Vercel).