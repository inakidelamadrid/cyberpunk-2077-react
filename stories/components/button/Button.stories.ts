import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../../lib/components/button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled button",
    disabled: true,
  },
};

export const LongText: Story = {
  args: {
    children: "This is a longer button text",
  },
};

export const AsLink: Story = {
  args: {
    as: "a",
    href: "#",
    children: "VIEW_ON_GITHUB",
  },
};

export const AsLinkExternal: Story = {
  args: {
    as: "a",
    href: "https://github.com",
    target: "_blank",
    rel: "noopener noreferrer",
    children: "Open GitHub",
  },
};

export const WithGlitch: Story = {
  args: {
    children: "GLITCH EFFECT",
    glitch: true,
  },
};

export const DisabledWithGlitch: Story = {
  args: {
    children: "Can't glitch when disabled",
    glitch: true,
    disabled: true,
  },
};