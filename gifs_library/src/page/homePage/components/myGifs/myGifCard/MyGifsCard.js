import { DeleteGif } from "./deleteGif/DeleteGif";
import { CopyGifUrl } from "./copyGifUrl/CopyGifUrl";
import "./myGifsCard.css";

const MyGifsCard = ({ myGifsLibrary, setMyGifsLibrary, notifyDeleted }) => {
  return (
    <div className="myGifsCardsContainer">
      {myGifsLibrary.map((gif, index) => (
        <div className="singleCardContainer" key={index}>
          <img src={gif.url} alt={gif.title} />
          <div className="hoverDeleteBtn">
            <CopyGifUrl gif={gif} />
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
