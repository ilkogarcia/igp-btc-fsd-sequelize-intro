// Importa el modelo Sequelize que usamos para gestionar la tabla Commento
const { Comment } = require('../models/index');

// Clase que contendrá todos los métodos disponibles en el servicio de productos
module.exports = class CommentService{

    // Obtiene todos los productos de la tabla productos
    static getAllComments = async () => {
        try {
            const allComments = await Comment.findAll();
            return allComments;
        } catch (error) {
            console.log(`Could not fetch comments ${error}`)
        }
    }

    // Crea un nuevo registro de comentario en la base de datos
    static createComment = async (data) => {
        try {
            const newComment = {
                message: data.message,
                product_id: data.product_id,
            }
            const response = await Comment.create(newComment);
            return response;
        } catch (error) {
            console.log(error);
        } 
    }

    // Obtiene los datos de un comentario específico según el ID indicado
    static getCommentbyId = async (commentId) => {
        try {
            const singleCommentResponse =  await Comment.findByPk(commentId);
            return singleCommentResponse;
        } catch (error) {
            console.log(`Comment not found. ${error}`)
        }
    }

    // Actualiza todos los datos de un comentario indicado por su ID
    static updateComment = async (commentId, commentData) => {
        try {
            const response = await Comment.update({
                message: commentData.message,
                product_id: commentData.product_id,
            },{where:{id: commentId}});
            return response;
        } catch (error) {
            console.log(`Could not update comment ${error}` );
        }
    }

    // Elimina el registro de comentario indicado según su ID de la base de datos
    static deleteComment = async (commentId) => {
        try {
            const deletedResponse = await Comment.destroy({where: { id: commentId}});
            return deletedResponse;
        } catch (error) {
            console.log(`Could  ot delete comment ${error}`);
        }
    }
}