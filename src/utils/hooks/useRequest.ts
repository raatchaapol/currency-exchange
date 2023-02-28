import { httpClient } from "../lib/axios.lib";
import { useCallback, useState } from "react";
import { API_METHODS } from "../enums/apiMethods";

function useRequest() {
   const request = useCallback(async (url = '', method = API_METHODS.GET, body = {}, params = {}, headers = {}, options = {}) => {
      try {
         let response = await httpClient({ url, method, data: body, params, headers, ...options })

         if (response.status !== 200) throw new Error(response.statusText);

         return response
      } catch (error: Error | any) {
         throw new Error(error)
      } finally {
      }
   }, [])

   return { request } as const;
}

export default useRequest;
