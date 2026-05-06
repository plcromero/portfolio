const http = require("http");
const next = require("next");
const { loadEnvConfig } = require("@next/env");

loadEnvConfig(__dirname, false);

const app = next({ dev: false, dir: __dirname });
const handle = app.getRequestHandler();
const port = Number(process.env.PORT || 4040);

app.prepare().then(() => {
  http.createServer((req, res) => handle(req, res)).listen(port, "127.0.0.1");
});
