import Image from "next/image";
import styles from "../styles/Home.module.css";
import seun from "../assets/IMG_6932.jpg";
import SocialLinks from "../component/SocialLinks";

export default function HomeContent() {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.aside}>
          <h1>I&#39;m Seun,</h1>
          <h1>a Frontend Engineer</h1>
          <SocialLinks />
        </div>

        <div className={styles.seunWrapper}>
          <Image src={seun} alt="seun" className={styles.seun} />
        </div>
      </div>
    </>
  );
}
