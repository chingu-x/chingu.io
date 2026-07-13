import type { Meta, StoryObj } from '@storybook/tanstack-react';
import { NavLogo } from './nav-logo.tsx';

const meta: Meta<typeof NavLogo> = {
  component: NavLogo,
};

type Story = StoryObj<typeof NavLogo>;

export default meta;
export const Default: Story = {};
