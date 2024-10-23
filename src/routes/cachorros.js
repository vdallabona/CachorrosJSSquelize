const express = require('express');
const ControllersCachorro = require('../controllers/cachorros')

const router = express.Router()

router.get("/", ControllersCachorro.GetCachorro)
router.post("/", ControllersCachorro.CreateCachorro)
router.put("/:id", ControllersCachorro.UpdateCachorro)
router.delete("/:id", ControllersCachorro.DeleteCachorro)

module.exports = router;
