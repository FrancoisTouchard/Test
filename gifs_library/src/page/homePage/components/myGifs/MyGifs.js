import "./myGifs.css";
import MyGifsCard from "./myGifCard/MyGifsCard";
import DeleteAllGifsButton from "./myGifCard/deleteGif/DeleteAllGifsButton";

const MyGifs = ({ myGifsLibrary, setMyGifsLibrary, notifyDeleted }) => {
  return (
    <div className="myGifsContainer">
      <h3 id="myGifsTitle">- My gifs -</h3>
      {myGifsLibrary.length > 0 ? (
        <>
          <DeleteAllGifsButton setGifs={setMyGifsLibrary} />
          <MyGifsCard
            myGifsLibrary={myGifsLibrary}
            setMyGifsLibrary={setMyGifsLibrary}
            notifyDeleted={notifyDeleted}
          />
        </>
      ) : (
        <div>
          <p id="emptyGifs">Your library is empty, start searching !</p>
        </div>
      )}
    </div>
  );
};
export default MyGifs;
