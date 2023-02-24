import { DeleteGif } from "../gifActions/deleteGif/DeleteGif";
import "./myGifsCard.css";

const MyGifsCard = ({ myGifsLibrary, setMyGifsLibrary }) => {
  console.log("YYY", myGifsLibrary);
  return (
    <div className="myGifsCardContainer">
      {myGifsLibrary.map((gif, index) => (
        <div className="singleCardContainer" key={index}>
          <img
            src={gif.url}
            alt={gif.title}
            style={{ height: "90%", width: "auto", maxWidth: "100%" }}
          />
          <div className="hoverBtn">
            <DeleteGif
              gif={gif}
              gifs={myGifsLibrary}
              setGifs={setMyGifsLibrary}
            />
          </div>
          <div className="categoryAndDeleteContainer">
            {gif.category && (
              <p id="gifCategory" style={{ color: "white" }}>
                #{gif.category}
              </p>
            )}
            {/* <div className="thrash">
              <DeleteGif
                gif={gif}
                gifs={myGifsLibrary}
                setGifs={setMyGifsLibrary}
              />
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyGifsCard;
