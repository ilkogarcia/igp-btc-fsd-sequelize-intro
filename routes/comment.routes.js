const  express =  require("express");
const router = express.Router();
const CommentCtrl = require("../controllers/comment.controller");

router.get("/comments", CommentCtrl.apiGetAllComments);
router.post("/comments", CommentCtrl.apiCreateComment);
router.get("/comments/:id", CommentCtrl.apiGetCommentById);
router.put("/comments/:id", CommentCtrl.apiUpdateComment);
router.delete("/comments/:id", CommentCtrl.apiDeleteComment);

module.exports =  router;