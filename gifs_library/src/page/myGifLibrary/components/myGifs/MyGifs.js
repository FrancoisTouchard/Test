import "./myGifs.css";
import MyGifsCard from "./myGifCard/MyGifsCard";

const MyGifs = ({ myGifsLibrary, setMyGifsLibrary, notifyDeleted }) => {
  return (
    <div className="myGifsContainer">
      <p id="myGifsTitle">- My gifs -</p>
      {myGifsLibrary.length > 0 ? (
        <MyGifsCard
          myGifsLibrary={myGifsLibrary}
          setMyGifsLibrary={setMyGifsLibrary}
          notifyDeleted={notifyDeleted}
        />
      ) : (
        <div>
          <p id="emptyGifs">Your library is empty, start searching !</p>
        </div>
      )}
    </div>
  );
};
export default MyGifs;
