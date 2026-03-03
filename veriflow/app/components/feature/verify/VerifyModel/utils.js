import {
  getCloudinarySignature,
  processAndSaveAssets,
} from "../../../../libs/services/verify/actions";

//handle submit
export const handleSubmit = async ({ 
  file, 
  batchName, 
  setIsLoading, 
  setError, 
  setReport 
}) => {
  if (!file) return;

  setIsLoading(true);
  setError(null);

  try {
    const { timestamp, signature, apiKey } = await getCloudinarySignature();
    const cloudName = process.env.NEXT_PUBLIC_CLOUD_NAME;

    let uploadedAsset ;

      const formData = new FormData();
      formData.append("file", file.fileObject);
      formData.append("api_key", apiKey);
      formData.append("timestamp", timestamp);
      formData.append("signature", signature);
      formData.append("folder", "Veriflow");

      const uploadImage = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
        { method: "POST", body: formData },
      );

      const cloudData = await uploadImage.json();
      if (cloudData.error) throw new Error(cloudData.error.message);

        uploadedAsset = {
        name: file.fileObject.name,
        type: cloudData.resource_type,
        secure_url: cloudData.secure_url,
        public_id: cloudData.public_id,
      };

    const response = await processAndSaveAssets(batchName, uploadedAsset);

    if (response.success) {
      setReport(response.data);
    } else {
      setError(response.error || "Verification failed");
    }
  } catch (err) {
    setError(err.message || "Failed to upload or verify assets.");
  } finally {
    setIsLoading(false);
  }
};
//handle file change
export const handleFileChange = (e, setFile) => {
  const selectedFile = e.target.files[0];
  if (!selectedFile) return;
  const fileWithPreview = {
    fileObject: selectedFile,
    preview: URL.createObjectURL(selectedFile),
    type: selectedFile.type || "image/*",
  }
  setFile(fileWithPreview);
};
//remove file
export const removeFile = (file, setFile) => {
    const updatedFile = file;
    console.log("Removing file:", updatedFile);
    URL.revokeObjectURL(updatedFile.preview);
    setFile();
  };