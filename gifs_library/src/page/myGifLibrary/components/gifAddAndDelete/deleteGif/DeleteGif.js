import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ThemeProvider } from "styled-components";
import { red } from "@mui/material/colors";

// color theme for buttons
const themos = {
  palette: {
    secondary: {
      main: red[800],
    },
  },
};

export const DeleteGif = ({ gif, gifs, setGifs }) => {
  const handleDelete = () => {
    const updatedGifs = gifs.filter((item) => item.title !== gif.title);
    setGifs(updatedGifs);
    localStorage.setItem("savedGifs", JSON.stringify(updatedGifs));
  };

  return (
    <ThemeProvider theme={themos}>
      <Button
        variant="contained"
        onClick={handleDelete}
        style={{
          maxWidth: "30px",
          maxHeight: "30px",
          minWidth: "30px",
          minHeight: "30px",
        }}
        color="secondary"
      >
        <DeleteIcon />
      </Button>
    </ThemeProvider>
  );
};
