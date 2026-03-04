import { app } from "./app";
import { env } from "./config/env";
import { initDB } from "./config/db";

// panggil initDB

app.listen(env.PORT);

console.log(`🚀 Server running at http://localhost:${env.PORT}`);
