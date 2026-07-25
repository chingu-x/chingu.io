import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { MenuContent } from "./menu-content.tsx";

const meta: Meta<typeof MenuContent> = {
	title: "Components/Shared/Layout/Nav/MenuContent",
	component: MenuContent,
	args: {
		menuContent: {
			title: "Choose your Path",
			subMenu: [
				{
					title: "For Developers",
					text: "Backend, full stack, or app developer. Ship code with a team. Master Git. Build for production.",
					href: "#",
				},
				{
					title: "For Designers",
					text: "UX or UI designer. Create a case study that proves cross-functional collaboration.",
					href: "#",
				},
				{
					title: "For Agile Leaders",
					text: "Scrum Master or Product Owner. Facilitate real sprints with a real team.",
					href: "#",
				},
			],
			card: {
				title: "Community Voice",
				text: "This experience was a powerful simulation of a real-world, cross-functional environment, focused on building a market-ready SaaS product.",
				initials: "KS",
				name: "Koby Sysouvanh",
				role: "voyage alum",
			},
		},
	},
};

type Story = StoryObj<typeof MenuContent>;

export default meta;
export const Default: Story = {};
