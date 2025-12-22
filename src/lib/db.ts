import postgres from 'postgres';

declare global {
    var sql: ReturnType<typeof postgres> | undefined;
}

const connectionString = process.env.DATABASE_URL!;

// Use nullish coalescing assignment
const sql = (globalThis.sql ??= postgres(connectionString, {
    ssl: { rejectUnauthorized: false },
    max: 10,
    idle_timeout: 20,
}));

export default sql;
