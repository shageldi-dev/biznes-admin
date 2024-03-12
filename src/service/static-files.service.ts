import { StaticFileResponse } from "../types/type";
import { AxiosInstance } from "../utils/axios.instance";

const getStaticFiles = async () => {
  const result = await AxiosInstance.get<StaticFileResponse>(
    "/api/static-files?populate=file"
  );
  return result.data;
};

export default getStaticFiles;
