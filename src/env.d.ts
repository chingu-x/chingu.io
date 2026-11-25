type ImportMetaEnv = {
	readonly VITE_SENTRY_DSN?: string;
	readonly VITE_SENTRY_ORG?: string;
	readonly VITE_SENTRY_PROJECT?: string;
};

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

// server ENV
declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly NODE_ENV: "development" | "production" | "test";
			readonly DISCORD_AUTH_URL: string;
		}
	}
}

export {};
