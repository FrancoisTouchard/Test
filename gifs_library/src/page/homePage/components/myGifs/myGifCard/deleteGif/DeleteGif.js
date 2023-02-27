import {
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { useState } from "react";

// color theme for buttons
const theme = createTheme({
  palette: {
    secondary: red,
  },
});

export const DeleteGif = ({ gif, gifs, setGifs, notifyDeleted }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleDelete = () => {
    const updatedGifs = gifs.filter((item) => item.url !== gif.url);
    setGifs(updatedGifs);
    localStorage.setItem("savedGifs", JSON.stringify(updatedGifs));
    notifyDeleted();
    setOpenDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          onClick={handleOpenDialog}
          style={{
            maxWidth: "30px",
            maxHeight: "30px",
            minWidth: "30px",
            minHeight: "30px",
            marginTop: "3px",
          }}
          color="secondary"
        >
          <DeleteIcon />
        </Button>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>
            <Typography sx={{ fontFamily: "Poppins" }}>
              Are you sure you want to delete this gif ?
            </Typography>
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleDelete} color={"secondary"}>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </>
  );
};
