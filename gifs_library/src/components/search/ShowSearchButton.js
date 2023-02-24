import { useState } from "react";
import { Button } from "@mui/material";
import Search from "./Search";
import "./showSearchButton.css";

const ShowSearchButton = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div>
      <div className="showSearch">
        <Button sx={{ mt: 3, ml: 3 }} variant="contained" onClick={handleClick}>
          {showSearch ? "close search" : "search a gif"}
        </Button>
      </div>
      <div>{showSearch && <Search />}</div>
    </div>
  );
};

export default ShowSearchButton;
