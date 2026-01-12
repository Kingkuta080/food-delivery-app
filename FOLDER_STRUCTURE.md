# 📁 Food Delivery App - Folder Structure

```
food-delivery-app/
│
├── 📱 app/                          # Main application directory (Expo Router)
│   │
│   ├── _layout.tsx                  # Root layout component
│   ├── index.tsx                    # Entry point (redirects to launch)
│   │
│   ├── 📂 (auth)/                   # Authentication routes (route group)
│   │   ├── _layout.tsx              # Auth layout wrapper
│   │   ├── login.tsx                # Login screen
│   │   ├── login-b.tsx              # Alternative login screen
│   │   ├── newAccount.tsx           # Account creation screen
│   │   ├── setPassword.tsx          # Password setup screen
│   │   └── setFingerPrint.tsx       # Biometric authentication setup
│   │
│   ├── 📂 (onboarding)/             # Onboarding routes (route group)
│   │   ├── _layout.tsx              # Onboarding layout wrapper
│   │   ├── onboard-a.tsx            # First onboarding screen
│   │   ├── onboard-b.tsx            # Second onboarding screen
│   │   └── onboard-c.tsx            # Third onboarding screen
│   │
│   ├── 📂 (tabs)/                   # Tab navigation routes (route group)
│   │   ├── _layout.tsx              # Tab layout with bottom navigation
│   │   ├── Home.tsx                 # Home tab screen
│   │   ├── HomeStyles.ts            # Home screen styles
│   │   ├── Menu.tsx                 # Menu tab screen
│   │   ├── Favorites.tsx            # Favorites tab screen
│   │   ├── Orders.tsx                # Orders tab screen
│   │   └── Support.tsx              # Support tab screen
│   │
│   ├── 📂 launch/                   # Launch/welcome screens
│   │   ├── lunchScreen.tsx          # Launch screen (splash)
│   │   └── optionScreen.tsx         # Launch step B (login/signup options)
│   │
│   └── 📂 utils/                    # Utility files
│       ├── colors.ts                # Color constants/theme
│       └── globalStyles.ts          # Global style definitions
│
├── 🎨 assets/                       # Static assets
│   └── images/                      # Image assets
│       ├── logo-dark.svg            # App logo (dark theme)
│       ├── logo-white.svg           # App logo (light theme)
│       ├── snack.svg                # Snack category icon
│       ├── meal.svg                 # Meal category icon
│       ├── vegan.svg                # Vegan category icon
│       ├── dessert.svg              # Dessert category icon
│       ├── delivery.svg             # Delivery icon
│       ├── card.svg                 # Card icon
│       ├── file.svg                 # File icon
│       ├── onboarding-a.svg         # Onboarding A illustration
│       ├── onboarding-b.svg         # Onboarding B illustration
│       ├── onboarding-c.svg         # Onboarding C illustration
│       ├── banner1.png               # Promotional banner
│       ├── food1.svg                # Food item 1
│       ├── food2.svg                # Food item 2
│       ├── food3.svg                # Food item 3
│       ├── food4.svg                # Food item 4
│       ├── recom1.svg               # Recommended item 1
│       └── recom2.svg               # Recommended item 2
│
├── ⚙️ Configuration Files
│   ├── app.json                     # Expo app configuration
│   ├── package.json                 # NPM dependencies & scripts
│   ├── package-lock.json            # NPM lock file
│   ├── tsconfig.json                # TypeScript configuration
│   ├── eslint.config.js             # ESLint configuration
│   └── expo-env.d.ts                # Expo TypeScript definitions
│
└── 📦 node_modules/                 # NPM dependencies (auto-generated)
```

---

## 📋 Structure Overview

### 🎯 **Route Groups (Parentheses)**
Expo Router uses parentheses `(folder)` to create route groups that don't appear in the URL:
- `(auth)/` - Authentication screens
- `(onboarding)/` - Onboarding flow
- `(tabs)/` - Tab navigation screens

### 🔑 **Key Files**

#### **Entry Points:**
- `app/index.tsx` - App entry point (redirects to launch)
- `app/_layout.tsx` - Root layout with SafeAreaProvider

