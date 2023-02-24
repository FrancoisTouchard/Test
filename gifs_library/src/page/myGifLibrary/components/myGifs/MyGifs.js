import { useEffect, useState } from "react";
import { getSavedGifs } from "../../../../service/localStorage";
import "./myGifs.css";
import MyGifsCard from "./MyGifsCard";

const MyGifs = ({ myGifsLibrary, setMyGifsLibrary }) => {
  return (
    <div className="myGifsContainer">
      <MyGifsCard
        myGifsLibrary={myGifsLibrary}
        setMyGifsLibrary={setMyGifsLibrary}
      />
    </div>
  );
};
export default MyGifs;
