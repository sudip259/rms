import nepApi from "../";
// query: (args) // args => {identifier, params, data}
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
