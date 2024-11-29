const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



module.exports.authUser = async (req, res ,next)=> {

    const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzI4NzQ4Njl9.1Kie-sPjl2Ne-uyK51EHCBeZ-nFfMnYIeyEIfQsTb34";

    if(!token) {
        return res.status(401).json({message: 'Unauthorized token'});
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    
       
        

        
        const user  = await userModel.findOne({_id:decoded.id});
       
        
        req.user = user;
        return next();
        
    } catch (error) {
        
        return res.status(401).json({message: 'Unauthorized'});
    }
    

}
