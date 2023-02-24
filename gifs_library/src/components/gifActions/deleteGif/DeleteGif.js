import { Button } from "@mui/material";
// import { lightBlue } from "@mui/material/colors";
// import { ThemeProvider } from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { ThemeProvider } from "styled-components";
import { lightBlue } from "@mui/material/colors";

// color theme for buttons
const theme = {
  palette: {
    primary: {
      main: lightBlue,
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
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        onClick={handleDelete}
        style={{ width: "5%", alignSelf: "center", marginTop: "2%" }}
      >
        <DeleteIcon />
      </Button>
    </ThemeProvider>
  );
};
