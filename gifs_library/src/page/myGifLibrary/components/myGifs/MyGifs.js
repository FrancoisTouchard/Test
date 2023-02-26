import "./myGifs.css";
import MyGifsCard from "./myGifCard/MyGifsCard";

const MyGifs = ({ myGifsLibrary, setMyGifsLibrary, notifyDeleted }) => {
  return (
    <div className="myGifsContainer">
      <p id="myGifsTitle">My Gifs</p>
      <MyGifsCard
        myGifsLibrary={myGifsLibrary}
        setMyGifsLibrary={setMyGifsLibrary}
        notifyDeleted={notifyDeleted}
      />
    </div>
  );
};
export default MyGifs;
