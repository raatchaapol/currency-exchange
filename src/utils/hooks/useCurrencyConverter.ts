import { ENDPOINTS } from "../constants/apiRoutes"
import { API_METHODS } from "../enums/apiMethods"
import { API_PATH } from "../enums/apiNames"
import useRequest from "./useRequest"

function useCurrencyConverter() {
   const { request } = useRequest()

   const getConvertedCurrency = (
      amount: number,
      from: string,
      to: string
   ): Promise<any> => {

      return new Promise((resolve, reject) => {
         request(ENDPOINTS[API_PATH.GET_CONVERT_EXCHANGE_RATE], API_METHODS.GET, {}, { amount, from, to })
            .then((response: any) => {
               resolve(response)
            })
            .catch((error: any) => {
               reject(error)
            })
      })
   }

   return { getConvertedCurrency } as const
}

export default useCurrencyConverter
