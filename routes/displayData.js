const express = require("express");
const displayController = require("../controllers/displayData");
const router = express.Router();

router.post("/displayData", displayController.getData);
module.exports = router;
