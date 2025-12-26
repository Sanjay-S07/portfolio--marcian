import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleSendEmail } from "./routes/contact";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Contact form endpoint
  app.post("/api/send-email", handleSendEmail);

  // Catch-all for unmatched API routes - return 404
  app.use("/api", (req, res) => {
    res.status(404).json({ error: "API endpoint not found" });
  });

  return app;
}
