import type { Meta, StoryObj } from '@storybook/tanstack-react';
import { NavH1 } from './h1.tsx';

const meta: Meta<typeof NavH1> = {
  component: NavH1,
  args: {
    text: "Section Title",
  },
};

type Story = StoryObj<typeof NavH1>;

export default meta;
export const Default: Story = {};
