export type StatsType = {
	prefix?: string;
	value: string;
	suffix?: string;
	labels: {
		home: string;
		community: string;
	};
};

type StatsCollection = {
	[key: string]: StatsType;
};

export const stats: StatsCollection = {
	founded: {
		value: "2016",
		labels: {
			home: "Building since",
			community: "Building since",
		},
	},
	countries: {
		value: "170",
		suffix: "+",
		labels: {
			home: "Countries",
			community: "Countries represented",
		},
	},
	testimonials: {
		value: "106",
		labels: {
			home: "Public alumni testimonials*",
			community: "Public alumni testimonials*",
		},
	},
	recommend: {
		value: "94",
		suffix: "%",
		labels: {
			home: "Recommend Chingu",
			community: "Of surveyed alumni recommend†",
		},
	},
	free: {
		prefix: "$",
		value: "0",
		labels: {
			home: "Always free to join",
			community: "Cost to members, always",
		},
	},
};

// stats for the about page
export const statKeysAbout = [
	"founded",
	"countries",
	"testimonials",
	"recommend",
	"free",
] as const;
