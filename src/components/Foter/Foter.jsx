import "./Footer.style.css";
import BRAND from "../../assets/brand_ReallyBasic.svg";

const Foter = () => {
  return (
    <footer>
      <div className="container_footer">
        <div className="brand">
            <img src={BRAND} alt="logomarca Really Basic" />
            <p>Really Basic</p>
        </div>
        <div className="socialWrapper">
          <div className="title">
            <p>Redes Sociais</p>
          </div>
          <div className="social_midias">
            <div className="whats">
              <a href="https://www.whatsapp.com/" target="_blank">
                <i className="ri-whatsapp-fill"></i>
                <p>Whatsapp</p>
              </a>
            </div>

            <div className="insta">
              <a href="https://www.instagram.com/" target="_blank">
                <i className="ri-instagram-fill"></i>
                <p>Instagram</p>
              </a>
            </div>

            <div className="face">
              <a href="https://www.facebook.com/" target="_blank">
                <i className="ri-facebook-fill"></i>
                <p>Facebook</p>
              </a>
            </div>
            <div className="twitter">
              <a href="https://www.twitter.com/" target="_blank">
                <i className="ri-twitter-fill"></i>
                <p>Twitter</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foter;
