import "./style.css";
import instagramLogo from "../../assets/socials/instagram copy.png";
import youtubeLogo from "../../assets/socials/youtube3.png";
import whatsappLogo from "../../assets/socials/whatsapp copy.png";
import telegramLogo from "../../assets/socials/telegram copy.png";
import etehadiye from "../../assets/footer/NoPath.png";
import digitalMedia from "../../assets/footer/samandehi-pacharmi-logo-400x400.png";
import electronicSymbol from "../../assets/footer/enamad_icon_text_color_blue_1024-768x768.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_upside">
        <div className="footer_about">
          <h3 className="footer_title">درباره بامبو</h3>
          <p className="footer_paragraph">
            بامبو یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح ایران
            است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات و
            دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد
          </p>
        </div>
        <div className="footer_news">
          <h3 className="footer_title">خبرنامه</h3>
          <div className="footer_news-input">
            <input type="text" placeholder="ایمیل خود را وارد کنید ..." />
            <button>عضویت</button>
          </div>
        </div>
      </div>

      <div className="footer_lowerside">
        <div>
          <h3 className="footer_title">ارتباط با ما</h3>
          <p className="email-address">iwillbemyvision@gmail.com</p>
          <p className="email-address">amir.azhkan@yahoo.com</p>
          <div className="social-media">
            <img src={instagramLogo} alt="instagram logo" />
            <img src={youtubeLogo} alt="youtube logo" />
            <img src={whatsappLogo} alt="whatsapp logo" />
            <img src={telegramLogo} alt="telegram logo" />
          </div>
        </div>
        <div>
          <h3 className="footer_title">همراه باشید</h3>
          <a className="footer_title-items" href="#">
            سوالات رایج
          </a>
          <a className="footer_title-items" href="#">
            قوانین
          </a>
          <a className="footer_title-items" href="#">
            خدمات
          </a>
        </div>
        <div className="footer-symbols">
          <div className="footer-symbol">
            <img src={etehadiye} alt="etehadiye symbol" />
          </div>
          <div className="footer-symbol">
            <img src={digitalMedia} alt="digitalMedia symbol" />
          </div>
          <div className="footer-symbol">
            <img src={electronicSymbol} alt="electrnic symbol" />
          </div>
        </div>
      </div>

      <div className="footer-authentication">
        <p>
          کليه حقوق محصولات و محتوای اين سایت متعلق به بامبو می باشد و هر گونه
          کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست
        </p>
      </div>
    </div>
  );
};

export default Footer;
