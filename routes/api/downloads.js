const AWS = require("aws-sdk");

var listAllObjects = require("s3-list-all-objects");

require("dotenv").config();

var s3options = {
  accessKeyId: process.env.AMAZON_ACCESS_KEY_ID,
  secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY,
};

// Get all objects together when they're ready
listAllObjects({ bucket: process.env.AMAZON_BUCKET }, function(err, data) {
  console.log(
    "Got " + data.length + " objects, first object: " + JSON.stringify(data[0])
  );
});

// Get with extra s3 options.
listAllObjects(
  { bucket: process.env.AMAZON_BUCKET, s3options: s3options },
  function(err, data) {
    console.log(
      "Got " +
        data.length +
        " objects, first object: " +
        JSON.stringify(data[0])
    );
  }
);
