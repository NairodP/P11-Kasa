import "/src/css/Components/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <img className="footer-logo" src="/src/assets/icons/logo-NB.png" alt="Logo" />
      <div>
        <img className="copyright-logo" src="/src/assets/icons/copyright.png" alt="Copyright" />
        <span>2020 Kasa. All rights reserved</span>
      </div>
    </div>
  );
}