// Importa el modelo Sequelize que usamos para gestionar la tabla Producto
const { Product } = require('../models/index');

// Clase que contendrá todos los métodos disponibles en el servicio de productos
module.exports = class ProductService{

    // Obtiene todos los productos de la tabla productos
    static getAllProducts = async () => {
        try {
            const allProducts = await Product.findAll();
            return allProducts;
        } catch (error) {
            console.log(`Could not fetch products ${error}`)
        }
    }

    // Crea un nuevo registro de producto en la base de datos
    static createProduct = async (data) => {
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

    // Obtiene los datos de un producto específico según el ID indicado
    static getProductbyId = async (productId) => {
        try {
            const singleProductResponse =  await Product.findByPk(productId);
            return singleProductResponse;
        } catch (error) {
            console.log(`Product not found. ${error}`)
        }
    }

    // Actualiza todos los datos de un producto indicado por su ID
    static updateProduct = async (productID, productData) => {
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

    // Elimina el registro de producto indicado según su ID de la base de datos
    static deleteProduct = async (productId) => {
        try {
            const deletedResponse = await Product.destroy({where: { id: productId}});
            return deletedResponse;
        } catch (error) {
            console.log(`Could  ot delete product ${error}`);
        }
    }
}