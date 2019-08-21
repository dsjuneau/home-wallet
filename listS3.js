// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
require("dotenv").config();

// Set the region
AWS.config.update({
  region: process.env.AMAZON_SECRET_REGION,
  accessKeyId: process.env.AMAZON_ACCESS_KEY_ID,
  secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY,
});

// Create S3 service object
const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
});

// Create the parameters for calling listObjects
var key = "believe-1566315267190.jpg";
s3.getObject({ Bucket: "homewalletuploads", Key: key })
  .on("success", function(response) {
    console.log("Key was", response.request.params.Key);
    console.log("params", response.request.params);
    // console.log("Request was", response.request);
  })
  .send();

(async function() {
  try {
    AWS.config.update({
      region: "us-east-2",
      accessKeyId: process.env.AMAZON_ACCESS_KEY_ID,
      secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY,
    });

    const response = await s3
      .listObjectsV2({ Bucket: "homewalletuploads" })
      .promise();

    console.log("Links \n  ================= \n");
    response.Contents.forEach(function(document) {
      console.log(
        "https://homewalletuploads.s3.us-east-2.amazonaws.com/" + document.Key
      );
    });
  } catch (e) {
    console.log(e);
  }
})();

// var params = { Bucket: "homewalletuploads", Key: key };
// // var url = s3.getSignedUrl("getObject", params);
// // console.log("The URL is", url);
// s3.getSignedUrl("putObject", params, function(err, url) {
//   console.log("https://homewalletuploads.s3.us-east-2.amazonaws.com/" + key);
// });
