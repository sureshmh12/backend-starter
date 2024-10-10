import http from "http";
import { app } from "./app.js";
import "dotenv/config";
import { connectDB } from "./db/db.connect.js";

const server = http.createServer(app);
const PORT = process.env.PORT;

server.listen(PORT, () => {
  connectDB();
  console.log(`the posrt is running on port:${PORT}`);
});
