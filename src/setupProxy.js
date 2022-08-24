const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/backend",
    createProxyMiddleware({
      target: "https://www.blibli.com",
      changeOrigin: true,
      secure: false,
    })
  );
};
