import { useEffect, useState } from "react";
import { DeleteGif } from "../gifActions/deleteGif/DeleteGif";
import "./myGifs.css";

const getSavedGifs = () => {
  const savedGifs = localStorage.getItem("savedGifs") || [];
  const sortedGifs = JSON.parse(savedGifs);
  sortedGifs.sort(compareCategories);
  return sortedGifs;
};

// function to handle the display of gifs by category, checks if there is a category or not to determine the sorting
function compareCategories(a, b) {
  if (!a.category && !b.category) {
    return 0;
  } else if (!a.category) {
    return -1;
  } else if (!b.category) {
    return 1;
  } else {
    return a.category > b.category ? 1 : -1;
  }
}

const MyGifs = () => {
  const [myGifsLibrary, setMyGifsLibrary] = useState(getSavedGifs());

  useEffect(() => {
    setMyGifsLibrary(getSavedGifs());
  }, []);

  return (
    <div className="myGifsContainer">
      <p>MyGifs BOX</p>
      <div className="cardsLibraryContainer">
        {myGifsLibrary.map((gif) => (
          <div key={gif.title}>
            <img src={gif.url} alt={gif.title} />
            {gif.category && <p id="gifCategory">#{gif.category}</p>}
            {/* <DeleteGif getSavedGifs={getSavedGifs} gif={gif} /> */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyGifs;
