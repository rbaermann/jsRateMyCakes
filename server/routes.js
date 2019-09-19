const controller = require("./controller");

module.exports = (app) => {
    app.get("/cakes", controller.Index);
    app.get("/cakes/:id", controller.SingleCake);
    app.post("/cakes", controller.CreateCake);
    app.put("/cakes/:id", controller.UpdateCake);
    app.delete("/cakes/:id", controller.DeleteCake);
    app.post("/cakes/:id/rating", controller.CreateRating);
}