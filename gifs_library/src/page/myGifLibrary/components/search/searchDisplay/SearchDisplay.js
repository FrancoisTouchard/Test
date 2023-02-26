import "./searchDisplay.css";
import SearchBarInput from "./searchBarInput/SearchBarInput";
import SearchResults from "./searchResults/SearchResults";

const SearchDisplay = ({
  searchGif,
  gifsQueryResult,
  addGifToGifList,
  notifyAdded,
}) => {
  return (
    <div className="searchContainer">
      <div>
        <SearchBarInput handleChange={searchGif} />
      </div>
      <div>
        <SearchResults
          gifs={gifsQueryResult}
          addGifToGifList={addGifToGifList}
          notifyAdded={notifyAdded}
        />
      </div>
    </div>
  );
};

export default SearchDisplay;
