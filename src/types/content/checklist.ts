export type ChecklistItem = {
	key: string;
	title: string;
	description: string;
};

export type ChecklistItemsCompact = Omit<ChecklistItem, "title">;
