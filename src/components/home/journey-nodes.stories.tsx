import type { Meta, StoryObj } from "@storybook/react";
import { journeyNodes } from "#/content/home/journey-nodes";
import { JourneyNodeItem, JourneyNodesSection } from "./journey-nodes";

const meta = {
	title: "Components/Home/JourneyNodes",
	component: JourneyNodesSection,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof JourneyNodesSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstNode: Story = {
	render: () => <JourneyNodeItem node={journeyNodes[0]} />,
};

export const AllNodes: Story = {
	args: {},
};
