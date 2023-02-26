import "./SearchBarInput.css";

const SearchBarInput = ({ handleChange }) => {
  return (
    <div className="searchBarFull">
      <div className="searchBarInputContainer">
        <input
          type="text"
          className="searchBarInput"
          placeholder="Search a gif here..."
          onChange={(e) => handleChange(e.target.value)}
        ></input>
      </div>
    </div>
  );
};
export default SearchBarInput;
