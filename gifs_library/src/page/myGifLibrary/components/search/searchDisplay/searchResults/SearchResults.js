import GifCard from "./gifCard/GifCard";
import "./searchResults.css";

const SearchResults = ({
  gifs,
  addGifToGifList,
  notifyAdded,
}) => {
  const cards = gifs.map((gif, index) => {
    return (
      <GifCard
        key={index}
        data={gif}
        addGifToGifList={addGifToGifList}
        notifyAdded={notifyAdded}
      />
    );
  });
  return <div className="cardsContainer">{cards}</div>;
};

export default SearchResults;
