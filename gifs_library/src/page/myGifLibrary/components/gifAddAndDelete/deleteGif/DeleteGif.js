import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// color theme for buttons
const theme = createTheme({
  palette: {
    secondary: red,
  },
});

export const DeleteGif = ({ gif, gifs, setGifs, notifyDeleted }) => {
  const handleDelete = () => {
    const updatedGifs = gifs.filter((item) => item.title !== gif.title);
    setGifs(updatedGifs);
    localStorage.setItem("savedGifs", JSON.stringify(updatedGifs));
    notifyDeleted();
  };

  return (
    <ThemeProvider theme={theme}>
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
