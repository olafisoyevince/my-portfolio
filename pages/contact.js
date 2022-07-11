import Head from "next/head";
import ContactContent from "../component/Contact";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="contact" content="contact" />
      </Head>

      <ContactContent />
    </>
  );
};

export default Contact;
