import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MyGifs from "../components/myGifs/MyGifs";
import Search from "../components/search/Search";
import "./myGifLibrary.css";

const MyGifLibrary = () => {
  return (
    <div className="mainDiv">
      <Header />
      <Search />
      <MyGifs />
      <Footer />
    </div>
  );
};
export default MyGifLibrary;
