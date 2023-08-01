import React, { useState } from "react";
import "./pink.css";
import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import axios from "axios";

function Pink() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile === undefined || selectedFile === null) {
      // alert("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    axios
      .post("http://localhost:5001/upload", formData)
      .then((response) => {
        console.log("File uploaded successfully:", response.data.url);
        // You can handle the response URL as needed, e.g., display the uploaded image
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        // Handle error here
      });
  };

  return (
    <div className="main-pink">
      <div className="pink-container">
        <div className="pinky1">
          <div className="pink-bt">
            <DownloadOutlined />
          </div>
          <div className="pink-txt">
            <p>Drop file jpeg, png, gif here</p>
          </div>
        </div>
        <div className="pinky2">
          <p>Or </p>
          <input type="file" onChange={handleFileChange} />
        </div>
        <div className="pinky3">
          <p>This Size of image should be </p>
          <h6>200 X 200</h6>
        </div>
      </div>
      <div className="pinky4">
        <button className="pink-btn1" onClick={handleFileUpload}>
          UPLOAD
          <UploadOutlined />
        </button>
      </div>
    </div>
  );
}

export default Pink;
