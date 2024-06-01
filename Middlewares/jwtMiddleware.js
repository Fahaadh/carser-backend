//Token verificaation
const jwt = require('jsonwebtoken') // like in usercontroller here dis for token verification

const jwtMiddleware = (req, res, next) => {
     console.log("Inside jwt middleware");

     try {
          //to get token
          const token = req.headers['authorization'].slice(7) //slice 7 cuz bearer pine space so 7
          console.log(token);

          //verify token
          const jwtVerification = jwt.verify(token,"super2024")
          console.log(jwtVerification);
          req.payload = jwtVerification.userId
          next()
     }
     catch (err) {
          res.status(401).json({ "Authorization": err.message })
     }
}
module.exports = jwtMiddleware 