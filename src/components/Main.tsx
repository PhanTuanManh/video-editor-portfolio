import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://cdn.discordapp.com/attachments/1364074151014301798/1399290248521060482/Avatar.jpg?ex=68887618&is=68872498&hm=4fd703e31c6d51f543690130731bde8d7f0314000ca3f810c8b9ff30a08844c2&"
            alt="Avatar"
          />
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
