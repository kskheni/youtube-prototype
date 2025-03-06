const AWS = require('aws-sdk');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require("multer");
require("dotenv").config();
const app = express();

// Set up AWS S3 bucket configuration
const s3 = new AWS.S3({
  accessKeyId: process.env.YOUR_ACCESS_KEY,
  secretAccessKey: process.env.YOUR_SECRET_KEY,
  region: process.env.YOUR_BUCKET_REGION,
  useAccelerateEndpoint: true,
});
const bucketName = process.env.YOUR_BUCKET_NAME;

// Set up bodyParser to parse incoming requests
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Set up CORS
app.use(cors());

// // Set up Multer middleware to handle file uploads
// // by default, multer will store files in memory
const upload = multer()



// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});