import Logo from "./Logo";
import Menu from "./Menu";

function Footer() {
  return (
    <footer className="block footer">
      <ContactInfo />
      <Menu />
    </footer>
  );
}

function ContactInfo() {
  return (
    <div className="contact-info">
      <Logo />
      <div className="info">
        <p>Phone: 99 9999 9999 99</p>
        <p>Email: meupau@noteu.cu</p>
      </div>
    </div>
  );
}

export default Footer;
