import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../../../lib/components/checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSelectionChange: { action: 'selectionChanged' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      {
        id: 'option1',
        value: 'encryption',
        label: 'ENABLE_ENCRYPTION',
      },
      {
        id: 'option2',
        value: 'stealth',
        label: 'ACTIVATE_STEALTH_MODE',
      },
      {
        id: 'option3',
        value: 'admin',
        label: 'ADMIN_ACCESS',
      },
    ],
    selectedValues: ['encryption'],
  },
};

export const MultipleSelected: Story = {
  args: {
    options: [
      {
        id: 'option1',
        value: 'encryption',
        label: 'ENABLE_ENCRYPTION',
      },
      {
        id: 'option2',
        value: 'stealth',
        label: 'ACTIVATE_STEALTH_MODE',
      },
      {
        id: 'option3',
        value: 'admin',
        label: 'ADMIN_ACCESS',
      },
    ],
    selectedValues: ['encryption', 'stealth'],
  },
};

export const WithDisabled: Story = {
  args: {
    options: [
      {
        id: 'option1',
        value: 'encryption',
        label: 'ENABLE_ENCRYPTION',
      },
      {
        id: 'option2',
        value: 'stealth',
        label: 'ACTIVATE_STEALTH_MODE',
      },
      {
        id: 'option3',
        value: 'admin',
        label: '[PERMISSION_DENIED]',
        disabled: true,
      },
    ],
    selectedValues: ['encryption'],
  },
};

export const AllDisabled: Story = {
  args: {
    options: [
      {
        id: 'option1',
        value: 'encryption',
        label: '[ACCESS_DENIED]',
        disabled: true,
      },
      {
        id: 'option2',
        value: 'stealth',
        label: '[SYSTEM_LOCKED]',
        disabled: true,
      },
      {
        id: 'option3',
        value: 'admin',
        label: '[PERMISSION_DENIED]',
        disabled: true,
      },
    ],
    selectedValues: [],
  },
};

export const CyberpunkLabels: Story = {
  args: {
    options: [
      {
        id: 'neural1',
        value: 'neural_link',
        label: 'NEURAL_LINK_ACTIVE',
      },
      {
        id: 'cyber1',
        value: 'cyberdeck',
        label: 'CYBERDECK_ONLINE',
      },
      {
        id: 'ice1',
        value: 'ice_breaker',
        label: 'ICE_BREAKER_LOADED',
      },
      {
        id: 'ghost1',
        value: 'ghost_mode',
        label: 'GHOST_PROTOCOL',
      },
    ],
    selectedValues: ['neural_link', 'cyberdeck'],
  },
};