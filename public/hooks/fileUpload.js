
import { useState } from "react";
import { v4 } from "uuid";

export const useFileUpload = (isImage) => {
    const [fileList, setFileList] = useState([]);
  
    const handleFileUpload = (e) => {
      const files = e.target.files;
      if (files) {
        for (let i = 0; i < files.length; i++) {
          if (isImage && !files[i].type.match("image/")) {
            return toast.error("file(s) not an Image!");
          }
  
          const fileUrl = URL.createObjectURL(files[i]);
          setFileList((currentFileList) => [
            ...currentFileList,
            { displayUrl: fileUrl, file: files[i], id: v4() },
          ]);
        }
      }
    };
  
    const deleteSelectedImage = (id) => {
      const modifiedFileList = fileList.filter((file) => {
        //   if (file.id === id) {
        //     URL.revokeObjectURL(file.displayUrl);
        //   }
        return file.id != id;
      });
  
      setFileList([...modifiedFileList]);
    };
    return { fileList, handleFileUpload, deleteSelectedImage };
  };
  