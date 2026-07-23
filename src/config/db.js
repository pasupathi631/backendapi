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

    console.log("=> Connected to MySQL database");

    connection.release();

  } catch (err) {

    console.error("# Error connecting to MySQL:", err);

    throw err;
  }
};
export default db;