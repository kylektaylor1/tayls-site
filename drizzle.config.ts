import { defineConfig } from 'drizzle-kit';
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
    schema: './src/lib/server/db/schema.ts',
    dialect: 'turso',
    dbCredentials: {
        url: process.env.DATABASE_URL,
        authToken: process.env.TURSO_AUTH_TOKEN
    },
    out: './drizzle',
    verbose: true,
    strict: true
});
