const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../Models/StudentModel');
const { json } = require('express/lib/response');



verifyTokenadmin=(req,res,next)=>{

    let token = req.headers.authorization //req.header('authorization') kif kif 
 

  try{
    jwt.verify(token,config.get('jwtSecret'))
    next();
  }catch(e){
    res.status(311).json({msg:e})
    
  }

}



  router.delete('/rout1/:id',verifyTokenadmin, async (req, res) => {
    try {
      await User.findOneAndDelete({id:req.params.id})

  
      res.json({ msg: 'User removed' });
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });

  router.get('/rout2/:id', auth, async (req, res) => {
    try {
      const user = await User.findById(req.params.id).select('-password');
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


  router.put('/rout3', auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      if (user) {
        user.firstname= req.body.firstname?req.body.firstname:user.firstname;
       user.lastname=req.body.lastname?req.body.lastname:user.lastname;
       user.city=req.body.city?req.body.city:user.city;
      }
    await user.save();
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  });     
  
  
  // @route    GET api/auth
  // @desc     Get user by token
  // @access   Private
  router.get('/rout4', auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  
router.post(
  '/rout44',
  
  async (req, res) => {

    let role = req.headers.role
    if(role=='admin')
{
    const {
      firstname,
      lastname,
      Role,
      email,
      city,
      birthday,
      password
    } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Useral ready exists' }] });
      }
   
      user = new User({
        firstname,
        lastname,
        email,
        Role,
        city,
        birthday,
        password
      });
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);
      await user.save();
     
     res.json("ajout affectu")

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
 },
 
);

router.post(
  '/rout6',

  async (req, res) => {
  

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const payload = {
        user: {
          id: user.id,
        },
      }; 

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        // { expiresIn: 36000000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.get('/rout7',async (req, res) => {
  try {
    const user = await User.find();
  //  let token=req.headers.authorization
   // let user2=jwt.decode(token,{complete:true})  //héthi min 3ana yomken zeyda //bech ne5ethou information min token
    res.json({useeeeeeer:user});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;