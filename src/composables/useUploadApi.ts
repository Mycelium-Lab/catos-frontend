import { upload } from "@/api/files.api";
import { ref } from "vue";

export const useUploadApi = () => {
  const isFileLoading = ref(false);

  const handleUpload = async (file: File) => {
    isFileLoading.value = true;

    const formData = new FormData();
    formData.append("file", file);
    return upload(formData)
      .then(res => {
        return res.data.name;
      })
      .catch(e => {
        console.error(e);
        return '';
      })
      .finally(() => isFileLoading.value = false);
  };

  return { isFileLoading, handleUpload };
};
