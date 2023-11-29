const express = require("express");
const productController = require("../controllers/addProduct");
const contactController = require("../controllers/contactUs");
const router = express.Router();
router.get("/add-product", productController.getAddProduct);
router.post("/product", productController.postProduct);
router.get("/contact", contactController.getContactPage);
module.exports = router;
