import { PropsWithChildren } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

interface IDefaultLayout {
   title?: string;
}

function DefaultLayout({ children, title }: IDefaultLayout & PropsWithChildren<{}>) {
   const defaultTitle = 'Foreign Exchange Rate by Ratchapol'

   return (
      <>
         <Header title={defaultTitle} description="Convert your currency and check the foreign exchange rate" />
         <header>
            <Navbar title="RATCHAPOL" />
         </header>
         <main>
            <Box sx={{ flexGrow: 1 }}>
               {children}
            </Box>
         </main>
      </>
   );
}

export default DefaultLayout;
