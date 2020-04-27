const controller = require("../controllers/venta.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/venta", controller.create);
    app.get("/api/venta/fecha/:fecha", controller.findByFecha);
    app.get("/api/venta/id/:id", controller.findById);
    app.get("/api/venta/fecha", controller.findByFecha);

}