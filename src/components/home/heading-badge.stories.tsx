import type { Meta, StoryObj } from '@storybook/react'
import { HeadingBadge } from './heading-badge'

const meta = {
    title: 'Components/HeadingBadge',
    component: HeadingBadge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof HeadingBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        text: 'Grow Together',
        variant: 'default',
    },
}

export const Dark: Story = {
    args: {
        text: 'Grow Together',
        variant: 'dark',
    },
}

export const LongText: Story = {
    args: {
        text: 'Build Real Products',
        variant: 'default',
    },
}
