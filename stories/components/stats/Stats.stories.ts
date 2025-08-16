import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stats } from "../../../lib/components/stats";

const meta: Meta<typeof Stats> = {
  title: "Components/Stats",
  component: Stats,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "FOLLOWERS",
    value: "42k",
  },
};

export const Likes: Story = {
  args: {
    label: "LIKES",
    value: "1.2M",
  },
};

export const Views: Story = {
  args: {
    label: "VIEWS",
    value: "847",
  },
};