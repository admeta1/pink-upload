// const express = require("express");
// const multer = require("multer");
// const AWS = require("aws-sdk");
// // const { v4: uuidv4 } = require('uuid');
// required("dotenv").config();
// const app = express();
// const upload = multer();

// // Configure AWS SDK with your credentials
// AWS.config.update({
//   accessKeyId: process.env.aws_access_key_id,
//   secretAccessKey: process.env.aws_secret_access_key,
//   region: "ap-south-1",
// });

// const s3 = new AWS.S3();

// // API endpoint for file upload
// app.post("/upload", upload.single("file"), async (req, res) => {
//   try {
//     // Extract the file from the request
//     const file = req.file;
//     if (!file) {
//       return res.status(400).json({ message: "No file provided." });
//     }

//     // Generate a unique key for the file in S3 (you can use any naming scheme you prefer)
//     const filename = `documents/${file.originalname}`;

//     // Set up S3 upload parameters
//     const params = {
//       Bucket: "upi-gateway",
//       // Bucket: 'upi-gateway',
//       //   ContentType: 'image/jpg',
//       ContentType: file.mimetype,
//       Key: key,
//       ACL: "public-read", // Change this ACL setting based on your requirements
//     };

//     // Perform the actual upload to S3
//     const data = await s3.upload(params).promise();

//     // Return the S3 object URL back to the client
//     res.json({ url: data.Location });
//   } catch (error) {
//     console.error("Error uploading the file:", error);
//     res.status(500).json({ message: "Error uploading the file." });
//   }
// });

// app.listen(5001, () => {
//   console.log("Server is running on port 5001");
// });

// -------------------------------------

// require('dotenv').config();
// const AWS = require('aws-sdk');
// const { v4: uuidv4 } = require('uuid');

// AWS.config.update({
//   "accessKeyId": process.env.ACCESS_KEY_ID,
//   "secretAccessKey": process.env.SECRET_ACCESS_KEY,
//   region: "ap-south-1",
//   // accessKeyId: "AKIA4SLIDRBCSD5L6QHJ",
//   // secretAccessKey: "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",
//   // correctClockSkew: true,

// });
// S3_BUCKET_NAME = 'upi-gateway'
// // AWS_REGION = 'ap-south-1'
// // aws_access_key_id = AKIA4SLIDRBCSD5L6QHJ
// // aws_secret_access_key = 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

// // const s3 = new AWS.S3();

// class UploadController {
//   async getSignedUrl(userId, data) {
//     try {
//       let resp = { msg: 'file not sent' };
//       if (userId) {
//         const key = `${userId}/${uuidv4()}.${data.extension}`;
//         const url = await s3.getSignedUrl('putObject', {
//           Bucket: 'my-blogster-bucket-1234',
//           // Bucket: 'upi-gateway',
//           ContentType: 'image/jpeg',
//           Key: key
//         });
//         resp = { key, url };
//         if (data?.sender && data.receiver) {
//           console.log(data.sender, data.receiver, data.title, url);
//         };
//       }
//       return resp;
//     } catch (error) {
//       console.log(error);
//       return error;
//     }
//   }

//   // app.listen(5001, () => {
// //   console.log("Server is running on port 5001");
// // });

// }

// module.exports = UploadController;







// require("dotenv").config();

// const express = require("express");
// const app = express();

// const AWS = require("aws-sdk");
// const multer = require("multer");
// const multerS3 = require("multer-s3");

// AWS.config.update({
//   accessKeyId: process.env.aws_access_key_id,
//   secretAccessKey: process.env.aws_secret_access_key,
//   region: "ap-south-1",
// });
// const BUCKET = process.env.BUCKET;
// const s3 = new AWS.S3();

// const upload = multer({
//   storage: multerS3({
//     bucket: BUCKET,
//     s3: s3,
//     act: "public-read",
//     key: (req, file, cb) => {
//       cb(null, file.originalname);
//     },
//   }),
// });


// app.post("/upload", upload.single("file"), (req, resp) => {
//   console.log(req.file);
//   resp.send("success fully uploaded file" + req.file.location + "location");
// });

// app.get("/list", async (req, resp) => {
//   await s3.listObjectsV2({ Bucket: BUCKET }).promise();
//   let r = await s3.listObjectsV2({ Bucket: BUCKET }).promise();
//   resp.send(x);
// });



// app.get("/download/:filename", async (req, resp) => {
//   const filename = req.params.filename;
//   let x = await s3.getObject({ Bucket: BUCKET, key: filename }).promise;

//   resp.send(x.Body);
// });


// app.listen(5001, () => {
//   console.log("Server is running on port 5001");
// });