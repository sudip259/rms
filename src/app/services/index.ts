import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "lib/domain/axiosBaseQuery";

const nepApi = createApi({
  reducerPath: "nepApi",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: () => ({}),
});

export default nepApi;
