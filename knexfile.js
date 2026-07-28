import { env } from "./src/config/env.js";



export default {
  development: {
    client: 'mysql2',
    connection: {
      host: env.DB_HOST,
      port: env.DB_PORT,
      user: env.DB_USER,
      password: env.DB_PASSWORD,
      database: env.DB_NAME
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    }
  }

};