#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get component name from command line arguments
const componentName = process.argv[2];

if (!componentName) {
  console.error('❌ Error: Component name is required');
  console.log('Usage: yarn component:scaffold <component-name>');
  process.exit(1);
}

// Validate component name (should be kebab-case)
if (!/^[a-z]+(-[a-z]+)*$/.test(componentName)) {
  console.error('❌ Error: Component name must be in kebab-case (e.g., "my-component")');
  process.exit(1);
}

// Convert to PascalCase for component names
const componentPascalCase = componentName
  .split('-')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join('');

// Define paths
const componentDir = path.join(__dirname, '..', 'lib', 'components', componentName);
const storyDir = path.join(__dirname, '..', 'stories', 'components', componentName);
const componentsIndexPath = path.join(__dirname, '..', 'lib', 'components', 'index.ts');

// Check if component directory already exists
if (fs.existsSync(componentDir)) {
  console.error(`❌ Error: Component "${componentName}" already exists.`);
  console.log('This command scaffolds an empty component. Please remove the component\'s name directory');
  process.exit(1);
}

try {
  // Create component directory
  fs.mkdirSync(componentDir, { recursive: true });
  
  // Create story directory
  fs.mkdirSync(storyDir, { recursive: true });

  // Create types.ts file
  const typesContent = `export interface ${componentPascalCase}Props {
  className?: string;
  children?: React.ReactNode;
}`;

  fs.writeFileSync(path.join(componentDir, 'types.ts'), typesContent);

  // Create component file
  const componentContent = `import React from "react";
import { css, cx } from "../../../styled-system/css";
import type { ${componentPascalCase}Props } from "./types";

const ${componentPascalCase}: React.FC<${componentPascalCase}Props> = ({ className, children }) => {
  return (
    <div
      className={cx(
        "cyberpunk-${componentName}",
        css({
          fontFamily: "mono",
          color: "glitch.text",
        }),
        className || ""
      )}
    >
      {children || "${componentPascalCase} component will render here"}
    </div>
  );
};

export default ${componentPascalCase};`;

  fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), componentContent);

  // Create index.ts file
  const indexContent = `export { default as ${componentPascalCase} } from './${componentName}';
export type { ${componentPascalCase}Props } from './types';`;

  fs.writeFileSync(path.join(componentDir, 'index.ts'), indexContent);

  // Create story file
  const storyContent = `import type { Meta, StoryObj } from "@storybook/react-vite";
import { ${componentPascalCase} } from "../../../lib/components/${componentName}";

const meta: Meta<typeof ${componentPascalCase}> = {
  title: "Components/${componentPascalCase}",
  component: ${componentPascalCase},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default ${componentPascalCase}",
  },
};`;

  fs.writeFileSync(path.join(storyDir, `${componentPascalCase}.stories.ts`), storyContent);

  // Update components/index.ts
  const currentIndexContent = fs.readFileSync(componentsIndexPath, 'utf8');
  const exportLines = currentIndexContent.trim().split('\n').filter(line => line.trim());
  
  // Add new export in alphabetical order
  const newExport = `export * from './${componentName}';`;
  exportLines.push(newExport);
  exportLines.sort();
  
  const updatedIndexContent = exportLines.join('\n') + '\n';
  fs.writeFileSync(componentsIndexPath, updatedIndexContent);

  console.log(`✅ Successfully scaffolded component "${componentName}"!`);
  console.log('\nCreated files:');
  console.log(`  📁 lib/components/${componentName}/`);
  console.log(`    - index.ts`);
  console.log(`    - ${componentName}.tsx`);
  console.log(`    - types.ts`);
  console.log(`  📁 stories/components/${componentName}/`);
  console.log(`    - ${componentPascalCase}.stories.ts`);
  console.log(`  📝 Updated lib/components/index.ts`);
  console.log(`\n🎨 You can now view your component in Storybook: yarn storybook`);

} catch (error) {
  console.error('❌ Error creating component:', error.message);
  
  // Cleanup on error
  if (fs.existsSync(componentDir)) {
    fs.rmSync(componentDir, { recursive: true, force: true });
  }
  if (fs.existsSync(storyDir)) {
    fs.rmSync(storyDir, { recursive: true, force: true });
  }
  
  process.exit(1);
}