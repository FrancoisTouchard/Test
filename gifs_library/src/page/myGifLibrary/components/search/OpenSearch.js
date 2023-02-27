import { useState } from "react";
import { Button } from "@mui/material";
import "./openSearch.css";
import SearchSection from "./searchDisplay/SearchSection";

const OpenSearch = ({
  searchGif,
  gifsQueryResult,
  addGifToGifList,
  notifyAdded,
}) => {
  const [showSearch, setShowSearch] = useState(false);

  const handleClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="btnAndSearchContainer">
      <div className="showSearchBtn">
        <Button
          id="addBtn"
          variant="outlined"
          onClick={handleClick}
        >
          {showSearch ? "close search" : "click to search a gif"}
        </Button>
      </div>
      <div className="searchSection1">
        {showSearch && (
          <SearchSection
            gifsQueryResult={gifsQueryResult}
            searchGif={searchGif}
            addGifToGifList={addGifToGifList}
            notifyAdded={notifyAdded}
          />
        )}
      </div>
    </div>
  );
};

export default OpenSearch;
