const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api/players", {
      target: "https://api.opendota.com",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/users/", {
      target: "http://localhost:8000",
      changeOrigin: true,
    })
  );
};
