import getStaticFiles from "../service/static-files.service";
import { useQuery } from "react-query";

const getData = async () => {
  const data = await getStaticFiles();
  return data;
};

export function useGetStaticFiles() {
  return useQuery(["index"], () => getData());
}
