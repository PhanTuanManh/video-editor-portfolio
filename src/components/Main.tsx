import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/486476550_2144436379310604_1939335565797289260_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGjOzVp31PQvh7Fbw5wJUZEkEjwmBh_iMmQSPCYGH-IyVLAb55gUXRZwbHVNeIjHoZKLB9I-EFWANH7iTyFPA5T&_nc_ohc=lf3GryzfKkAQ7kNvwECuVHb&_nc_oc=AdlDsj6mWjNxK_bN_CkE0OWQ333bjCfiL0X1d7ug5OLwKa3ge-izVmNxWq_PQTM5tnGlL3UcizF1h6lw3ZZmlnaM&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=SpslNg7ghmSvZ3aYjbv5YQ&oh=00_AfQAGAikfwVBSdJCICclWBvY-gXWohrVshwEsIIINqK9QA&oe=687F09CB"
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
              href="https://www.facebook.com/yourfacebookprofile"
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
