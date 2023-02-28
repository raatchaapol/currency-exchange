import DefaultLayout from '@/components/common/DefaultLayout'
import '@/styles/globals.scss'
import { theme } from '@/utils/lib/theme.lib'
import { AppPropsWithLayout } from '@/utils/types/NextLayout'
import { ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient())
  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    <ThemeProvider theme={theme}>
      {getLayout(
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      )}
    </ThemeProvider>
  )
}
