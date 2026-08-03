export type ChecklistItem = {
	key: string;
	title: string;
	description: string;
};

export type ChecklistItemCompact = Omit<ChecklistItem, "title">;
