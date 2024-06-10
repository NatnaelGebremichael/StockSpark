import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const STOCK_SPARK_API_KEY = import.meta.env.VITE_STOCK_SPARK_API_KEY || "";
const STOCK_BASE_URL = import.meta.env.VITE_STOCK_BASE_URL;

export interface Products {
    _id: string;
    name: string;
    price: number;
    quantity: number;
    category: string;
}

// For Dev  use http://localhost:5000/ (or current port) for baseUrl
export const productApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://stock-spark-lfdk.vercel.app/",
        prepareHeaders(headers) {
            if (STOCK_SPARK_API_KEY) {
                headers.set('authorization', `Bearer ${STOCK_SPARK_API_KEY}`)
            }
            return headers
        }
    }),
    endpoints(builder) {
        return {
            fetchProducts: builder.query<Products[], void>({
                query() {
                    return '/products'
                }
            })
        }
    }
})

export const { useFetchProductsQuery } = productApiSlice;