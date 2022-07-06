import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import seun from "../assets/IMG_6932.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="Home" content="Home" />
      </Head>

      <div className={styles.home}>
        <div className={styles.aside}>
          <h1>I&#39;m Seun,</h1>
          <h1>a Frontend Engineer</h1>
          <div>
            <a href="https://github.com/olafisoyevince">
              <FontAwesomeIcon
                icon={faGithub}
                style={{ fontSize: 20, color: "#094067", marginRight: 15 }}
              />
            </a>
            <a href="https://www.linkedin.com/in/seun-olafisoye-58223b167/">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ fontSize: 20, color: "#094067", marginRight: 15 }}
              />
            </a>
            <a href="https://twitter.com/fisoyeseun_">
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ fontSize: 20, color: "#094067", marginRight: 15 }}
              />
            </a>
          </div>
        </div>

        <div className={styles.seunWrapper}>
          <Image src={seun} alt="seun" className={styles.seun} />
        </div>
      </div>
    </>
  );
}
