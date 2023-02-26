import "./SearchBarInput.css";

const SearchBarInput = ({ handleChange }) => {
  return (
    <div className="searchBarContainer">
      <div className="search">
        <input
          type="text"
          className="searchBar"
          placeholder="Search a gif"
          //   key="search-bar"
          onChange={(e) => handleChange(e.target.value)}
        ></input>
      </div>
    </div>
  );
};
export default SearchBarInput;
