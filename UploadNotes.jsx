import React, { useState } from 'react';
import './UploadNotes.css';

const UploadNotes = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setUploadStatus('File size should be less than 10MB');
        return;
      }
      setSelectedFile(file);
      setUploadStatus('');
      setUploadProgress(0);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus('Please select a file first');
      return;
    }

    try {
      // Simulate upload progress
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 200));
        setUploadProgress(i);
      }

      // Here you would typically handle the file upload to your backend
      // For example:
      // const formData = new FormData();
      // formData.append('file', selectedFile);
      // const response = await fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData
      // });

      setUploadStatus('File uploaded successfully!');
      setSelectedFile(null);
      setUploadProgress(0);
    } catch (error) {
      setUploadStatus('Error uploading file. Please try again.');
      setUploadProgress(0);
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Study Notes</h2>
      <div className="upload-box">
        <div className="upload-area">
          <input
            type="file"
            id="file-upload"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.txt"
            className="file-input"
          />
          <label htmlFor="file-upload" className="upload-button">
            <span className="upload-icon">📁</span>
            Choose File
          </label>
          <p className="file-types">Supported formats: PDF, DOC, DOCX, TXT</p>
        </div>

        {selectedFile && (
          <div className="file-info">
            <p className="selected-file">
              <span className="file-name">{selectedFile.name}</span>
              <span className="file-size">
                ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
              </span>
            </p>
          </div>
        )}

        {uploadProgress > 0 && (
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${uploadProgress}%` }}
            ></div>
            <span className="progress-text">{uploadProgress}%</span>
          </div>
        )}

        <button 
          onClick={handleUpload} 
          className="submit-button"
          disabled={!selectedFile}
        >
          Upload Notes
        </button>

        {uploadStatus && (
          <p className={`status-message ${uploadStatus.includes('Error') ? 'error' : 'success'}`}>
            {uploadStatus}
          </p>
        )}
      </div>
    </div>
  );
};

export default UploadNotes; 
