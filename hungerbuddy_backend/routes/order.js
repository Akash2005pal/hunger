var express = require("express");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");

router.post(
  "/submit_batch",
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
              .json({ status: true, message: "Batch Added Successfully" });
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


module.exports = router;