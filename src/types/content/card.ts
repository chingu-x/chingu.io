// basic card with description like the role cards in the roles pages
export type DescriptionCard = {
	title: string;
	description: string;
};

// card with list, such as the comparison card in teams/voyage-xp
export interface ComparisonCard {
	title: string;
	items: string[];
	featured?: boolean;
}
