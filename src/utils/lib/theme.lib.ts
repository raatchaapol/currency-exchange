import { createTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Kanit } from "@next/font/google";

const kanitFont = Kanit({ subsets: ['thai'], weight: ['200', '300', '400', '500', '600', '800'], display: 'swap' })

const MuiInputBase = {
   styleOverrides: {
      root: {
         color: deepPurple['A700'],
      }
   }
}

export const theme = createTheme({
   typography: {
      fontFamily: kanitFont.style.fontFamily,
   },
   palette: {
      primary: {
         main: deepPurple['A700'],
      }
   },
   components: {
      MuiInputBase,
   }
});