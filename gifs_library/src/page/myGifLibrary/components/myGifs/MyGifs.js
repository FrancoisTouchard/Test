import "./myGifs.css";
import MyGifsCard from "./myGifCard/MyGifsCard";

const MyGifs = ({ myGifsLibrary, setMyGifsLibrary }) => {
  return (
    <div className="myGifsContainer">
      <p id="myGifsTitle">My Gifs</p>
      <MyGifsCard
        myGifsLibrary={myGifsLibrary}
        setMyGifsLibrary={setMyGifsLibrary}
      />
    </div>
  );
};
export default MyGifs;
