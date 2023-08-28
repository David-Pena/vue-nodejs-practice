import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
app.set("port", process.env.PORT || 3001);

// Import routes

// Use routes

app.get("/", (_, res) => {
  res.send("Hello World @ Realtime Chat Server");
});

// Listening to port
app.listen(app.get("port"), () => {
  console.log("Express server started on port", app.get("port"));
});
