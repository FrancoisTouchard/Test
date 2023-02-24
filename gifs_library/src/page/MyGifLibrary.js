import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MyGifs from "../components/myGifs/MyGifs";
// import Search from "../components/search/Search";
import "./myGifLibrary.css";
import ShowSearchButton from "../components/search/ShowSearchButton";

const MyGifLibrary = () => {
  return (
    <div className="mainDiv">
      <Header />
      <ShowSearchButton />
      {/* <Search /> */}
      <MyGifs />
      <Footer />
    </div>
  );
};
export default MyGifLibrary;
