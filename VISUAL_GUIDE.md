# MVC Architecture Visual Guide

```
┌─────────────────────────────────────────────────────────────────┐
│                      USER INTERACTION                            │
│                    (Browser/Mobile App)                          │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│                          VIEW LAYER                              │
│                    (Presentation/UI)                             │
│  ┌────────────────────────────────────────────────────────┐     │
│  │  src/views/                                            │     │
│  │  ├── components/                                       │     │
│  │  │   ├── common/                                       │     │
│  │  │   │   └── TextPressure.jsx    <-- Interactive Text │     │
│  │  │   └── home/                                         │     │
│  │  │       └── HeroView.jsx         <-- Hero Section     │     │
│  │  └── pages/                                            │     │
│  │      └── (Page components)                             │     │
│  └────────────────────────────────────────────────────────┘     │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             │ Requests Data
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│                      CONTROLLER LAYER                            │
│                    (Business Logic)                              │
│  ┌────────────────────────────────────────────────────────┐     │
│  │  src/controllers/                                      │     │
│  │  └── heroController.js                                 │     │
│  │      ├── getHeroData()          <-- Get formatted data│     │
│  │      ├── getTextPressureConfig()<-- Get config        │     │
│  │      ├── getAnimationConfig()   <-- Get animations    │     │
│  │      └── getScrollConfig()      <-- Get scroll setup  │     │
│  └────────────────────────────────────────────────────────┘     │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             │ Fetches Data
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│                        MODEL LAYER                               │
│                      (Data/Entities)                             │
│  ┌────────────────────────────────────────────────────────┐     │
│  │  src/models/                                           │     │
│  │  └── heroModel.js                                      │     │
│  │      ├── badge: { text, colors }                       │     │
│  │      ├── title: { line1, interactive }                 │     │
│  │      ├── description: string                           │     │
│  │      ├── cta: { primary, secondary }                   │     │
│  │      └── molecule: { height }                          │     │
│  └────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow Diagram

```
┌─────────┐      ┌────────────┐      ┌──────────┐      ┌──────┐
│  Model  │ ───> │ Controller │ ───> │   View   │ ───> │ User │
└─────────┘      └────────────┘      └──────────┘      └──────┘
     ↑                                      │               │
     │                                      │               │
     └──────────────────────────────────────┴───────────────┘
                    Update/Modify Data
```

## Component Relationships

```
HomePage
    │
    └── Hero (Current) or HeroView (MVC)
            │
            ├── Uses: TextPressure Component
            │         │
            │         └── Interactive text effect
            │
            ├── Uses: MoleculeViewer Component
            │         │
            │         └── 3D molecule display
            │
            └── Uses: ThemeContext
                      │
                      └── Dark mode state (isDark)
```

## File Import Flow

```
Hero.jsx
    │
    ├── import TextPressure from '../../views/components/common/TextPressure'
    ├── import MoleculeViewer from '../common/MoleculeViewer'
    ├── import { useTheme } from '../../context/ThemeContext'
    └── import { motion, useScroll, useTransform } from 'framer-motion'
```

```
HeroView.jsx (MVC)
    │
    ├── import TextPressure from '../components/common/TextPressure'
    ├── import MoleculeViewer from '../../components/common/MoleculeViewer'
    ├── import HeroController from '../../controllers/heroController'
    ├── import { useTheme } from '../../context/ThemeContext'
    └── import { motion, useScroll, useTransform } from 'framer-motion'
            │
            └── HeroController
                    │
                    └── import { heroData } from '../models/heroModel'
```

## TextPressure Animation Flow

```
User Moves Mouse
        │
        ↓
Mouse/Touch Event Listener
        │
        ↓
Update cursor position (cursorRef)
        │
        ↓
requestAnimationFrame loop
        │
        ↓
Calculate distance from cursor to each character
        │
        ↓
Apply font variations based on distance:
    ├── Font Weight (wght): 100-900
    ├── Font Width (wdth): 5-200
    ├── Italic (ital): 0-1
    └── Opacity (alpha): 0-1
        │
        ↓
