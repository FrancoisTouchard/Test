import "./search.css";
import SearchBarInput from "./searchBarInput/SearchBarInput";
import SearchResults from "./searchResults/SearchResults";

const Search = ({ searchGif, gifsQueryResult, addGifToGifList }) => {
  return (
    <div className="searchContainer">
      <div>
        <SearchBarInput handleChange={searchGif} />
      </div>
      <div>
        <SearchResults
          gifs={gifsQueryResult}
          addGifToGifList={addGifToGifList}
        />
      </div>
    </div>
  );
};

export default Search;
