import postgres from 'postgres';

declare global {
    var sql: ReturnType<typeof postgres> | undefined;
}

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error('DATABASE_URL is not set');

const sql = (globalThis.sql ??= postgres(connectionString, {
    ssl: true,
    max: 10,
    idle_timeout: 20,
}));

export default sql;
