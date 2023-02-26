import MyGifs from "./components/myGifs/MyGifs";
import Header from "./components/header/Header";
import SearchBar from "./components/search/SearchBar";
import { useMyGifLibrary } from "./useMyGifLibrary";
import Footer from "./components/footer/Footer";
import "./myGifLibrary.css";

const MyGifLibrary = () => {
  const {
    searchGif,
    gifsQueryResult,
    myGifsLibrary,
    setMyGifsLibrary,
    addGifToGifList,
  } = useMyGifLibrary();

  return (
    <div className="mainDiv">
      <Header />
      <SearchBar
        gifsQueryResult={gifsQueryResult}
        searchGif={searchGif}
        setMyGifsLibrary={setMyGifsLibrary}
        addGifToGifList={addGifToGifList}
      />
      <MyGifs
        myGifsLibrary={myGifsLibrary}
        setMyGifsLibrary={setMyGifsLibrary}
      />
      <Footer />
    </div>
  );
};

export default MyGifLibrary;
