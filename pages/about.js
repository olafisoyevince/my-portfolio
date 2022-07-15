import Head from "next/head";
import AboutContent from "../component/About";

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="about" content="about" />
      </Head>

      <AboutContent />
    </div>
  );
};

export default About;
