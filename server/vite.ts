import express, { type Express } from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { type Server } from "http";

export async function setupVite(app: Express, server: Server) {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const vite = await createViteServer({
    server: {
      middlewareMode: true,
      hmr: { server },
    },
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res, next) => {
    try {
      const indexPath = path.resolve("client/index.html");
      let template = await fs.promises.readFile(indexPath, "utf-8");
      const html = await vite.transformIndexHtml(req.originalUrl, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve("client/dist");

  if (!fs.existsSync(distPath)) {
    console.warn("Client build not found. Skipping static serve.");
    return;
  }

  app.use(express.static(distPath));

  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}