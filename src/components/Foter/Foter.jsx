import "./Footer.style.css";

const Foter = () => {
    return (
        <footer>
            <div className="container_footer">
                <div className="brand"></div>
                <div className="socialWrapper">
                    <div className="title">
                        <p>Redes Sociais</p>
                    </div>
                    <div className="social_midias">
                    <div className="whats">
                        <p>Whatsapp</p>
                        <a href="https://www.web.whatsapp.com/">
                            <i className="ri-whatsapp-fill"></i>
                        </a>
                        </div>

                        <div className="insta">
                        <p>Instagram</p>
                        <a href="https://www.instagram.com/">
                            <i className="ri-instagram-line"></i>
                        </a>
                        </div>

                    <div className="face">
                        <p>Facebook</p>
                        <a href="https://www.facebook.com/">
                            <i className="ri-facebook-fill"></i>
                        </a>
                        </div>
                    <div className="twitter">
                        <p>Twitter</p>
                        <a href="https://www.twitter.com/">
                            <i className="ri-twitter-fill"></i>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Foter;