import SocialLinks from "../component/SocialLinks";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={styles.contactWrapper}>
        <div className={styles.contactInfo}>
          <div className={styles.contactHeading}>
            <h1>Just say hi.</h1>
            <p>
              I&apos;m always open to discuss your project and talk about new
              things.
            </p>
          </div>

          <div className={styles.contactMediums}>
            <div className={styles.mail}>
              <p className={styles.mailme}>Mail</p>
              <p className={styles.email}>olafisoyevincent@gmail.com</p>
            </div>

            <div className={styles.socials}>
              <p className={styles.socialPlatform}>Follow me</p>
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className={styles.contactForm}>
          <form>
            <div className={styles.formSection}>
              <label>Name</label>
              <div>
                <input type="text" />
              </div>
            </div>

            <div className={styles.formSection}>
              <label>Email</label>
              <div>
                <input type="text" />
              </div>
            </div>

            <div className={styles.formSection}>
              <label>Message</label>
              <div>
                <textarea name=""></textarea>
              </div>
            </div>
          </form>

          <button>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
