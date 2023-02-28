import { API_PATH } from "../enums/apiNames";

const { GET_EXCHANGE_RATE_BY_TIME_SERIES, GET_CONVERT_EXCHANGE_RATE } = API_PATH

const apiRoutes = {
   [GET_EXCHANGE_RATE_BY_TIME_SERIES]: "/timeseries",
   [GET_CONVERT_EXCHANGE_RATE]: "/convert",
}

export { apiRoutes as ENDPOINTS }
