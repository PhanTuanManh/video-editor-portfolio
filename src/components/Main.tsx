import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/486476550_2144436379310604_1939335565797289260_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGjOzVp31PQvh7Fbw5wJUZEkEjwmBh_iMmQSPCYGH-IyVLAb55gUXRZwbHVNeIjHoZKLB9I-EFWANH7iTyFPA5T&_nc_ohc=N3pKx5-KV_8Q7kNvwHQbTCK&_nc_oc=AdkWFhet2BJqKQTLIYQW2Mho5MlLomN2Ox9ruMz9PWLM_mBbiHHg3hfHCsGkenkBSUJWNRlXpG5zyZOMeqNRYBsk&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=fYIYs4kfs4T0NlFxYPqRpA&oh=00_AfXaMU55jcnuDwK-jHSRGL_I-7l8uqqvE1gunOhyypMBmg&oe=68B46E8B"
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
