import {
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { useState } from "react";

// color theme for buttons
const theme = createTheme({
  palette: {
    secondary: red,
  },
});

function DeleteAllGifsButton({ setGifs }) {
  const [openDialog, setOpenDialog] = useState(false);

  const deleteAllGifs = () => {
    localStorage.clear();
    setGifs([]);
    setOpenDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Button
        onClick={handleOpenDialog}
        color={"secondary"}
        variant={"outlined"}
      >
        Delete all gifs
      </Button>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography sx={{ fontFamily: "Poppins" }}>
            Are you sure you want to delete ALL your gifs ?
          </Typography>
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={deleteAllGifs} color={"secondary"}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default DeleteAllGifsButton;
