import { useState } from "react";
import { Button } from "@mui/material";
import Search from "./Search";
import "./searchBar.css";

const SearchBar = ({ searchGif, gifsQueryResult, addGifToGifList }) => {
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
          <Search
            gifsQueryResult={gifsQueryResult}
            searchGif={searchGif}
            addGifToGifList={addGifToGifList}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;