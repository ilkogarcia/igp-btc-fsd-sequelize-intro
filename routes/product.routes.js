const  express =  require("express");
const router = express.Router();
const ProductCtrl = require("../controllers/product.controller");
const verifyToken = require("../middlewares/verifyToken");

router.get("/products", ProductCtrl.apiGetAllProducts);
router.post("/products", ProductCtrl.apiCreateProduct);
router.get("/products/:id", ProductCtrl.apiGetProductById);
router.put("/products/:id", verifyToken ,ProductCtrl.apiUpdateProduct);
router.delete("/products/:id", ProductCtrl.apiDeleteProduct);

module.exports =  router;