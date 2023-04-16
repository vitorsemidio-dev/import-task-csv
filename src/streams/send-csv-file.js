import fs from "node:fs";

const csvPath = new URL("./tasks.csv", import.meta.url);

const stream = fs.createReadStream(csvPath);

async function run() {
  const formData = new FormData();
  formData.append("file", stream);

  await fetch("http://localhost:3333/tasks/import", {
    method: "POST",
    body: formData,
  });
}

run();
