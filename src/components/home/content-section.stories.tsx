import type { Meta, StoryObj } from "@storybook/react";
import { ContentSection } from "./content-section";

const meta = {
	title: "Components/Home/ContentSection",
	component: ContentSection,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof ContentSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		id: "default-section",
		variant: "default",
		badgeText: "Why Chingu",
		badgeVariant: "default",
		headingText: "Build Real Products Together",
		ledeText:
			"Join a community of developers learning by building projects together with real collaboration.",
		children: (
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
				<div className="p-4 border border-gray-200 rounded-lg">
					<h3 className="font-semibold mb-2">Learn by Building</h3>
					<p className="text-gray-600">
						Work on real projects with hands-on experience
					</p>
				</div>
				<div className="p-4 border border-gray-200 rounded-lg">
					<h3 className="font-semibold mb-2">Collaborate with Peers</h3>
					<p className="text-gray-600">
						Connect with developers at all skill levels
					</p>
				</div>
				<div className="p-4 border border-gray-200 rounded-lg">
					<h3 className="font-semibold mb-2">Build Portfolio</h3>
					<p className="text-gray-600">
						Create projects to showcase your skills
					</p>
				</div>
			</div>
		),
	},
};

export const Dark: Story = {
	args: {
		id: "dark-section",
		variant: "dark",
		badgeText: "Get Started",
		badgeVariant: "dark",
		headingText: "Join Chingu Today",
		ledeText:
			"Start your journey with a community dedicated to your growth as a developer.",
		children: (
			<button
				type="button"
				className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
			>
				Sign Up Now
			</button>
		),
	},
};

export const WithLongContent: Story = {
	args: {
		id: "long-content-section",
		variant: "default",
		badgeText: "How It Works",
		badgeVariant: "default",
		headingText: "A Simple Process to Success",
		ledeText:
			"Follow our structured approach to learning and building with peers.",
		children: (
			<ol className="list-decimal list-inside space-y-4 mt-6">
				<li className="text-gray-700">
					<strong>Find Your Team:</strong> Get matched with developers of
					similar skill and interests
				</li>
				<li className="text-gray-700">
					<strong>Plan Together:</strong> Collaborate on project scope and
					timeline
				</li>
				<li className="text-gray-700">
					<strong>Build & Learn:</strong> Develop real features and solve
					problems together
				</li>
				<li className="text-gray-700">
					<strong>Ship & Share:</strong> Deploy your project and showcase it to
					the community
				</li>
			</ol>
		),
	},
};
