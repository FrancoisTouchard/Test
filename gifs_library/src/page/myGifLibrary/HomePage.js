import Header from "./components/header/Header";
import SearchBar from "./components/search/SearchBar";
import MyGifs from "./components/myGifs/MyGifs";
import Footer from "./components/footer/Footer";
import { useHomePage } from "./useHomePage";
import { ToastContainer } from "react-toastify";
import { notifyAdded } from "./components/toasters/NotifyAdded";
import { notifyDeleted } from "./components/toasters/NotifyDeleted";
import "./homePage.css";

const HomePage = () => {
  const {
    searchGif,
    gifsQueryResult,
    myGifsLibrary,
    setMyGifsLibrary,
    addGifToGifList,
  } = useHomePage();

  return (
    <div className="mainDiv">
      <Header />
      <ToastContainer />
      <SearchBar
        gifsQueryResult={gifsQueryResult}
        searchGif={searchGif}
        setMyGifsLibrary={setMyGifsLibrary}
        addGifToGifList={addGifToGifList}
        notifyAdded={notifyAdded}
      />
      <MyGifs
        myGifsLibrary={myGifsLibrary}
        setMyGifsLibrary={setMyGifsLibrary}
        notifyDeleted={notifyDeleted}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
