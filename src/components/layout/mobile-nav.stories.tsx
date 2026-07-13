import type { Meta, StoryObj } from '@storybook/tanstack-react';
import { MobileNav } from './mobile-nav.tsx';

const meta: Meta<typeof MobileNav> = {
  component: MobileNav,
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

type Story = StoryObj<typeof MobileNav>;

export default meta;
export const Default: Story = {};
