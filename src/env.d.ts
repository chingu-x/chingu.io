// interface ImportMetaEnv {
// 	// client ENV
// }
//
// interface ImportMeta {
// 	readonly env: ImportMetaEnv;
// }

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
