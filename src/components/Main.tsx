import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="../assets/images/Avatar.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://www.instagram.com/m._.hphan/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/m5phan"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
          </div>
          <h1>Phan Tuan Manh</h1>
          <p>Video Producer & Content Editor</p>

          <div className="mobile_social_icons">
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
        </div>
      </div>
    </div>
  );
}

export default Main;
