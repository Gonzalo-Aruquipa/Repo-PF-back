const { Router } = require("express");
const productController = require("../controllers/productControllers");

const router = Router();

router.post("/", productController.newProduct);
router.get("/", productController.getProduct);
router.get("/:id", productController.getDetail);

module.exports = router;
