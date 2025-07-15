import "../style/Header.css";
import hamburger from "../data/image.png";
const Header = ({ toggleList }) => {
  return (
    <div className="Header">
      <button onClick={toggleList}>
        <img src={hamburger} alt="menu" />
      </button>
      <div className="title">
        <a href="/notes">
          <h1>Lotion</h1>
        </a>
        <p>Like notion but worse</p>
      </div>
      <div className="cooldiv"></div>
    </div>
  );
};

export default Header;
