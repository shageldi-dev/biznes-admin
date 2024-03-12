import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseUrl } from "../../utils/baseUrl";

const staticFilesSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
  endpoints: (builder) => ({
    getStaticFiles: builder.query({
      query: () => "static-files?populate=file",
    }),
  }),
});

export const { useGetStaticFilesQuery } = staticFilesSlice;
export default staticFilesSlice;
