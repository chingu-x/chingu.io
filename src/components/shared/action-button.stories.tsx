import type { Meta, StoryObj } from '@storybook/tanstack-react';
import { ActionButton } from './action-button.tsx';

const meta: Meta<typeof ActionButton> = {
  component: ActionButton,
  args: {
    text: "Join the next voyage",  // default for all stories
  },
};

type Story = StoryObj<typeof ActionButton>;

export default meta;
export const Default: Story = {};
