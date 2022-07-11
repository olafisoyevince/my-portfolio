import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks() {
  return (
    <>
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
    </>
  );
}
