import { PropsWithChildren } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { Container } from "@mui/material";

interface IDefaultLayout {
   title?: string;
}

function DefaultLayout({ children, title }: IDefaultLayout & PropsWithChildren<{}>) {
   const defaultTitle = 'Currency Exchange by Ratchapol'

   return (
      <>
         <Header title={defaultTitle} description="" />
         <header>
            <Navbar title="EXCHANGE" />
         </header>
         <main>
            <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
               {children}
            </Container>
         </main>
      </>
   );
}

export default DefaultLayout;
