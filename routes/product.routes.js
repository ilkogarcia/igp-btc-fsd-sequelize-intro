const  express =  require("express");
const router = express.Router();
const ProductCtrl = require("../controllers/product.controller");

router.get("/products", ProductCtrl.apiGetAllProducts);
router.post("/products", ProductCtrl.apiCreateProduct);
router.get("/products/:id", ProductCtrl.apiGetProductById);
router.put("/products/:id", ProductCtrl.apiUpdateProduct);
router.delete("/products/:id", ProductCtrl.apiDeleteProduct);

module.exports =  router;