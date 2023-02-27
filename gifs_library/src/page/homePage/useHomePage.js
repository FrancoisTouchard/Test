import { useState } from "react";
import { getGifs } from "../../services/giphyApi";
import { getSavedGifs } from "../../services/localStorage";
import { compareCategories } from "../../utils/compareCategories/compareCategories";

const getInitialGifState = () => {
  const sortedGifs = getSavedGifs();
  sortedGifs.sort(compareCategories);
  return sortedGifs;
};

export const useHomePage = () => {
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
