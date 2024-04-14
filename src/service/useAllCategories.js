import { http } from "./http";
import { useQuery } from "react-query";
const url = "/products/categories"
export const useAllCategories = () => {
    const {data, isLoading, isError, error, refetch} = useQuery([] ,() => {

        return http.get(url).then((res) => res.data)
    })
    return [data, isLoading, isError, error, refetch]

}
