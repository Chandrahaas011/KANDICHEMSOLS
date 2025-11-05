# Quick Reference Guide

## 🚀 What Changed?

### Hero Section
- ❌ **Removed**: "Discover" text
- ✅ **Added**: Interactive "CHEMISTRY" text with TextPressure effect
- 🎨 **Effect**: Text responds to mouse movement with font variations

## 📁 New File Structure

```
src/
├── models/                          # Data Layer
│   ├── heroModel.js                 # Hero data
│   └── index.js
│
├── controllers/                     # Business Logic Layer
│   ├── heroController.js            # Hero logic
│   └── index.js
│
├── views/                           # Presentation Layer
│   ├── components/
│   │   ├── common/
│   │   │   └── TextPressure.jsx    # Interactive text component
│   │   └── home/
│   │       └── HeroView.jsx        # MVC Hero component
│   └── index.js
│
└── components/                      # Legacy (still working)
    └── home/
        └── Hero.jsx                 # Updated with TextPressure
```

## 🎯 Quick Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Using TextPressure in Other Components

```jsx
import TextPressure from '../../views/components/common/TextPressure';
import { useTheme } from '../../context/ThemeContext';

function MyComponent() {
  const { isDark } = useTheme();
  
  return (
    <div style={{ height: '200px' }}>
      <TextPressure
        text="YOUR TEXT"
        textColor={isDark ? "#ffffff" : "#000000"}
        minFontSize={36}
        flex={true}
        width={true}
        weight={true}
        italic={true}
      />
    </div>
  );
}
```

## 📊 Component Props Reference

### TextPressure Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | "Compressa" | Text to display |
| `textColor` | string | "#FFFFFF" | Text color |
| `minFontSize` | number | 24 | Minimum font size |
| `width` | boolean | true | Enable width variation |
| `weight` | boolean | true | Enable weight variation |
| `italic` | boolean | true | Enable italic variation |
| `alpha` | boolean | false | Enable opacity variation |
| `flex` | boolean | true | Use flexbox for spacing |
| `stroke` | boolean | false | Enable text stroke |
| `scale` | boolean | false | Enable vertical scaling |
| `className` | string | "" | Additional CSS classes |

## 🎨 Color Schemes

### Hero Section Colors

**Light Mode:**
- Text: `#0369a1` (sky-700)
- Background: White/Light

**Dark Mode:**
- Text: `#7dd3fc` (sky-300)
- Background: Dark/Gray

### Usage in Code:
```jsx
const { isDark } = useTheme();

const textColor = isDark ? "#7dd3fc" : "#0369a1";
```

## 🧪 Testing the Changes

### Visual Test
1. Open `http://localhost:5173`
2. Look at hero section
3. Move mouse over "CHEMISTRY"
4. Watch text morph and change
5. Toggle dark mode
6. Verify color changes

### Functionality Test
- ✅ Text responds to mouse movement
- ✅ Font weight changes (thin to bold)
- ✅ Font width changes (narrow to wide)
- ✅ Italic angle changes
- ✅ Dark mode works
- ✅ Mobile touch works
- ✅ Responsive design intact

## 📝 MVC Pattern Quick Guide

### When to Use Each Layer

**Model** (`src/models/`)
- Static data
- Data structures
- Configuration

**Controller** (`src/controllers/`)
- Business logic
- Data processing
- Helper functions

**View** (`src/views/`)
- UI rendering
- User interactions
- Visual presentation

### Example Flow

1. **Model** defines data:
```javascript
// heroModel.js
export const heroData = {
  title: "Chemistry for All"
};
```

2. **Controller** processes it:
```javascript
// heroController.js
static getTitle() {
  return heroData.title.toUpperCase();
}
```

3. **View** displays it:
```jsx
// HeroView.jsx
const title = HeroController.getTitle();
return <h1>{title}</h1>;
```

## 🔄 Switching Between Versions

### Current (Legacy with TextPressure)
```jsx
import Hero from '../home/Hero';
```

### New MVC Version
```jsx
import { HeroView as Hero } from '../../views';
```

Both work identically! Choose based on your preference.

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `MVC_ARCHITECTURE.md` | Detailed architecture docs |
| `MIGRATION_GUIDE.md` | Step-by-step migration |
| `IMPLEMENTATION_SUMMARY.md` | Complete implementation details |
| `QUICK_REFERENCE.md` | This file - quick lookup |

## 🐛 Troubleshooting

### Text Not Interactive
- Check browser console for errors
- Verify import path is correct
- Ensure parent div has defined height

### Dark Mode Not Working
- Check ThemeContext provider in main.jsx
- Verify `isDark` variable usage (not `isDarkMode`)
- Check localStorage for saved theme

### Font Not Loading
- Check network tab for font download
- Verify CDN URL is accessible
- Consider self-hosting font for production

### Imports Not Working
```jsx
// ✅ Correct
import TextPressure from '../../views/components/common/TextPressure';

// ❌ Wrong
import TextPressure from './TextPressure';
```

## 💡 Pro Tips

1. **Performance**: TextPressure uses requestAnimationFrame - very smooth!
2. **Mobile**: Touch events work, but mouse hover is more dramatic
3. **Accessibility**: Text remains readable even during animation
4. **Customization**: All props are optional - use defaults or customize
5. **Dark Mode**: Always use theme context for colors

## 📞 Need Help?

1. Check console for errors
2. Read the detailed docs in `MVC_ARCHITECTURE.md`
3. Review example implementation in `HeroView.jsx`
4. Check `heroController.js` for available methods

## ✅ Success Checklist

- [ ] Dev server running (`npm run dev`)
- [ ] No console errors
- [ ] Hero section displays "for All" + interactive "CHEMISTRY"
- [ ] Text responds to mouse movement
- [ ] Dark mode toggle works
- [ ] Mobile view works
- [ ] All animations smooth

---

**Quick Start**: Run `npm run dev` and visit `http://localhost:5173` 🚀
