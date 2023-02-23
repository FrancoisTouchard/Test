import GifCard from "../../gifCard/GifCard";
import "./searchResults.css"

const SearchResults = ({ gifs }) => {
  //   console.log("YOO", gifs);
  const cards = gifs.map((gif, index) => {
    // console.log("check gif", gif);
    // console.log("check index", index);
    return <GifCard key={index} data={gif} />;
  });
  return <div className="cardsContainer">{cards}</div>;
};

export default SearchResults;

// const SearchResults = ({ gifs }) => {
//   //   console.log("LALALA", gifs);
//   return (
//     <div className="searchResultsContainer">
//       <p> Search Results </p>
//       {gifs.map((gif) => (
//         <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
//         // <img key={gif.id} src={gif.images.fixed_height_small.url} alt={gif.title} />
//       ))}
//     </div>
//   );
// };
// export default SearchResults;
