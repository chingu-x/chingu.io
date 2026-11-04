import type { Meta, StoryObj } from "@storybook/tanstack-react";
import {
	NavigationMenu,
	NavigationMenuList,
} from "#/components/ui/navigation-menu.tsx";
import { navItems } from "#/content/nav.ts";
import { MenuContent } from "./menu-content.tsx";

const meta: Meta<typeof MenuContent> = {
	title: "Components/Shared/Layout/Nav/MenuContent",
	component: MenuContent,
	decorators: [
		(Story) => (
			<NavigationMenu>
				<NavigationMenuList render={<div />}>
					<Story />
				</NavigationMenuList>
			</NavigationMenu>
		),
	],
	args: {
		menuContent: navItems[0].menuContent,
	},
};

type Story = StoryObj<typeof MenuContent>;

export default meta;
export const Default: Story = {};
