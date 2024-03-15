import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENVS } from "../../envs";
import { RootState } from "../store";

export const productApiSlice = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: ENVS["PRODUCT_API"],
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getFilter: builder.query<Product[], FilterParams>({
      query: (arg) => {
        const { brand, color, maxPrice, minPrice, name } = arg;
        return {
          url: "/product/filter",
          params: { brand, color, name, minPrice, maxPrice },
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Product" as const, id })),
              "Product",
            ]
          : ["Product"],
    }),
    getProduct: builder.query<Product, string>({
      query: (id) => `/product/${id}`,
    }),
    getColors: builder.query<Option[], void>({
      query: () => "/color",
    }),
    getBrands: builder.query<Option[], void>({
      query: () => "/brand",
    }),
    createProduct: builder.mutation<ResponseMessage, ProductOrArray>({
      query: (newProduct) => ({
        url: "/product",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation<ResponseMessage, Product>({
      query: ({ brand, color, name, id, price, model }) => ({
        url: `/product/${id}`,
        method: "PUT",
        body: { name, brand, model, color, price },
      }),
      invalidatesTags: (_result, _error, arg) => [
        { type: "Product", id: arg.id },
      ],
    }),
    deleteProduct: builder.mutation<ResponseMessage, string>({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, arg) => [{ type: "Product", id: arg }],
    }),
  }),
});
export const {
  useGetProductQuery,
  useGetBrandsQuery,
  useGetColorsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetFilterQuery,
} = productApiSlice;
