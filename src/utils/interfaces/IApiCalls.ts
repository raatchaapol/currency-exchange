import { UseQueryResult } from "@tanstack/react-query";

interface IDefaultPostRequest {
   url: string;
   body: any;
   headers: any;
}

interface IDefaultGetRequest {
   url: string;
   params: any;
   headers: any;
}

interface ICurrencyConverter {
   from: string;
   to: string;
   amount: number;
}

interface ICurrencyTimeSeries {}

interface IDefaultApiResponse {
   data?: any;
   isError?: boolean;
   isFetching?: boolean;
   isLoading?: boolean;
   refetch: () => Promise<UseQueryResult>;
}

export type {
   ICurrencyConverter,
   ICurrencyTimeSeries,
   IDefaultGetRequest,
   IDefaultPostRequest,
   IDefaultApiResponse
}