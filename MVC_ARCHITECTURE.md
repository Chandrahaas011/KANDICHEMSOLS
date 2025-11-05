# MVC Architecture Documentation

## Overview
This project follows the Model-View-Controller (MVC) architectural pattern for better code organization, maintainability, and separation of concerns.

## Directory Structure

```
src/
├── models/              # Data models and business entities
│   └── heroModel.js     # Hero section data model
├── controllers/         # Business logic and data manipulation
│   └── heroController.js # Hero section controller
├── views/              # Presentation layer (UI components)
│   ├── components/     # Reusable view components
│   │   ├── common/     # Common UI components
│   │   │   └── TextPressure.jsx
│   │   └── home/       # Home page specific components
│   │       └── HeroView.jsx
│   └── pages/          # Page-level view components
├── components/         # Legacy components (to be migrated)
├── context/           # React context providers
├── Layouts/           # Layout components
└── assets/            # Static assets
```

## MVC Pattern Explanation

### Model (src/models/)
- **Purpose**: Define data structures and business entities
- **Responsibilities**:
  - Store application data
  - Define data schemas
  - Manage data relationships
  
**Example**: `heroModel.js` contains all static data for the hero section including text, colors, and configuration.

### View (src/views/)
- **Purpose**: Handle presentation and user interface
- **Responsibilities**:
  - Render UI components
  - Handle user interactions
  - Display data from controllers
  - Manage component-specific state
  
**Example**: `HeroView.jsx` is the presentation component that renders the hero section UI.

### Controller (src/controllers/)
- **Purpose**: Manage business logic and data flow
- **Responsibilities**:
  - Process data from models
  - Handle business logic
  - Prepare data for views
  - Coordinate between models and views
  
**Example**: `heroController.js` processes hero data, configures animations, and provides methods for the view to access formatted data.

## How It Works Together

1. **Model** defines the data structure:
   ```javascript
   // heroModel.js
   export const heroData = {
     title: 'Chemistry for All',
     description: '...'
   };
   ```

2. **Controller** processes and formats data:
   ```javascript
   // heroController.js
   class HeroController {
     static getHeroData() {
       return heroData;
     }
     
     static getTextPressureConfig(isDarkMode) {
       // Business logic here
       return config;
     }
   }
   ```

3. **View** renders the UI:
   ```javascript
   // HeroView.jsx
   function HeroView() {
     const data = HeroController.getHeroData();
     const config = HeroController.getTextPressureConfig(isDarkMode);
     
     return <div>{/* Render UI */}</div>;
   }
   ```

## Benefits

1. **Separation of Concerns**: Each layer has a distinct responsibility
2. **Maintainability**: Changes to one layer don't affect others
3. **Testability**: Each layer can be tested independently
4. **Scalability**: Easy to add new features following the same pattern
5. **Code Reusability**: Controllers and models can be shared across views

## Component Usage

### TextPressure Component
Located at: `src/views/components/common/TextPressure.jsx`

A dynamic, interactive text component that responds to mouse/touch movement with font variations.

**Features**:
- Variable font weight, width, and italic properties
- Mouse/touch interaction
- Responsive sizing
- Dark mode support

**Usage**:
```jsx
import TextPressure from '../../views/components/common/TextPressure';

<TextPressure
  text="CHEMISTRY"
  flex={true}
  width={true}
  weight={true}
  italic={true}
  textColor="#7dd3fc"
  minFontSize={32}
/>
```

## Migration Guide

To migrate existing components to MVC:

1. **Create Model**: Move static data to `src/models/`
2. **Create Controller**: Move business logic to `src/controllers/`
3. **Update View**: Move component to `src/views/` and connect to controller
4. **Test**: Ensure functionality remains the same

## Best Practices

1. Keep views focused on presentation only
2. Put all business logic in controllers
3. Store all static data in models
4. Use controllers to prepare data for views
5. Keep models simple and focused on data structure
6. Document controller methods clearly
7. Use PropTypes or TypeScript for type safety

## Future Improvements

- [ ] Migrate all existing components to MVC pattern
- [ ] Add TypeScript for better type safety
- [ ] Implement unit tests for controllers
- [ ] Add data validation in models
- [ ] Create more reusable view components
