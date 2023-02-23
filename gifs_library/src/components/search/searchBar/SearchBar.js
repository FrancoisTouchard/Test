const SearchBar = ({ handleChange }) => {
  return (
    <div className="searchBarContainer">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search a gif"
          //   key="search-bar"
          onChange={(e) => handleChange(e.target.value)}
        ></input>
      </div>
    </div>
  );
};
export default SearchBar;
