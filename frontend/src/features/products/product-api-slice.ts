import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const STOCK_SPARK_API_KEY = import.meta.env.VITE_STOCK_SPARK_API_KEY || "";
const STOCK_BASE_URL = import.meta.env.VITE_STOCK_BASE_URL || "";
const VERCEL_PROTECTION_BYPASS = import.meta.env.VITE_VERCEL_PROTECTION_BYPASS || "";

export interface Products {
    _id: string;
    name: string;
    price: number;
    quantity: number;
    category: string;
}

/**
 * ProductAPI to get AllProducts
 */
export const productApiSlice = createApi({

    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: STOCK_BASE_URL,
        prepareHeaders(headers) {
            if (STOCK_SPARK_API_KEY) {
                headers.set('authorization', `Bearer ${STOCK_SPARK_API_KEY}`)
            }

            // Add Vercel protection bypass header
            if (VERCEL_PROTECTION_BYPASS) {
                headers.set('x-vercel-protection-bypass', VERCEL_PROTECTION_BYPASS)
            }
            return headers
        }
    }),
    endpoints(builder) {
        return {
            fetchProducts: builder.query<Products[], void>({
                query() {
                    return {
                        url: '/products',
                        method: 'GET'
                    }
                }
            }),

            updateProductQuantity: builder.mutation<Products, { id: String, quantity: number }>({
                query({ id, quantity }) {
                    return {
                        url: `/products/${id}/quantity`,
                        method: 'PATCH',
                        body: { quantity }
                    }
                }
            })

        }
    }
})

export const { useFetchProductsQuery, useUpdateProductQuantityMutation } = productApiSlice;