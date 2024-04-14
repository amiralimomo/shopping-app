

import { http } from "./http";
import { useQuery } from "react-query";
const url="/products?limit="
export const useAllProducts = (query=10) => {
    const {data, isLoading, isError, error, refetch} = useQuery([] ,() => {

        return http.get(url+query).then((res) => res.data)
    })
    return [data, isLoading, isError, error, refetch]

}
