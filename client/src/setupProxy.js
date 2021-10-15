const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/v1/rates/estimate", {
            target: "https://api.shipengine.com",
            secure: false,
            changeOrigin: true
        })
    )

    app.get(
        proxy("/v1/rates/estimate", {
            target: "https://api.shipengine.com",
            changeOrigin: true
        })
    )
    app.post(
        proxy("/v1/rates/estimate", {
            target: "https://api.shipengine.com",
            changeOrigin: true
        })
    )
}