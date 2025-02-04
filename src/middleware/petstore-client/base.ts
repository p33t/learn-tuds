import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed
export const base = createApi({
  reducerPath: 'middleware/reqres-client',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://petstore.swagger.io/v2',
    mode: "cors",
    // Custom headers example
    // prepareHeaders: (headers, { getState }) => {
    //   headers.set('Authorization', 'MY_ACCESS_TOKEN')
    //
    //   headers.set('Access-Control-Allow-Origin', '*')  // allow calling to another port/host [?]
    //   return headers
    // }
  }),
  endpoints: () => ({}),
})
