const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/v-beta/ltl/spot-quotes/f6eb7798-3955-440d-a9e1-a4fb39f61921", {
            target: "https://api.shipengine.com",
            secure: false,
            changeOrigin: true
        })
    )

    app.get(
        proxy("/v-beta/ltl/spot-quotes/f6eb7798-3955-440d-a9e1-a4fb39f61921", {
            target: "https://api.shipengine.com",
            changeOrigin: true
        })
    )
    app.post(
        proxy("/v-beta/ltl/spot-quotes/f6eb7798-3955-440d-a9e1-a4fb39f61921", {
            target: "https://api.shipengine.com",
            changeOrigin: true
        })
    )
}