var express = require('express');
var router = express.Router();
var pool=require('./pool')

router.get('/fetch_all_category', function(req, res, next) {
  
  try{
    pool.query('select * from foodcategory',function(error,result){
     if(error)
     {  console.log(error)
        res.status(500).json({status:false,message:'Database Error Please Contact Bankend Team....'})
     }
    else
    {
      res.status(200).json({data:result,status:true,message:'success'})
    }
   

    })

  }
  catch(e)
  {

       res.status(500).json({status:false,message:'Critical Error Please Contact Bankend Team....'})
  }
});

module.exports = router;
