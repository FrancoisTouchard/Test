import { Button } from "@mui/material";
// import { lightBlue } from "@mui/material/colors";
// import { ThemeProvider } from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export const DeleteGif = ({ getSavedGifs, gif }) => {
  const [savedGifs, setSavedGifs] = useState(getSavedGifs());
  const handleDelete = (gif) => {
    const updatedGifs = savedGifs.filter((item) => item.url !== gif.url);
    localStorage.setItem("savedGifs", JSON.stringify(updatedGifs));
    setSavedGifs(updatedGifs);
  };
  return (
    <Button
      variant="contained"
      //   endIcon={<FavoriteIcon />}
      onClick={() => handleDelete()}
      style={{ width: "5%", alignSelf: "center", marginTop: "2%" }}
    >
      <DeleteIcon />
    </Button>
  );
};
