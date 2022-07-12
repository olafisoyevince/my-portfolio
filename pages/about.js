import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="about" content="about" />
      </Head>

      <div className={styles.aboutContainer}>
        <div>
          <h1 className={styles.skillsTitle}>Skills</h1>
          <div className={styles.skills}>
            <div>
              <FontAwesomeIcon
                icon={faHtml5}
                style={{ fontSize: 50, color: "#094067", marginRight: 15 }}
              />
              <p>HTML 5</p>
            </div>

            <div>
              <FontAwesomeIcon
                icon={faCss3Alt}
                style={{ fontSize: 50, color: "#094067", marginRight: 15 }}
              />
              <p>CSS 3</p>
            </div>

            <div>
              <FontAwesomeIcon
                icon={faJs}
                style={{ fontSize: 50, color: "#094067", marginRight: 15 }}
              />
              <p>Javascript</p>
            </div>

            <div>
              <FontAwesomeIcon
                icon={faReact}
                style={{ fontSize: 50, color: "#094067", marginRight: 15 }}
              />
              <p>React</p>
            </div>

            <div>
              <FontAwesomeIcon
                icon={faSass}
                style={{ fontSize: 50, color: "#094067", marginRight: 15 }}
              />
              <p>SASS</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className={styles.experienceTitle}>Experience</h1>
          <div className={styles.job}>
            <div>
              <h2>Frontend Developer Intern</h2>
              <p>Zero & One Technologies Ltd</p>
            </div>
            <div className={styles.jobDuration}>
              <p>05/2022 - Present</p>
              <p>Remote</p>
            </div>
            <p>Achievements/Tasks</p>
            <ul>
              <li>
                Built frontend components according to design specifications.
              </li>
              <li>
                Worked alongside teammates in building user-interfaces for
                clients.
              </li>
            </ul>
          </div>

          <div className={styles.job}>
            <div>
              <h2>Frontend Developer</h2>
              <p>nhub Nigeria</p>
            </div>
            <div className={styles.jobDuration}>
              <p>07/2021 - 04/2022</p>
              <p>Jos, Nigeria</p>
            </div>
            <p>Achievements/Tasks</p>
            <ul>
              <li>
                Tutored younger interns on the basics of HTML and CSS hence,
                helping them develop their coding skills.
              </li>
              <li>
                Worked in team with designers and backend developers in building
                Plateau State Open Government Partnership website
              </li>
              <li>
                Prepared Software Requirement Specification (SRS) for a web
                application which further hastened the development of the app.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
