import Head from "next/head";

interface IHeader {
   title: string
   description: string
}

function Header({ title, description }: IHeader) {
   return (
      <Head>
         <title>{title}</title>

         <meta name="description" content={description} />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link rel="icon" href="/favicon.ico" />
      </Head>
   )
}

export default Header;
