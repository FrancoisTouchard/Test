import "./searchSection.css";
import SearchBarInput from "./searchBarInput/SearchBarInput";
import SearchResults from "./searchResults/SearchResults";

const SearchSection = ({
  searchGif,
  gifsQueryResult,
  addGifToGifList,
  notifyAdded,
}) => {
  return (
    <div className="searchBarAndResultsContainer">
      <div className="searchBarContainer">
        <SearchBarInput handleChange={searchGif} />
      </div>
      <div className="searchResultsContainer">
        <SearchResults
          gifs={gifsQueryResult}
          addGifToGifList={addGifToGifList}
          notifyAdded={notifyAdded}
        />
      </div>
    </div>
  );
};

export default SearchSection;
