# Cyberpunk 2077 React Component Library

A React component library with a cyberpunk/glitch theme, built with TypeScript, Vite, and Panda CSS.

## Components

- **Button** - Cyberpunk-styled button with glitch effects
- **Input** - Futuristic input field with scan lines and corner brackets
- **Checkbox** - Glitch-themed checkbox with cyberpunk styling
- **Stats** - Data display component with neon styling
- **RadioButton** - Cyberpunk-themed radio button group

## Local Development

### Prerequisites

- Node.js 18+ 
- Yarn package manager

### Setup

```bash
# Install dependencies
yarn

# Generate Panda CSS files (required before development)
yarn prepare

# Start development server
yarn dev

# Run Storybook for component development
yarn storybook
```

### Building the Library

```bash
# Build the library for distribution
yarn build

# This generates:
# - dist/cyberpunk-2077-lib.js (ES module)
# - dist/cyberpunk-2077-lib.css (styles)
# - dist/main.d.ts (TypeScript declarations)
```

## Local Packaging & Testing

This section explains how to package the library locally and test it in another project before publishing to NPM.

### Step 1: Build and Package the Library

```bash
# Build the library
yarn build

# Create a local package tarball
npm pack
```

This creates a file like `cyberpunk-2077-lib-0.1.4.tgz` containing the built library.

### Step 2: Install in Your Project

In your target Vite/React project:

```bash
# Install the local package
npm install /path/to/cyberpunk-2077-lib-0.1.4.tgz

# Or if using yarn
yarn add /path/to/cyberpunk-2077-lib-0.1.4.tgz
```

### Step 3: Import and Use Components

```jsx
// Import components and styles
import { Button, Input, Checkbox } from 'cyberpunk-2077-lib'
import 'cyberpunk-2077-lib/dist/cyberpunk-2077-lib.css'

function App() {
  return (
    <div>
      <Button 
        text="Hack the System" 
        onClick={() => console.log('Button clicked!')}
        glitch={true}
      />
      
      <Input 
        label="Enter Access Code"
        placeholder="████████"
      />
    </div>
  )
}
```

### Step 4: Development Workflow

When making changes to the library:

1. Make your changes in the library
2. Run `yarn build` to rebuild
3. Run `npm pack` to create a new package
4. In your test project, reinstall: `npm install /path/to/new-package.tgz`
5. Test the changes

### Troubleshooting

**Styles not loading?**
- Make sure to import the CSS: `import 'cyberpunk-2077-lib/dist/cyberpunk-2077-lib.css'`
- Check that your bundler supports CSS imports

**TypeScript errors?**
- Ensure you have the peer dependencies installed: `react@^19.1.0` and `react-dom@^19.1.0`

**Build fails?**
- Run `yarn prepare` first to generate Panda CSS files
- Check that all dependencies are installed

## Development Commands

```bash
# Generate Panda CSS files
yarn prepare

# Development server
yarn dev

# Build library
yarn build

# Lint code
yarn lint

# Storybook development
yarn storybook

# Build Storybook
yarn build-storybook

# Create component scaffold
yarn component:scaffold
```
