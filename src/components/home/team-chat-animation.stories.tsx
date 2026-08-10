import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { TeamChatAnimation } from "./team-chat-animation";

const meta = {
	title: "Components/Home/TeamChatAnimation",
	component: TeamChatAnimation,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: "Vanilla JavaScript animation approach for team chat visualization",
			},
		},
	},
	tags: ["autodocs"],
} satisfies Meta<typeof TeamChatAnimation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const InContainer: Story = {
	args: {},
	render: (args) => (
		<div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 min-h-screen flex items-center justify-center">
			<TeamChatAnimation {...args} />
		</div>
	),
};

export const Dark: Story = {
	args: {},
	render: (args) => (
		<div className="bg-gradient-to-br from-gray-900 to-gray-950 p-12 min-h-screen flex items-center justify-center">
			<TeamChatAnimation {...args} />
		</div>
	),
};
