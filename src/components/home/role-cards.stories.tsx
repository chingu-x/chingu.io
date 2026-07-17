import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight } from "lucide-react";
import { roleCards } from "#/content/home/role-cards";
import { cn } from "#/lib/utils";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { HomeRoleCards } from "./role-cards";

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

export const AllCards: Story = {
	args: {},
};

export const DeveloperCard: Story = {
	render: () => {
		const cardContent = roleCards[0];
		const Icon = cardContent.icon.name;

		return (
			<div className="w-80">
				<Card
					className={cn(
						"group border hover:border-primary/40 rounded-2xl px-2 py-6 transition-[all,box-shadow,border-color] duration-200 ease-[var(--ease)] hover:shadow-md hover:-translate-y-1",
					)}
				>
					<CardHeader>
						<Icon
							className={cn(
								"h-8 w-8 p-2 mb-2 rounded",
								cardContent.icon.className,
							)}
						/>
						<CardTitle className="text-xl font-bold">
							{cardContent.title}
						</CardTitle>
						<CardDescription className="text-base font-medium text-neutral-focus">
							{cardContent.description}
						</CardDescription>
					</CardHeader>
					<CardContent className="mt-8">
						<div className="flex items-center cursor-pointer font-bold text-sm gap-1 group-hover:gap-2 hover:text-primary">
							<span>{cardContent.linkText}</span>
							<ArrowRight size={16} strokeWidth={3} />
						</div>
					</CardContent>
				</Card>
			</div>
		);
	},
};
