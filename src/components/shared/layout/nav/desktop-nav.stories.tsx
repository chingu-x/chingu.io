import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { DesktopNav } from "./desktop-nav.tsx";

const meta: Meta<typeof DesktopNav> = {
	title: "Components/Shared/Layout/Nav/DesktopNav",
	component: DesktopNav,
	parameters: {
		viewport: { defaultViewport: "desktop" },
	},
};

type Story = StoryObj<typeof DesktopNav>;

export default meta;
export const Default: Story = {};
