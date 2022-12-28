import axios from "axios";
import type { AxiosError } from "axios";

// Set default header. e.g, X-API-KEY
axios.defaults.headers["x-functions-key"] =
  "trsmthTaK7p/CS6CSQamg0zB9xxmd9w5COrtM9vS1azadc4sksMYPA==";

const axiosBaseQuery = ({ baseUrl }: any) => {
  return async (conf: any) => {
    const { url, method, body, params } = conf;
    try {
      // api call
      const result = await axios({
        url: baseUrl + url,
        method,
        data: body,
        params,
      });
      // return success response
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      // return error response
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
};

export default axiosBaseQuery;
