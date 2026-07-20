import type { Meta, StoryObj } from "@storybook/react";
import { Callout } from "./callout";

const meta = {
	title: "Components/Home/Callout",
	component: Callout,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
