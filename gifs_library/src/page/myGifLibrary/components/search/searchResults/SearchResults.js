import GifCard from "../gifCard/GifCard";
import "./searchResults.css";

const SearchResults = ({ gifs, addGifToGifList }) => {
  const cards = gifs.map((gif, index) => {
    return <GifCard key={index} data={gif} addGifToGifList={addGifToGifList} />;
  });
  return <div className="cardsContainer">{cards}</div>;
};

export default SearchResults;
