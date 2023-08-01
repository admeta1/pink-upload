const express = require("express");

const multer = require("multer");
const AWS = require("aws-sdk");
const cors = require("cors");
require("dotenv").config();

// Configure AWS SDK with your credentials
const s3 = new AWS.S3({
    accessKeyId: process.env.aws_access_key_id,
    secretAccessKey: process.env.aws_secret_access_key,
    region: "ap-south-1",
});
const app = express();
app.use(cors()); 
const upload = multer();
app.post("/upload", upload.single("file"), async (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ message: "No file provided." });
  }
  const params = {
    Bucket: "upi-gateway",
    Key: file.originalname,
    Body: file.buffer,
  };
  try {
    const result = await s3.upload(params).promise();
    console.log("File uploaded successfully:", result.Location);
    res.json({ message: "File uploaded successfully", url: result.Location });
  } catch (error) {
    console.error("Error uploading file to S3 aws:", error);
    res.status(500).json({ message: "Error uploading file to S3" });
  }



  app.get("/list", async (req, resp) => {
    await s3.listObjectsV2({ Bucket: BUCKET }).promise();
    let r = await s3.listObjectsV2({ Bucket: BUCKET }).promise();
    resp.send(x);
  });
});
const port = 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
