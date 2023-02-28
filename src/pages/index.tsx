import useApiWrapper from '@/utils/hooks/useApiWrapper'
import useCurrencyConverter from '@/utils/hooks/useCurrencyConverter'
import { API_PATH } from '@/utils/enums/apiNames'
import { IDefaultApiResponse } from '@/utils/interfaces/IApiCalls'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Button, Typography } from '@mui/material'

function Home() {
  const { getConvertedCurrency } = useCurrencyConverter()

  const { data, isFetching, isError, refetch }: IDefaultApiResponse = useApiWrapper([API_PATH.GET_CONVERT_EXCHANGE_RATE], () => getConvertedCurrency(1, 'USD', 'THB'))

  return (
    <Stack spacing={1} maxWidth='sm' flex={1} marginTop={20}>
      <Typography variant='h6'>เช็คค่าเงินของคุณ</Typography>
      <Stack justifyContent='center' direction='row' paddingY={2}>
        {
          isFetching ? <Skeleton variant="text" sx={{ fontSize: '2.5rem', flex: 1 }} /> : <Typography variant='h4'>{data?.data.result}</Typography>
        }
      </Stack>
      <Button variant="contained" onClick={() => refetch()}>Refresh</Button>
    </Stack>
  )
}

export default Home
