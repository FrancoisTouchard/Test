const SearchResults = ({ gifs }) => {
  console.log("LALALA", gifs);
  return (
    <div className="searchResultsContainer">
      <p> hellooooo </p>
      {gifs.map((gif) => (
        <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
      ))}
    </div>
  );
};
export default SearchResults;
