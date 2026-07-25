import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { Footer } from "./footer.tsx";

const meta: Meta<typeof Footer> = {
	title: "Components/Shared/Layout/Footer",
	component: Footer,
};

type Story = StoryObj<typeof Footer>;

export default meta;
export const Default: Story = {};
