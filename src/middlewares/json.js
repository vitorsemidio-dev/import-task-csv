import { isJsonContentType } from "../utils/check-content-type.js";

export async function json(req, res) {
  if (!isJsonContentType(req)) return;
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    req.body = null;
  }

  res.setHeader("Content-type", "application/json");
}
