const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api/players", {
      target: "https://api.opendota.com",
      changeOrigin: true,
    })
  );
};
