import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia() {
  return (
    <div className="social-media-container">
      <a href="https://www.mercy.edu" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>

      <a href="https://www.mercy.edu" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

      <a href="https://www.mercy.edu" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
    </div>
  );
}
