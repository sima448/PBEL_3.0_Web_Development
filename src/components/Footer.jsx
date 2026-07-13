/*
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h3>📚 BookVerse</h3>

      <p>
        Your one-stop destination for Programming, Science & Technology Books.
      </p>

      <div className="social-icons">
        <a href="https://instagram.com" target="_blank">
          <FaInstagram />
        </a>

        <a href="https://github.com/sima448" target="_blank">
          <FaGithub />
        </a>

        <a href="https://linkedin.com" target="_blank">
          <FaLinkedin />
        </a>
      </div>

      <p>📧 simak4484@gmail.com</p>

      <p>© 2026 BookVerse. All Rights Reserved.</p>
    </footer>
  );
}

export { Footer };
*/

import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h3>📚 BookVerse</h3>

      <p>
        Your one-stop destination for Programming, Science & Technology Books.
      </p>

      <div className="contact-info">
        <p>
          <FaEnvelope /> simak4484@gmail.com
        </p>
      </div>

      <div className="social-icons">
        <a href="https://github.com/sima448" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>

      <p className="copyright">© 2026 BookVerse | Created by Sima Kumari</p>
    </footer>
  );
}

export { Footer };