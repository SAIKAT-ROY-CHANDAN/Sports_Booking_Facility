import { TQueryParam } from "@/types/types";
import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
   
    getProducts: builder.query({
        query: (args) => {
          console.log(args);
          const params = new URLSearchParams();
  
          if (args) {
            args.forEach((item: TQueryParam) => {
              params.append(item.name, item.value as string);
            });
          }
  
          return {
            url: "/facility",
            method: "GET",
            params: params,
          };
        },
      
      }),
   
    
  }),
});

export const {
  useGetProductsQuery,
  
} = productApi;