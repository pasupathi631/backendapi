import { createPool } from "mysql2/promise";


const db = createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "signup",
  port: 3306,
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