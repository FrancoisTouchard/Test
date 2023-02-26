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
    <div>
      <div className="showSearch">
        <Button sx={{ m: 1 }} variant="contained" onClick={handleClick}>
          {showSearch ? "close search" : "search a gif"}
        </Button>
      </div>
      <div>
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
