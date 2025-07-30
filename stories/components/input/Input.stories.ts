import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../../../lib/components/input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  //   argTypes: {
  //     onSelectionChange: { action: "selectionChanged" },
  //   },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Enter your command",
  },
};
