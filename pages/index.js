import Head from "next/head";
import ContactContent from "../component/Contact";
import HomeContent from "../component/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="Home" content="Home" />
      </Head>

      <HomeContent />

      <ContactContent />
    </>
  );
}
