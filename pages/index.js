import Head from "next/head";
import AboutContent from "../component/About";
import ContactContent from "../component/Contact";
import HomeContent from "../component/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="Home" content="Home" />
      </Head>

      <div className="home-spacer">
        <HomeContent />
      </div>
      <AboutContent />
      <ContactContent />
    </>
  );
}
