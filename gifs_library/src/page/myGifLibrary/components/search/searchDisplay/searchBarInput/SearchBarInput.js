import "./SearchBarInput.css";

const SearchBarInput = ({ handleChange }) => {
  return (
    <div className="searchBarInputContainer">
      <div className="searchBarInput">
        <input
          type="text"
          className="searchBar"
          placeholder="Search a gif"
          onChange={(e) => handleChange(e.target.value)}
        ></input>
      </div>
    </div>
  );
};
export default SearchBarInput;
