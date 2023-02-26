import "./header.css";
const Header = () => {
  return (
    <div className="headerContainer">
      <p className="headerText" id="logo">
        My Gif Library
      </p>
      <p className="headerText" id="tagLine">
        The place to keep your best gifs
      </p>
    </div>
  );
};
export default Header;
