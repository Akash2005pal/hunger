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
router.post('/fetch_all_fooditems_by_category_id', function (req, res) {
  pool.query(
    'select F.*,' +
    '(select B.branchname from branch B where B.branchid=F.branchid) as branchname,' +
    '(select C.categoryname from foodcategory C where C.categoryid=F.categoryid) as categoryname ' +
    'from fooditems F where F.categoryid=?',
    [req.body.categoryid],
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
      }
    }
  );
});

module.exports = router;