#### **Navigation:**
- `app/(tabs)/_layout.tsx` - Tab navigation layout with bottom bar
- Tab bar is always visible at the bottom with proper styling

#### **Styling:**
- `app/utils/colors.ts` - Color palette
- `app/utils/globalStyles.ts` - Global styles
- `HomeStyles.ts` - Component-specific styles (separated from component)

#### **Configuration:**
- `app.json` - Expo app config (name, version, icons, permissions)
- `package.json` - Dependencies and scripts

---

## 🗂️ **Directory Purpose**

| Directory | Purpose |
|-----------|---------|
| `app/` | All application screens and components (Expo Router) |
| `app/(auth)/` | Authentication flow screens |
| `app/(onboarding)/` | User onboarding screens |
| `app/(tabs)/` | Main app screens with tab navigation |
| `app/launch/` | Launch/welcome screens |
| `app/utils/` | Utility functions, constants, styles |
| `assets/images/` | Static image and SVG assets |

---

## 🚀 **Routing Structure**

Based on Expo Router file-based routing:

```
/                           → app/index.tsx (redirects to /launch/lunchScreen)
/launch/lunchScreen         → app/launch/lunchScreen.tsx
/launch/optionScreen        → app/launch/optionScreen.tsx
/(onboarding)/onboard-a     → app/(onboarding)/onboard-a.tsx
/(onboarding)/onboard-b    → app/(onboarding)/onboard-b.tsx
/(onboarding)/onboard-c    → app/(onboarding)/onboard-c.tsx
/(auth)/login              → app/(auth)/login.tsx
/(auth)/login-b            → app/(auth)/login-b.tsx
/(auth)/newAccount         → app/(auth)/newAccount.tsx
/(auth)/setPassword       → app/(auth)/setPassword.tsx
/(auth)/setFingerPrint    → app/(auth)/setFingerPrint.tsx
/(tabs)/Home              → app/(tabs)/Home.tsx
/(tabs)/Menu              → app/(tabs)/Menu.tsx
/(tabs)/Favorites         → app/(tabs)/Favorites.tsx
/(tabs)/Orders            → app/(tabs)/Orders.tsx
/(tabs)/Support           → app/(tabs)/Support.tsx
```

---

## 📊 **File Naming Conventions**

- **Routes:** `camelCase.tsx` (e.g., `newAccount.tsx`, `lunchScreen.tsx`)
- **Styles:** `[ComponentName]Styles.ts` (e.g., `HomeStyles.ts`)
- **Layouts:** `_layout.tsx` (Expo Router convention - singular)
- **Utils:** `camelCase.ts` (e.g., `globalStyles.ts`)

---

## ✨ **Improvements Made**

1. **Tab Bar Visibility:**
   - Removed `position: 'absolute'` to ensure tab bar is always visible
   - Added proper elevation and shadow for better visibility
   - Fixed padding in Home screen to account for tab bar

2. **Structure Consistency:**
   - Renamed `_layouts.tsx` → `_layout.tsx` (singular, following Expo Router convention)
   - Renamed `(onBoarding)` → `(onboarding)` (consistent naming)
   - Renamed `lunch/` → `launch/` (consistent naming)

3. **Navigation Paths:**
   - Updated all navigation paths to match new structure
   - All routes now use consistent naming

4. **Code Organization:**
   - Styles separated into dedicated files (e.g., `HomeStyles.ts`)
   - Better structure following best practices

---

## 🔍 **Quick Reference**

### **Find Screens:**
- Auth screens → `app/(auth)/`
- Main app screens → `app/(tabs)/`
- Onboarding → `app/(onboarding)/`
- Launch/Welcome → `app/launch/`

### **Find Styles:**
- Global styles → `app/utils/globalStyles.ts`
- Colors → `app/utils/colors.ts`
- Component styles → Same directory as component (`.styles.ts` or `Styles.ts`)

### **Find Assets:**
- Images/SVGs → `assets/images/`

---

*Last updated: Based on improved project structure*
