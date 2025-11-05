# Migration Guide: Legacy to MVC Architecture

## Current Status

### ✅ Completed
- MVC folder structure created
- TextPressure component integrated
- Hero component updated with TextPressure (legacy version still works)
- HeroView component created (MVC version)
- Hero model, controller, and view created
- Documentation created

### 📝 Available Versions

You now have **two versions** of the Hero component:

1. **Legacy Version** (Current): `src/components/home/Hero.jsx`
   - Uses TextPressure directly
   - No MVC pattern
   - Still functional and in use

2. **MVC Version** (New): `src/views/components/home/HeroView.jsx`
   - Follows MVC pattern
   - Uses heroModel and heroController
   - Better organized and maintainable

## How to Switch to MVC Version

### Option 1: Direct Component Replacement

Replace the Hero component import in `HomePage.jsx`:

```jsx
// Old way
import Hero from '../home/Hero';

// New MVC way
import { HeroView as Hero } from '../../views';
```

### Option 2: Gradual Migration

Keep both versions and use feature flags or environment variables:

```jsx
import Hero from '../home/Hero';
import { HeroView } from '../../views';

// Use environment variable or feature flag
const HeroComponent = process.env.USE_MVC ? HeroView : Hero;

function HomePage() {
  return (
    <div>
      <HeroComponent />
      {/* rest of the page */}
    </div>
  );
}
```

## Changes Made

### 1. TextPressure Component
- **Location**: `src/views/components/common/TextPressure.jsx`
- **Features**: Interactive text with variable font properties
- **Replaces**: The word "chemistry" in hero section
- **Removed**: The word "Discover" from the hero title

### 2. Hero Section Updates
- Text structure changed from:
  ```
  Discover
  Chemistry
  for All
  ```
  
  To:
  ```
  for All
  [Interactive CHEMISTRY with TextPressure]
  ```

### 3. MVC Structure

```
src/
├── models/
│   ├── heroModel.js          # Data model for hero section
│   └── index.js              # Model exports
├── controllers/
│   ├── heroController.js     # Business logic for hero section
│   └── index.js              # Controller exports
└── views/
    ├── components/
    │   ├── common/
    │   │   └── TextPressure.jsx   # Interactive text component
    │   └── home/
    │       └── HeroView.jsx       # MVC version of Hero
    └── index.js              # View exports
```

## Testing the Changes

### 1. Check Current Implementation
The legacy Hero component already includes TextPressure:
```bash
# Start the dev server
npm run dev
```

Visit `http://localhost:5173` and verify:
- ✅ "Discover" is removed
- ✅ "Chemistry" is now interactive (TextPressure component)
- ✅ Text responds to mouse movement
- ✅ Dark mode changes text color

### 2. Test MVC Version (Optional)
To test the MVC version, update `HomePage.jsx`:

```jsx
import { HeroView } from '../../views';

function HomePage() {
  return (
    <div>
      <HeroView />
      {/* ... */}
    </div>
  );
}
```

## Migration Checklist for Other Components

Use this checklist when migrating other components:

- [ ] Identify component to migrate
- [ ] Create model in `src/models/`
  - [ ] Extract all static data
  - [ ] Define data structures
  - [ ] Export model
- [ ] Create controller in `src/controllers/`
  - [ ] Move business logic
  - [ ] Create data processing methods
  - [ ] Add helper functions
- [ ] Create view in `src/views/`
  - [ ] Keep only UI rendering code
  - [ ] Import controller
  - [ ] Use controller methods
- [ ] Test thoroughly
  - [ ] Verify functionality
  - [ ] Check all interactions
  - [ ] Test responsive behavior
- [ ] Update imports in parent components
- [ ] Update documentation

## File Modifications Summary

### New Files Created:
1. `src/models/heroModel.js` - Hero data model
2. `src/models/index.js` - Model exports
3. `src/controllers/heroController.js` - Hero controller
4. `src/controllers/index.js` - Controller exports
5. `src/views/components/common/TextPressure.jsx` - Interactive text component
6. `src/views/components/home/HeroView.jsx` - MVC version of Hero
7. `src/views/index.js` - View exports
8. `MVC_ARCHITECTURE.md` - Architecture documentation
9. `MIGRATION_GUIDE.md` - This file

### Modified Files:
1. `src/components/home/Hero.jsx` - Added TextPressure, removed "Discover"

## Rollback Instructions

If you need to rollback to the original version:

1. **Revert Hero.jsx** to show "Discover":
```jsx
<motion.h1>
  <span>Discover</span>
  <br />
  <span className="bg-gradient-to-r...">Chemistry</span>
  <br />
  <span>for All</span>
</motion.h1>
```

2. **Remove TextPressure import** from Hero.jsx

3. **Delete MVC folders** (optional):
```bash
rm -rf src/models src/controllers src/views
```

## Next Steps

1. **Test the current implementation** - Verify TextPressure works correctly
2. **Decide on migration strategy** - Choose Option 1 or 2 above
3. **Migrate other components** - Use the checklist above
4. **Update documentation** - Keep docs up to date as you migrate

## Support

For questions or issues:
1. Check `MVC_ARCHITECTURE.md` for architecture details
2. Review the example implementation in `HeroView.jsx`
3. Refer to controller methods in `heroController.js`
