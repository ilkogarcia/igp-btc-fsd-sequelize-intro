const CommentService = require("../services/CommentService");

module.exports = class CommentCtrl{

    static async apiGetAllComments(req, res){
        try {
            const comments = await CommentService.getAllComments();
            if(!comments){
                res.status(404).json("There are no comment published yet!")
            }
            res.json(comments);
            } catch (error) {
            res.status(500).json({error: error})
        }
    }

    static async apiGetCommentById(req, res){
        try {
            let id = req.params.id || {};
            const comment = await CommentService.getCommentbyId(id);
            res.json(comment);
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

    static async apiCreateComment(req, res){
        try {
            const createdComment = await CommentService.createComment(req.body);
            res.json(createdComment);
        } catch (error) {
            res.status(500).json({error: error});
        }
    }

    static async apiUpdateComment(req, res){
        try {
            const updatedComment = await CommentService.updateComment(req.params.id, req.body);
            if (updatedComment === 0) {
                throw Error("Unable to update comment, error occord");
            }
            res.json(updatedComment);
        } catch (error) {
            res.status(500).json({error: error});
        }
    }

    static async apiDeleteComment(req, res){
        try {
            const commentId = req.params.id;
            const deleteResponse =  await CommentService.deleteComment(commentId)
            res.json(deleteResponse);
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

}