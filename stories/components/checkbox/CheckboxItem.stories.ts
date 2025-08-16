import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckboxItem } from "../../../lib/components/checkbox";

const meta: Meta<typeof CheckboxItem> = {
  title: "Components/CheckboxItem",
  component: CheckboxItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "checkbox1",
    name: "checkbox1",
    value: "option1",
    label: "ENABLE_ENCRYPTION",
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    id: "checkbox2",
    name: "checkbox2",
    value: "option2",
    label: "ACTIVATE_STEALTH_MODE",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    id: "checkbox3",
    name: "checkbox3",
    value: "option3",
    label: "[PERMISSION_DENIED]",
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    id: "checkbox4",
    name: "checkbox4",
    value: "option4",
    label: "[SYSTEM_LOCKED]",
    checked: true,
    disabled: true,
  },
};

export const LongLabel: Story = {
  args: {
    id: "checkbox5",
    name: "checkbox5",
    value: "option5",
    label: "INITIALIZE_QUANTUM_ENCRYPTION_PROTOCOL_ALPHA",
    checked: false,
  },
};
