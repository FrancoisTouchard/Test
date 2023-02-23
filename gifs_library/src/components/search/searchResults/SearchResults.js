const SearchResults = ({ gifs }) => {
  //   console.log("LALALA", gifs);
  return (
    <div className="searchResultsContainer">
      <p> Search Results </p>
      {gifs.map((gif) => (
        <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
        // <img key={gif.id} src={gif.images.fixed_height_small.url} alt={gif.title} />
      ))}
    </div>
  );
};
export default SearchResults;
