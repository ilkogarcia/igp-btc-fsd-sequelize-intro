const { Product } = require('../models/index');

module.exports = class ProductService{
    
    static async getAllProducts(){
        try {
            const allProducts = await Product.findAll();
            return allProducts;
        } catch (error) {
            console.log(`Could not fetch products ${error}`)
        }
    }

    static async createProduct(data){
        try {
            const newProduct = {
                name: data.name,
                description: data.description,
                price: data.price
            }
        const response = await Product.create(newProduct);
        return response;
        } catch (error) {
            console.log(error);
        } 
    }
    static async getProductbyId(productId){
        try {
            const singleProductResponse =  await Product.findByPk(productId);
            return singleProductResponse;
        } catch (error) {
            console.log(`Product not found. ${error}`)
        }
    }

    static async updateProduct(productID, productData){
        try {
            const response = await Product.update({
                name: productData.name,
                description: productData.description,
                price: productData.price
            },{where:{id: productID}});
            return response;
        } catch (error) {
            console.log(`Could not update Product ${error}` );
        }
    }

    static async deleteProduct(productId){
        try {
            const deletedResponse = await Product.destroy({where: { id: productId}});
            return deletedResponse;
        } catch (error) {
            console.log(`Could  ot delete product ${error}`);
        }
    }
}