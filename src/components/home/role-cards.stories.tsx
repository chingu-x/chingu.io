import type { Meta, StoryObj } from "@storybook/react";
import { roleCards } from "#/content/home/role-cards";
import { HomeRoleCards, RoleCard } from "./role-cards";

const meta = {
	title: "Components/Home/RoleCards",
	component: HomeRoleCards,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof HomeRoleCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DeveloperCard: Story = {
	render: () => <RoleCard cardContent={roleCards[0]} />,
};

export const AllCards: Story = {
	args: {},
};
