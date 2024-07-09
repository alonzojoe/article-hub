import { useState } from "react";

const useFileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearUpload = () => {
    setSelectedFile(null);
    setPreviewImg(null);
  };

  return [selectedFile, previewImg, handleFileUpload, clearUpload];
};

export default useFileUpload;
