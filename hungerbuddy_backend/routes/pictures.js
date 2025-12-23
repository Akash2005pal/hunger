var express = require('express');
var router = express.Router();
var upload = require('./multer');
var pool = require('./pool');

/* UPLOAD MULTIPLE FOOD IMAGES */
router.post(
  '/upload_food_images',
  upload.array('pictures', 10), // ✅ SAME AS FRONTEND
  function (req, res) {

    try {
        console.log(req.body)
      const { categoryid, fooditemid } = req.body;

      req.files.forEach((file) => {
        pool.query(
          `INSERT INTO morepictures
          (categoryid, fooditemid, picture)
          VALUES (?,?,?)`,
          [categoryid, fooditemid, file.filename]
        );
      });

      res.status(200).json({
        status: true,
        message: 'Images uploaded successfully'
      });

    } catch (e) {
      console.log(e);
      res.status(500).json({
        status: false,
        message: 'Critical Error Please Contact Backend Team....'
      });
    }
  }
);

module.exports = router;
