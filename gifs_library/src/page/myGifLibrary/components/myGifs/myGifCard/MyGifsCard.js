import { DeleteGif } from "../../gifAddAndDelete/deleteGif/DeleteGif";
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
            style={{
              height: "90%",
              width: "auto",
              maxWidth: "100%",
              borderRadius: "33px",
            }}
          />
          <div className="hoverDeleteBtn">
            <DeleteGif
              gif={gif}
              gifs={myGifsLibrary}
              setGifs={setMyGifsLibrary}
            />
          </div>
          <div
            className="categoryAndDeleteContainer"
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {gif.category && (
              <p
                id="gifCategory"
                style={{
                  color: "white",
                }}
              >
                #{gif.category}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyGifsCard;
