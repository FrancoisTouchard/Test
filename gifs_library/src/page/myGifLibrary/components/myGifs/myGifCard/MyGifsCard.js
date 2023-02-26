import { DeleteGif } from "../../gifAddAndDelete/deleteGif/DeleteGif";
import "./myGifsCard.css";

const MyGifsCard = ({ myGifsLibrary, setMyGifsLibrary, notifyDeleted }) => {
  return (
    <div className="myGifsCardContainer">
      {myGifsLibrary.map((gif, index) => (
        <div className="singleCardContainer" key={index}>
          <img src={gif.url} alt={gif.title} />
          <div className="hoverDeleteBtn">
            <DeleteGif
              gif={gif}
              gifs={myGifsLibrary}
              setGifs={setMyGifsLibrary}
              notifyDeleted={notifyDeleted}
            />
          </div>
          <div className="categoryContainer">
            {gif.category && <p id="gifCategory">#{gif.category}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyGifsCard;
