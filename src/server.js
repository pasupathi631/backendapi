import app from "./app.js";

(async () => {
  try {

    app.listen(5000, () => {
      console.log( `=> Server running on port: 5000`)
    });

  } catch (err) {
    console.error("# Failed to start server:", err)
    process.exit(1)
  }
})()