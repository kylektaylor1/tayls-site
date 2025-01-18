import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';

console.log(env.DATABASE_URL);
if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export const db = drizzle({
    connection: {
        url: env.DATABASE_URL!,
        ...(env.REQUIRES_DB_AUTH_TOKEN && { authToken: env.TURSO_AUTH_TOKEN! })
    },
    schema
});
