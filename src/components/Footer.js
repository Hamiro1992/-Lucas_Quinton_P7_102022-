import logoFooter from "../assets/img/LOGO-Footer.svg";

function Footer() {
  return (
    <div className="Footer">
      <div className="Logo-Footer">
        <img src={logoFooter} alt="Kasa" className="lmj-logo" />
      </div>
      <div className="Copyright">
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
