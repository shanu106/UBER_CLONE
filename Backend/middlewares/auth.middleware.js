const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model')


module.exports.authUser = async (req, res ,next)=> {

    const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];
  
    if(!token) {
        return res.status(401).json({message: 'Unauthorized'});
    }
    const isBlacklisted = await blacklistTokenModel.findOne({token:token});

    if(isBlacklisted){
        return res.status(401).json({message: 'Unauthorized'});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    
        const user  = await userModel.findOne({_id:decoded.id.userid});
      
       
        
        req.user = user;
        return next();
        
    } catch (error) {
        
        return res.status(401).json({message: 'Unaurthorized'});
    }
    

}
