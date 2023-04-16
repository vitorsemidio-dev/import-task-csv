export function isContentType(req, contentType) {
  const type = req.headers["content-type"];
  return type && type.includes(contentType);
}

export function isJsonContentType(req) {
  return isContentType(req, "application/json");
}

export function isMultipartContentType(req) {
  return isContentType(req, "multipart/form-data");
}
