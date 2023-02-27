const ProductService = require("../services/ProductService");

module.exports = class ProductCtrl{

    static async apiGetAllProducts(req, res){
        try {
            const products = await ProductService.getAllProducts();
            if(!products){
                res.status(404).json("There are no product published yet!")
            }
            res.json(products);
            } catch (error) {
            res.status(500).json({error: error})
        }
    }

    static async apiGetProductById(req, res){
        try {
            let id = req.params.id || {};
            const product = await ProductService.getProductbyId(id);
            res.json(product);
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

    static async apiCreateProduct(req, res){
        try {
            const createdProduct = await ProductService.createProduct(req.body);
            res.json(createdProduct);
        } catch (error) {
            res.status(500).json({error: error});
        }
    }

    static async apiUpdateProduct(req, res){
        try {
            const updatedProduct = await ProductService.updateProduct(req.params.id, req.body);
            if (updatedProduct === 0) {
                throw Error("Unable to update product, error occord");
            }
            res.json(updatedProduct);
        } catch (error) {
            res.status(500).json({error: error});
        }
    }

    static async apiDeleteProduct(req, res){
        try {
            const productId = req.params.id;
            const deleteResponse =  await ProductService.deleteProduct(productId)
            res.json(deleteResponse);
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

}