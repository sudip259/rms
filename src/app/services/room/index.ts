import nepApi from "../";
// inject baseurl wit endpoints
const roomApi = nepApi.injectEndpoints({
  endpoints: (build) => ({
    room: build.query({
      query: ({ params }) => ({
        url: `/rooms`,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useRoomQuery } = roomApi;
