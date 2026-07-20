import type { Meta, StoryObj } from "@storybook/react";
import { ToolsCloudSection, ToolToken } from "./tools";
import { tools } from "#/content/home/tools";

const meta = {
	title: "Components/Home/Tools",
	component: ToolsCloudSection,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof ToolsCloudSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleTool: Story = {
	render: () => <ToolToken tool={tools[0]} />,
};

export const AllTools: Story = {
	args: {},
};
