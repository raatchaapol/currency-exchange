import { IDefaultApiResponse } from "@/utils/interfaces/IApiCalls"
import { useForm } from "react-hook-form";
import { Stack, Typography, Skeleton, Button, TextField } from "@mui/material"
import Grid from "@mui/material/Grid";

interface IHomeTopSection {
   amount: number
   setAmount: (amount: number) => void
}

function HomeTopSection({ data, isFetching, isError, refetch, amount, setAmount }: IDefaultApiResponse & IHomeTopSection) {
   const { register, handleSubmit, watch, formState: { errors } } = useForm();

   const numberWithCommas = (x: number) => {
      return Number(x.toFixed(2).toString()).toLocaleString('en-US');
   }

   return (
      <Grid xs display="flex" justifyContent="center" padding={3} item={true}>
         <Stack spacing={1} maxWidth='sm' marginTop={20} flex={1}>
            <Typography variant='h6' textTransform='uppercase' textAlign={{ sm: 'left', xs: 'center' }}>Check out your currency rate</Typography>
            <Stack justifyContent='center' direction='row' paddingY={2}>
               <Typography variant='h4' flex={1} textAlign='center'>{isFetching ? <Skeleton /> : `${numberWithCommas(data?.data.result)}฿`}</Typography>
            </Stack>
            <form onSubmit={handleSubmit(() => refetch())}>
               <Stack justifyContent='center' direction='column' spacing={3}>
                  <TextField
                     id="filled-number"
                     label="From USD"
                     type="number"
                     variant="standard"
                     size="medium"
                     required
                     onChange={(e) => setAmount(Number(e.target.value))}
                  />
                  <Button type="submit" variant="contained">Go</Button>
               </Stack>
            </form>
         </Stack>
      </Grid>
   )
}

export default HomeTopSection
