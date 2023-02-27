const { Product } = require('../models/index');

const ProductService = {};
    
    ProductService.getAllProducts = async () => {
        try {
            const allProducts = await Product.findAll();
            return allProducts;
        } catch (error) {
            console.log(`Could not fetch products ${error}`)
        }
    }

    ProductService.createProduct = async (data) => {
        try {
            const newProduct = {
                name: data.name,
                description: data.description,
                price: data.price
            }
        const response = await new Product.create(newProduct);
        return response;
        } catch (error) {
            console.log(error);
        } 
    }

    ProductService.getProductbyId = async (productId) => {
        try {
            const singleProductResponse =  await Product.findByPk(productId);
            return singleProductResponse;
        } catch (error) {
            console.log(`Product not found. ${error}`)
        }
    }

    ProductService.updateProduct = async (productId, name, description, price) => {
            try {
                const updateResponse =  await Product.update({
                    name: name,
                    description: description,
                    price: price
                },
                {where: {id: productId}});
                return updateResponse;
            } catch (error) {
                console.log(`Could not update Product ${error}` );
            }
    }

    ProductService.deleteProduct = async (productId) => {
        try {
            const deletedResponse = await Product.destroy({where: { id: productId}});
            return deletedResponse;
        } catch (error) {
            console.log(`Could  ot delete product ${error}`);
        }
    }

module.exports = ProductService;
