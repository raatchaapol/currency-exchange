import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { IDefaultApiResponse } from "../interfaces/IApiCalls";

function useApiWrapper(queryKey: string[], queryFn: () => Promise<any>, options?: UseQueryOptions) {
   const defaultOptions: UseQueryOptions = {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
   }

   const { data, isFetching, isError, refetch }: IDefaultApiResponse = useQuery({ queryKey: [...queryKey], queryFn, ...defaultOptions, ...options })

   return { data, isFetching, isError, refetch } as const
}

export default useApiWrapper
