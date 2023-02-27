const ProductService = require("../services/ProductService");

const ProductCtrl = {};

    ProductCtrl.apiGetAllProducts = async (req, res) => {
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

    ProductCtrl.apiGetProductById = async (req, res) => {
        try {
            let id = req.params.id || {};
            const product = await ProductService.getProductbyId(id);
            res.json(product);
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

    ProductCtrl.apiCreateProduct = async (req, res) => {
        try {
            console.log(req.body);
            const createdProduct = await ProductService.createProduct(req.body);
            res.json(createdProduct);
        } catch (error) {
            res.status(500).json({error: error});
        }
    }

    ProductCtrl.apiUpdateProduct = async (req, res) => {
        try {
            const comment = {}
            comment.name = req.body.name;
            comment.description = req.body.description;
            comment.price = req.body.price
            const updatedProduct = await ProductService.updateProduct(comment);
            if(updatedProduct.modifiedCount === 0){
                throw new Error("Unable to update product, error occord");
            }
            res.json(updatedProduct);
        } catch (error) {
            res.status(500).json({error: error});
        }
    }

    ProductCtrl.apiDeleteProduct = async (req, res) => {
        try {
            const productId = req.params.id;
            const deleteResponse =  await ProductService.deleteProduct(productId)
            res.json(deleteResponse);
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

module.exports = ProductCtrl;