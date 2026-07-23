import app from "./app.js";
import { env } from "./config/env.js";

(async () => {
  try {

    app.listen(env.PORT, () => {
      console.log( `=> Server running on port: ${env.PORT}`)
    });

  } catch (err) {
    console.error("# Failed to start server:", err)
    process.exit(1)
  }
})()