import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://www.instagram.com/m._.hphan/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.facebook.com/yourfacebookprofile"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
      </div>
      <p>
        A portfolio designed & built by{" "}
        <a
          href="https://www.facebook.com/m5phan/"
          target="_blank"
          rel="noreferrer"
        >
          Manh Phan
        </a>{" "}
        with 💜
      </p>
    </footer>
  );
}

export default Footer;
