# KANDICHEMSOLS - Chemistry Database

A comprehensive, free chemistry database featuring named reactions, protection groups, purification techniques, reagents, and common reactions. Built with React, Vite, and following MVC architecture.

## 🚀 Quick Start

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✨ Recent Updates

### New Features
- ✅ **Interactive TextPressure Component**: Dynamic text that responds to mouse/touch with font variations
- ✅ **MVC Architecture**: Complete Model-View-Controller implementation
- ✅ **Updated Hero Section**: Interactive "CHEMISTRY" text with smooth animations
- ✅ **Dark Mode Support**: Full theme integration with dynamic color switching

### Hero Section Changes
- Removed "Discover" from hero title
- Implemented interactive TextPressure effect for "CHEMISTRY"
- Enhanced user experience with responsive text animations

## 📚 Documentation

We have comprehensive documentation to help you understand and work with the codebase:

| Document | Description |
|----------|-------------|
| [📖 Documentation Index](./DOCUMENTATION_INDEX.md) | Start here - Index of all documentation |
| [⚡ Quick Reference](./QUICK_REFERENCE.md) | Quick lookup guide for daily development |
| [🏗️ MVC Architecture](./MVC_ARCHITECTURE.md) | Complete architecture explanation |
| [🔄 Migration Guide](./MIGRATION_GUIDE.md) | How to migrate components to MVC |
| [✅ Implementation Summary](./IMPLEMENTATION_SUMMARY.md) | Complete implementation details |
| [🎨 Visual Guide](./VISUAL_GUIDE.md) | Architecture diagrams and flowcharts |

**👉 New to the project? Start with [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)**

## 🏗️ Project Structure

```
src/
├── models/              # Data models (MVC)
│   └── heroModel.js
├── controllers/         # Business logic (MVC)
│   └── heroController.js
├── views/              # View layer (MVC)
│   ├── components/
│   │   ├── common/
│   │   │   └── TextPressure.jsx
│   │   └── home/
│   │       └── HeroView.jsx
│   └── pages/
├── components/         # React components (Legacy)
│   ├── common/
│   ├── home/
│   └── pages/
├── context/           # React context providers
├── Layouts/           # Layout components
└── assets/            # Static assets
```

## 🎨 Features

### Chemistry Database
- **Named Reactions**: Famous chemical reactions with detailed explanations
- **Protection Groups**: Chemical group protection strategies
- **Purification Techniques**: Various purification methods
- **Common Reagents**: Comprehensive reagent information
- **Common Reactions**: Essential organic reactions

### Technical Features
- ⚛️ React 18 with Hooks
- 🎭 Framer Motion animations
- 🎨 Tailwind CSS styling
- 🌓 Dark mode support
- 📱 Fully responsive design
- 🎯 MVC architecture
- ⚡ Vite for fast development

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11.11
- **Routing**: React Router DOM 6.27
- **Icons**: React Icons 5.3
- **3D Rendering**: Three.js 0.169 / OGL 1.0

## 🎯 MVC Architecture

This project follows the Model-View-Controller pattern:

- **Models** (`src/models/`): Data structures and business entities
- **Views** (`src/views/`): UI components and presentation
- **Controllers** (`src/controllers/`): Business logic and data processing

[Learn more about our MVC implementation →](./MVC_ARCHITECTURE.md)

## 🧩 Key Components

### TextPressure
Interactive text component with variable font properties that respond to mouse/touch movement.

```jsx
import TextPressure from './views/components/common/TextPressure';

<TextPressure
  text="CHEMISTRY"
  textColor="#0369a1"
  minFontSize={32}
  flex={true}
  width={true}
  weight={true}
  italic={true}
/>
```

[View component documentation →](./QUICK_REFERENCE.md#using-textpressure-in-other-components)

### Hero Section
Dynamic landing section with 3D molecule viewer and interactive text.

### Category Cards
Animated cards showcasing different chemistry categories with 3D carousel effect.

## 🎨 Theming

The app supports light and dark modes via ThemeContext:

```jsx
import { useTheme } from './context/ThemeContext';

const { isDark, toggleTheme } = useTheme();
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-optimized interactions
- Adaptive layouts

## 🧪 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Code Style
- ESLint configuration included
- React hooks rules enforced
- Consistent code formatting

## 📦 Dependencies

### Main Dependencies
- react: ^18.3.1
- react-dom: ^18.3.1
- react-router-dom: ^6.27.0
- framer-motion: ^11.11.11
- three: ^0.169.0
- ogl: ^1.0.8

### Dev Dependencies
- vite: ^5.4.10
- tailwindcss: ^3.4.14
- eslint: ^9.13.0
- postcss: ^8.4.47

[View full package.json](./package.json)

## 🤝 Contributing

1. Follow the MVC architecture pattern
2. Use the migration guide for new components
3. Test thoroughly before committing
4. Document your changes

[Read migration guide →](./MIGRATION_GUIDE.md)

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- TextPressure component ported from [CodePen](https://codepen.io/JuanFuentes/full/rgXKGQ)
- Compressa VF font by Preusstype
- Chemistry data compiled from various educational resources

## 📞 Support

For questions or issues:
1. Check the [Documentation Index](./DOCUMENTATION_INDEX.md)
2. Review the [Quick Reference](./QUICK_REFERENCE.md)
3. See the [Visual Guide](./VISUAL_GUIDE.md) for diagrams

---

**Built with ❤️ for chemistry enthusiasts and students**

**Version**: 1.0.0 | **Status**: ✅ Active Development
