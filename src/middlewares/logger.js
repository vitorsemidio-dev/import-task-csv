export async function logger(req, res) {
  const { method, url } = req;

  console.log(`[${new Date().toISOString()}] ${method} ${url}`);
}
