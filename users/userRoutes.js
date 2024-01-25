
const userController = require("./userController");


const userRoutes = (fastify, options, done)=>{
    fastify.get("/users", userController.getUsers)
    fastify.post("/user", userController.createUser)
    fastify.put("/user/:id", userController.updateUser)
    fastify.delete("/user/:id", userController.deleteUser)
    done();
}

module.exports = userRoutes;