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
  Region: process.env.AMAZON_REGION,
  Bucket: process.env.AMAZON_BUCKET,
});

//  * Single Upload

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

/* Check File Type
 @param file
 @param cb
 @return {*}
 */
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif|pdf/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: jpg, png or pdf files only!");
  }
}

/**
 * @route POST api/profile/business-img-upload
 * @desc Upload post image
 * @access public
 */
router.post("/home-file-upload", (req, res) => {
  homeProfileUpload(req, res, error => {
    // console.log("requestOkokok", req.file);
    // console.log("error", error);
    if (error) {
      console.log("errors", error);
      res.json({ error: error });
    } else {
      // If File not found
      if (req.file === undefined) {
        console.log("Error: No File Selected!");
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

(async function() {
  try {
    aws.config.setPromisesDependency();
    aws.config.update({
      accessKeyId: process.env.AMAZON_ACCESS_KEY_ID,
      secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY,
      region: "us-east-2",
      Bucket: process.env.AMAZON_SECRET_BUCKET,
    });

    const s3get = new aws.S3();
    const response = await s3get
      .listObjectsV2({
        Bucket: process.env.AMAZON_SECRET_BUCKET,
      })
      .promise();

    console.log(response);
  } catch (e) {
    console.log(e);
  }

  debugger;
});
// End of single profile upload

// router.get("/home-file-upload", (req, res) => {
//   res,
//     error => {
//       // console.log("requestOkokok", req.file);
//       // console.log("error", error);
//       if (error) {
//         console.log("errors", error);
//         res.json({ error: error });
//       } else {
//         // If File not found
//         if (req.file === undefined) {
//           console.log("Error: No File Selected!");
//           res.json("Error: No File Selected");
//         } else {
//           // If Success
//           const imageName = req.file.key;
//           const imageLocation = req.file.location;
//           // Save the file name into database into profile model
//           res.json({
//             image: imageName,
//             location: imageLocation,
//           });
//         }
//       }
//     };
// });
// // End of single profile upload

// ? Multiple File Uploads ( max 4 )
const uploadsBusinessGallery = multer({
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
}).array("galleryImage", 4);
/**
 * @route POST /api/profile/business-gallery-upload
 * @desc Upload business Gallery images
 * @access public
 */
router.post("/multiple-home-file-upload", (req, res) => {
  uploadsBusinessGallery(req, res, error => {
    console.log("files", req.files);
    if (error) {
      console.log("errors", error);
      res.json({ error: error });
    } else {
      // If File not found
      if (req.files === undefined) {
        console.log("Error: No File Selected!");
        res.json("Error: No File Selected");
      } else {
        // If Success
        let fileArray = req.files,
          fileLocation;
        const galleryImgLocationArray = [];
        for (let i = 0; i < fileArray.length; i++) {
          fileLocation = fileArray[i].location;
          console.log("filenm", fileLocation);
          galleryImgLocationArray.push(fileLocation);
        }
        // Save the file name into database
        res.json({
          filesArray: fileArray,
          locationArray: galleryImgLocationArray,
        });
      }
    }
  });
});

module.exports = router;
