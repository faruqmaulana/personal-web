import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
//
export default function Layout({ titlePage, children }) {
  return (
    <>
      <Head>
        <title>{titlePage}</title>
      </Head>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
}
