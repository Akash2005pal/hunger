var express = require('express');
var router = express.Router();
var pool = require('./pool');
var upload = require('./multer');
var dotenv = require("dotenv");

/* FETCH ALL CATEGORIES */
router.get('/fetch_all_category', function (req, res) {
  try {
    pool.query('select * from foodcategory', function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          status: false,
          message: 'Database Error Please Contact Backend Team....'
        });
      }
      else {
        res.status(200).json({
          data: result,
          status: true,
          message: 'success'
        });
      }
    });
  }
  catch (e) {
    res.status(500).json({
      status: false,
      message: 'Critical Error Please Contact Backend Team....'
    });
  }
});

/* FETCH ALL FOOD ITEMS */
router.get('/fetch_all_fooditems', function (req, res) {
  pool.query(
    'select F.*,' +
    '(select B.branchname from branch B where B.branchid=F.branchid) as branchname,' +
    '(select C.categoryname from foodcategory C where C.categoryid=F.categoryid) as categoryname ' +
    'from fooditems F',
    function (error, result) {
      if (error) {
        res.status(500).json({
          status: false,
          message: 'Database Error Please Contact Backend Team....'
        });
      }
      else {
        res.status(200).json({
          status: true,
          message: 'success',
          data: result
        });
      }
    }
  );
});

/* FETCH FOOD ITEMS BY CATEGORY ID */
router.post('/fetch_all_fooditems_by_category', function (req, res) {
  console.log(req.body)
  pool.query(
    'select F.*,' +
'(select B.branchname from branch B where B.branchid = F.branchid) as branchname,' +
'(select C.categoryname from foodcategory C where C.categoryid = F.categoryid) as categoryname ' +
'from fooditems F ' +
'where F.categoryid = (' +
'  select C.categoryid from foodcategory C where C.categoryname = ?' +
')',
    [req.body.categoryname],
    function (error, result) {
      if (error) {
        console.log(error)
        res.status(500).json({
          status: false,
          message: 'Database Error Please Contact Backend Team....'
        });
      }
      else {
        res.status(200).json({
          status: true,
          message: 'success',
          data: result
        });
      }
    }
  );
});

/* FETCH SINGLE FOOD ITEM BY ID */
router.post('/fetch_all_fooditems_by_id', function (req, res) {
  pool.query(
    'select F.*,' +
    '(select B.branchname from branch B where B.branchid=F.branchid) as branchname,' +
    '(select C.categoryname from foodcategory C where C.categoryid=F.categoryid) as categoryname ' +
    'from fooditems F where F.fooditemid=?',
    [req.body.fooditemid],
    function (error, result) {
      if (error) {
        res.status(500).json({
          status: false,
          message: 'Database Error Please Contact Backend Team....'
        });
      }
      else {
        res.status(200).json({
          status: true,
          message: 'success',
          data: result[0]   // ✅ single object
        });
      }1   
    }
  );
});

router.post('/fetch_all_fooditems_by_category_id', function (req, res) {
  pool.query(
    'select F.*,' +
    '(select B.branchname from branch B where B.branchid=F.branchid) as branchname,' +
    '(select C.categoryname from foodcategory C where C.categoryid=F.categoryid) as categoryname ' +
    'from fooditems F where F.categoryid=?',
    [req.body.fooditemid],
    function (error, result) {
      if (error) {
        res.status(500).json({
          status: false,
          message: 'Database Error Please Contact Backend Team....'
        });
      }
      else {
        res.status(200).json({
          status: true,
          message: 'success',
          data: result[0]   // ✅ single object
        });
      }1   
    }
  );
});

/*****MOBILE */
router.post('/student_sign_in', function (req, res) {
  console.log(req.body)
  try {
    pool.query('select * from students where mobileno=?',[req.body.mobileNo], function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
          status: false,
          message: 'Database Error Please Contact Backend Team....'
        });
      }
      else {
        if(result.length==1)
        res.status(200).json({
          data: result,
          status: true,
          message: 'success',data:result[0]
        });
        else
          res.status(200).json({
          data: result,
          status: false,
          message: 'Your not register yet..Pls contact Branch Admin',data:[]
        });
      }
    });
  }
  catch (e) {
    res.status(500).json({
      status: false,
      message: 'Critical Error Please Contact Backend Team....'
    });
  }
});

///******* */
router.post(
  "/submit_order",
  function (req, res, next) {
    try {
      console.log(req.body);
      pool.query(
        "insert into orders(orderid, orderdate, delivery_status, payment_type)values(?,?,?,?)",
        [
            req.body.orderid,
            req.body.orderdate,
            req.body.delivery_status,
            req.body.payment_type,
           
        ],
        function (error, result) {
          if (error) {
            console.log(error);
            res.status(500).json({
              status: false,
              message: "error in database contach to the admin",
            });
          } else {
            res
              .status(200)
              .json({ status: true,orderid: result.insertId, message: "Order Added Successfully" });
          }
        }
      );
    } catch (e) {
      res.status(500).json({
        status: false,
        message: "error in database contach to the admin",
      });
    }
  }
);

router.post("/submit_order_detail", function (req, res, next) {
  try {
    pool.query(
      "insert into order_detail(orderid,fooditemid,fooditemname,enrollmentno,emailid,mobileno,qty,fullprice,offerprice,amount) values ?",
      [
        req.body.data.map((item) => [
          req.body.orderid,
          item.fooditemid,
          item.fooditemname,
          req.body.enrollmentno,
          req.body.emailid,
          req.body.mobileno,
          item.qty,
          item.fullprice,
          item.offerprice,
          item.offerprice > 0
            ? item.offerprice * item.qty
            : item.fullprice * item.qty,
        ]),
      ],
      function (error, result) {
        if (error) {
          console.log(error);
          res.status(500).json({
            status: false,
            message: "Database Error Please Contact Bankend Team....",
          });
        } else {
          res.status(200).json({
            status: true,
            message: "Order Detail Submitted Successfully....",
          });
        }
      }
    );
  } catch (e) {
    res.status(500).json({
      status: false,
      message: "Critical Error Please Contact Bankend Team....",
    });
  }
});



module.exports = router;