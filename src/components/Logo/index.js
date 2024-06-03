import logo from "../../assets/logo.svg";
import "./style.css";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo"></img>
      <p>Bookviews</p>
    </div>
  );
}

export default Logo;
