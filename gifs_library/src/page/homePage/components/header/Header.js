import "./header.css";
const Header = () => {
  return (
    <div className="headerContainer">
      <h1 className="headerText" id="logo">
        My Gif Library
      </h1>
      <h2 className="headerText" id="tagLine">
        The place to keep your best gifs
      </h2>
    </div>
  );
};
export default Header;