Render updated characters with smooth transitions
```

## Theme Context Flow

```
ThemeProvider (in main.jsx)
        │
        ├── State: isDark (boolean)
        ├── Function: toggleTheme()
        └── Storage: localStorage
                │
                ↓
        useTheme() hook
                │
                ├── Used in: Hero.jsx
                ├── Used in: HeroView.jsx
                └── Returns: { isDark, toggleTheme }
                        │
                        ↓
                Apply dynamic colors:
                    - Light mode: #0369a1
                    - Dark mode: #7dd3fc
```

## Directory Structure Hierarchy

```
kandichemsols/
│
├── src/
│   ├── models/                    [NEW - Data Layer]
│   │   ├── heroModel.js
│   │   └── index.js
│   │
│   ├── controllers/               [NEW - Logic Layer]
│   │   ├── heroController.js
│   │   └── index.js
│   │
│   ├── views/                     [NEW - View Layer]
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   └── TextPressure.jsx
│   │   │   └── home/
│   │   │       └── HeroView.jsx
│   │   └── index.js
│   │
│   ├── components/                [LEGACY - Keep for now]
│   │   ├── common/
│   │   │   ├── MoleculeViewer.jsx
│   │   │   ├── NavBar.jsx
│   │   │   └── ...
│   │   ├── home/
│   │   │   ├── Hero.jsx           [Modified]
│   │   │   ├── CategoryCard.jsx
│   │   │   └── ...
│   │   └── pages/
│   │       └── HomePage.jsx
│   │
│   ├── context/
│   │   └── ThemeContext.jsx
│   │
│   ├── Layouts/
│   │   └── MainLayout.jsx
│   │
│   └── assets/
│       ├── gifs/
│       └── images/
│
├── MVC_ARCHITECTURE.md            [Documentation]
├── MIGRATION_GUIDE.md             [Migration Steps]
├── IMPLEMENTATION_SUMMARY.md      [Complete Summary]
├── QUICK_REFERENCE.md             [Quick Lookup]
└── VISUAL_GUIDE.md                [This File]
```

## State Management Flow

```
Component Mount
        │
        ↓
Initialize Refs
    ├── containerRef (DOM reference)
    ├── titleRef (title element)
    ├── spansRef (array of character spans)
    ├── mouseRef (smoothed mouse position)
    └── cursorRef (actual mouse position)
        │
        ↓
Set up Event Listeners
    ├── mousemove → Update cursorRef
    ├── touchmove → Update cursorRef
    └── resize → Recalculate sizes
        │
        ↓
Start Animation Loop (requestAnimationFrame)
    ├── Smooth cursor position
    ├── Calculate distances
    ├── Apply font variations
    └── Loop continuously
        │
        ↓
Component Unmount
    └── Cleanup event listeners
```

## Responsive Behavior

```
Screen Size
    │
    ├── Mobile (< 640px)
    │   ├── Single column layout
    │   ├── Smaller text (text-4xl)
    │   └── Touch events enabled
    │
    ├── Tablet (640px - 1024px)
    │   ├── Single column layout
    │   ├── Medium text (text-5xl)
    │   └── Mouse/Touch events
    │
    └── Desktop (> 1024px)
        ├── Two column layout
        ├── Large text (text-6xl)
        └── Mouse events optimal
```

## Color Theme System

```
Root Theme State (ThemeContext)
        │
        ├── Light Mode
        │   ├── Background: White/Light Gray
        │   ├── Text: Dark colors (#0369a1)
        │   └── Borders: Light colors
        │
        └── Dark Mode
            ├── Background: Dark Gray/Black
            ├── Text: Light colors (#7dd3fc)
            └── Borders: Dark colors
```

## Performance Optimization

```
Rendering Pipeline
        │
        ├── Initial Render
        │   ├── Calculate initial positions
        │   └── Set up refs and listeners
        │
        ├── Animation Loop (60fps)
        │   ├── requestAnimationFrame
        │   ├── Calculate only visible changes
        │   └── Update only affected elements
        │
        └── Optimization Techniques
            ├── useRef (avoid re-renders)
            ├── RAF (smooth 60fps)
            └── Distance-based updates
```

---

This visual guide shows the complete architecture and data flow of the MVC implementation with TextPressure integration.
