import { createPool } from "mysql2/promise";
import { env } from "./env.js";


const db = createPool({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  port: env.DB_PORT,
  connectionLimit: 20, 
  dateStrings: true, 
  queueLimit: 0,    
  connectTimeout: 10000, 
  waitForConnections: true, 
  timezone: 'Z' 
  
});

export const connectDB = async () => {
  try {
    const connection = await db.getConnection();
    connection.release();
    console.log("=> Database connected");
  } catch (err) {
    console.error("# Failed to connect to database:", err);
    process.exit(1);
  }
};

export default db;