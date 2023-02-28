import { IDefaultApiResponse } from "@/utils/interfaces/IApiCalls"
import { Stack, Typography, Skeleton, Button, TextField } from "@mui/material"
import Grid from "@mui/material/Grid";

interface IHomeTopSection {
   amount: number
   setAmount: (amount: number) => void
}

const numberWithCommas = (x: number) => {
   return Number(x.toFixed(2).toString()).toLocaleString('en-US');
}

function HomeTopSection({ data, isFetching, isError, refetch, amount, setAmount }: IDefaultApiResponse & IHomeTopSection) {
   return (
      <Grid xs display="flex" justifyContent="center" padding={3} item={true}>
         <Stack spacing={1} maxWidth='sm' marginTop={20} flex={1}>
            <Typography variant='h6' textTransform='uppercase'>Check out your currency rate</Typography>
            <Stack justifyContent='center' direction='row' paddingY={2}>
               <Typography variant='h4' flex={1} textAlign='center'>{isFetching ? <Skeleton /> : `${numberWithCommas(data?.data.result)}฿` }</Typography>
            </Stack>
            <TextField
               id="filled-number"
               label="From USD"
               type="number"
               InputLabelProps={{
                  shrink: true,
               }}
               variant="filled"
               onChange={(e) => setAmount(Number(e.target.value))}
            />
            <Button variant="contained" onClick={() => refetch()}>Go</Button>
         </Stack>
      </Grid>
   )
}

export default HomeTopSection
