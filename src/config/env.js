import dotenv from "dotenv";
dotenv.config();

export const missingVariable = (v) => {
    console.log("Error: ",v, " not found in .env")
    process.exit(1)
}

export const env = {
  
    PORT: process.env.PORT || missingVariable("PORT"),
    DB_HOST: process.env.DB_HOST || missingVariable("DB_HOST"),
    DB_PORT: process.env.DB_PORT || missingVariable("DB_PORT"),
    DB_USER: process.env.DB_USER || missingVariable("DB_USER"),
    DB_PASSWORD: process.env.DB_PASSWORD || missingVariable("DB_PASSWORD"),
    DB_NAME: process.env.DB_NAME || missingVariable("DB_NAME"),
    
};