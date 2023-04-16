import fs from "fs/promises";
import { extractFileContent } from "../utils/extract-file-content.js";
import { isMultipartContentType } from "../utils/check-content-type.js";

export async function multipart(req, res) {
  if (!isMultipartContentType(req)) return;
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    const fileContent = extractFileContent(Buffer.concat(buffers));

    const filename = new Date().getTime() + "arquivo.csv";
    const folder = "tmp";
    const dataFile = fileContent;
    await fs.writeFile(`${folder}/${filename}`, dataFile);

    req.file = {
      filename,
      path: `${folder}/${filename}`,
      content: dataFile,
    };
    console.log(`Arquivo "${filename}" salvo com sucesso!`);
  } catch {
    req.file = null;
  }

  res.setHeader("Content-type", "application/json");
}
