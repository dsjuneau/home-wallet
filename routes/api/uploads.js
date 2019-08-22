const express = require("express");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const multer = require("multer");
const path = require("path");
const router = express.Router();

require("dotenv").config();

// @ Store Image
const s3Client = new aws.S3({
  accessKeyId: process.env.AMAZON_ACCESS_KEY_ID,
  secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY,
  Bucket: process.env.AMAZON_BUCKET,
});

// @ Upload Object

const homeProfileUpload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: process.env.AMAZON_SECRET_BUCKET,
    acl: "public-read",
    key: function(req, file, cb) {
      cb(
        null,
        path.basename(file.originalname, path.extname(file.originalname)) +
          "-" +
          Date.now() +
          path.extname(file.originalname)
      );
    },
  }),
  limits: { fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  },
}).single("profileImage");

// @ Check File Type

function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Image files only!");
  }
}

// @ upload document

router.post("/home-file-upload", (req, res) => {
  homeProfileUpload(req, res, error => {
    // console.log("requestOkokok", req.file);
    // console.log("error", error);
    if (error) {
      res.json({ error: error });
    } else {
      // If File not found
      if (req.file === undefined) {
        res.json("Error: No File Selected");
      } else {
        // If Success
        const imageName = req.file.key;
        const imageLocation = req.file.location;
        // Save the file name into database into profile model
        res.json({
          image: imageName,
          location: imageLocation,
        });
      }
    }
  });
});
// End of file upload

module.exports = router;
