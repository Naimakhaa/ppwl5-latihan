import { Database } from "bun:sqlite";
import { env } from "./env";

export const db = new Database(env.DB_FILE);

export const initDB = () => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            role TEXT
        )
    `);
    console.log("📁 Database initialized");
};