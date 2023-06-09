import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import { Box, Container } from "@mui/material";

export default function Perfil() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Perfil</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <h1>Hola gente</h1>
          {session ? <Box sx={{border: '1px dashed grey'}}>hola</Box> : <p>HOLAA</p>}
        </Container>
      </main>
    </>
  );
}
