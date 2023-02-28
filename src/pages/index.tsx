import useApiWrapper from '@/utils/hooks/useApiWrapper'
import useCurrencyConverter from '@/utils/hooks/useCurrencyConverter'
import { API_PATH } from '@/utils/enums/apiNames'
import { IDefaultApiResponse } from '@/utils/interfaces/IApiCalls'
import HomeTopSection from '@/components/home/HomeTopSection';
import Grid from "@mui/material/Grid";
import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

function Home() {
  const { getConvertedCurrency } = useCurrencyConverter()
  const [amount, setAmount] = useState<number>(1)
  const { data, isFetching, isError, refetch }: IDefaultApiResponse = useApiWrapper([API_PATH.GET_CONVERT_EXCHANGE_RATE], () => getConvertedCurrency(amount, 'USD', 'THB'))

  return (
    <Grid container justifyContent='center'>
      <HomeTopSection
        data={data}
        isFetching={isFetching}
        isError={isError}
        refetch={refetch}
        amount={amount}
        setAmount={setAmount}
      />
    </Grid>
  )
}

export default Home
