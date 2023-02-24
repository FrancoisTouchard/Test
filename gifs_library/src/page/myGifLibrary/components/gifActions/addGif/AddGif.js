import { useState } from "react";
import { TextField, Typography, Button, Modal, Box } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { lightBlue } from "@mui/material/colors";
import { useAddGif } from "./useAddGif";

// style for modal
const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// color theme for buttons
const theme = {
  palette: {
    primary: {
      main: lightBlue,
    },
  },
};

const AddGif = ({ data, openModal, setOpenModal, addGifToGifList }) => {
  const { onClick, setCategory, handleCloseModal } = useAddGif(
    data,
    setOpenModal,
    /* setMyGifsLibrary,*/
    addGifToGifList
  );

  return (
    <div className="gifAndFavContainer">
      <ThemeProvider theme={theme}>
        <Modal open={openModal} onClose={handleCloseModal}>
          <Box
            sx={styleModal}
            style={{ backgroundColor: "white", height: "auto" }}
          >
            <div style={{ backgroundColor: "#f2f2f2", padding: "10%" }}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{ fontFamily: "Bukhari Script" }}
              >
                Add this gif to your library ?
              </Typography>
              <TextField
                id="categoryInput"
                name="category"
                label="Add a category (optional)"
                placeholder="ex: Funny Animals"
                variant="outlined"
                onChange={(e) => setCategory(e.target.value.toUpperCase())}
                sx={{ mt: 2, width: "400px" }}
              />
              <Button
                sx={{ mt: 3, ml: 3 }}
                variant="contained"
                onClick={onClick}
              >
                Save
              </Button>
            </div>
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
};

export default AddGif;
