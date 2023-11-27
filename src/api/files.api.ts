import { baseApiClient } from "./baseApiClient";

const FILES_END_POINT = "/files";

export type UploadResponse = {
    name: string;
}

export const upload = (payload: FormData) => {
  return baseApiClient.post<UploadResponse>(FILES_END_POINT + "/upload", payload);
};
