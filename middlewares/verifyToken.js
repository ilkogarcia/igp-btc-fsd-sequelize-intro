const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    try {
        const authorization = req.headers.authorization;

        if (!authorization) {
            return res.send ("Invalid token");
        }

        const [strategy, token] = authorization.split(" ");
        const decoded = jwt.verify(token, "secreto");

        req.userID = decoded.userId;
        req.roleId = decoded.roleId;

        console.log('MIDDLEWARE');
        next();

    } catch (error) {
        return res.status(500).send(error.message);
    }

    
}

module.exports = verifyToken;