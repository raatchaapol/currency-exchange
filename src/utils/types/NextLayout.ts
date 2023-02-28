import { NextPage } from "next"
import { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
   getLayout?: (page: ReactElement) => ReactNode
   getTitle?: (page: ReactElement) => ReactElement
}

export type AppPropsWithLayout = AppProps & {
   Component: NextPageWithLayout
}
