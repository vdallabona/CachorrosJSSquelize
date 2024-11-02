const express = require('express');
const ControllersCachorro = require('../controllers/cachorros')
const auth = require("../middleware/auth")

const router = express.Router()

router.post("/", ControllersCachorro.CreateCachorro)
router.post("/login", ControllersCachorro.Login)

router.get("/", auth, ControllersCachorro.GetCachorro)
router.put("/:id", auth, ControllersCachorro.UpdateCachorro)
router.delete("/:id", auth, ControllersCachorro.DeleteCachorro)

module.exports = router;
