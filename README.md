# Interactive Presentation Website

A modern, interactive presentation website built with React, Vite, Tailwind CSS, and Framer Motion. Features horizontal sliding between full-screen sections with smooth animations.

## 🚀 Features

- ⚡ **Fast Development** - Powered by Vite
- 🎨 **Beautiful Styling** - Tailwind CSS for responsive design
- ✨ **Smooth Animations** - Framer Motion for fluid transitions
- ⌨️ **Keyboard Navigation** - Use arrow keys to navigate between slides
- 🖱️ **Mouse Controls** - Click navigation buttons or indicators
- 📱 **Fully Responsive** - Works on all screen sizes
- 🎯 **Full-Screen Slides** - Each slide takes 100vh × 100vw

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

## 🎮 Usage

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173`

3. Navigate between slides using:
   - **Arrow Keys**: ← (previous) and → (next)
   - **Navigation Buttons**: Click the arrows on the sides
   - **Slide Indicators**: Click the dots at the bottom

## 🏗️ Project Structure

```
├── src/
│   ├── components/
│   │   ├── PresentationSlider.jsx  # Main slider component
│   │   ├── Slide.jsx                # Individual slide wrapper
│   │   └── Slides.jsx               # Example slide components
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles
├── index.html                       # HTML template
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
├── vite.config.js                  # Vite configuration
└── package.json                    # Dependencies
```

## 🎨 Customization

### Adding New Slides

1. Create a new slide component in `src/components/Slides.jsx`:
```jsx
export const MyNewSlide = () => (
  <Slide bgColor="bg-gradient-to-br from-blue-900 to-purple-900">
    <h2 className="text-6xl font-bold text-white">My Custom Slide</h2>
    <p className="text-xl text-blue-200">Your content here</p>
  </Slide>
);
```

2. Add it to the slides array in `src/App.jsx`:
```jsx
const slides = [
  <TitleSlide key="slide1" />,
  <MyNewSlide key="slide2" />,
  // ... other slides
];
```

### Customizing Animations

Edit the `slideVariants` in `src/components/PresentationSlider.jsx` to change transition effects:
```jsx
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};
```

### Styling

- Modify `tailwind.config.js` to customize colors, fonts, and other design tokens
- Edit `src/index.css` for global styles
- Each slide can have its own unique styling via Tailwind classes

## 🛠️ Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎯 Key Components

### PresentationSlider
The main component that handles:
- Slide navigation state
- Keyboard event listeners
- Animation direction
- Navigation controls rendering

### Slide
A wrapper component for individual slides that provides:
- Full-screen layout (100vh × 100vw)
- Customizable background colors
- Centered content container

## 🌟 Technologies Used

- [React 18](https://react.dev/) - UI library
- [Vite 5](https://vitejs.dev/) - Build tool
- [Tailwind CSS 3](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion 10](https://www.framer.com/motion/) - Animation library

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to customize and extend this project for your needs!
