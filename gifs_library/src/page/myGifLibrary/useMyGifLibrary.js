import { useState } from "react";
import { getGifs } from "../../service/giphyApi";
import { getSavedGifs } from "../../service/localStorage";

// function to handle the display of gifs by category, checks if there is a category or not to determine the sorting
function compareCategories(a, b) {
  if (!a.category && !b.category) {
    return 1;
  } else if (!a.category) {
    return 1;
  } else if (!b.category) {
    return -1;
  } else {
    return a.category > b.category ? 1 : -1;
  }
}

const getInitialGifState = () => {
  const sortedGifs = getSavedGifs();
  sortedGifs.sort(compareCategories);

  return sortedGifs;
};

export const useMyGifLibrary = () => {
  const [myGifsLibrary, setMyGifsLibrary] = useState(getInitialGifState());
  const [gifsQueryResult, setGifsQueryResult] = useState([]);

  const addGifToGifList = (gif) => {
    const newGifs = [...myGifsLibrary, gif];
    newGifs.sort(compareCategories);
    setMyGifsLibrary(newGifs);
  };

  const searchGif = async (query) => {
    const data = await getGifs(query);
    setGifsQueryResult(data);
  };

  return {
    searchGif,
    gifsQueryResult,
    myGifsLibrary,
    setMyGifsLibrary,
    addGifToGifList,
  };
};
