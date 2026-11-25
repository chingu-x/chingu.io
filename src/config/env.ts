import { z } from "zod";

const envSchema = z.object({
	NODE_ENV: z.enum(["development", "production", "test"]),
	DISCORD_AUTH_URL: z.url(),
});

const clientEnvSchema = z.object({
	VITE_SENTRY_DSN: z.string().optional(),
	VITE_SENTRY_ORG: z.string().optional(),
	VITE_SENTRY_PROJECT: z.string().optional(),
});

export const serverEnv = envSchema.parse(process.env);
export const clientEnv = clientEnvSchema.parse(process.env);
