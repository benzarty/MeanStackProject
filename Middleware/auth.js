const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('authorization');  //sami chnowa te7eb authorisation w ba3ed t7ot nafes esmeha fil headers postman me3a value

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
    
  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));   //sami 7aja se3iba jwtsecret

    req.user = decoded.user;  //bech te5ou  min token user info 
let user=jwt.decode(token,{complete:true}) //minvideo héthi

    next();
  } catch (err) {
    console.error('something wrong with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
};
