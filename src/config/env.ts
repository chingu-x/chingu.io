import { z } from "zod";

const envSchema = z.object({
	NODE_ENV: z.enum(["development", "production", "test"]),
	DISCORD_AUTH_URL: z.url(),
});

const clientEnvSchema = z.object({});

export const serverEnv = envSchema.parse(process.env);
export const clientEnv = clientEnvSchema.parse(process.env);
