export function extractFileContent(buffer) {
  const boundary = buffer.slice(0, buffer.indexOf("\r\n"));
  const parts = buffer.toString().split(boundary);

  const filePart = parts.find((part) => part.includes("filename="));

  if (!filePart) {
    throw new Error("Não foi possível encontrar o arquivo na solicitação.");
  }

  const contentStart = filePart.indexOf("\r\n\r\n") + 4;
  const contentEnd = filePart.lastIndexOf("\r\n--");

  return filePart.slice(contentStart, contentEnd);
}
