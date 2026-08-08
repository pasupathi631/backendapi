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

    // Auto-create permission_manage table if not exists
    await connection.query(`
      CREATE TABLE IF NOT EXISTS permission_manage (
        permission_id INT PRIMARY KEY AUTO_INCREMENT,
        emp_id INT,
        permission_date DATE,
        from_time VARCHAR(10),
        to_time VARCHAR(10),
        duration DECIMAL(4,2),
        reason TEXT,
        status VARCHAR(20) DEFAULT 'Pending',
        manager VARCHAR(100) DEFAULT 'Srinivasan Raman',
        applied_date DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("=> Verified permission_manage table in DB");

    connection.release();

  } catch (err) {

    console.error("# Error connecting to MySQL:", err);

    throw err;
  }
};
export default db;