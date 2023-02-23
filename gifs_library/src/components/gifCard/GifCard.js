import "./gifCard.css";
// import Button from "@mui/material/Button";
import { TextField, Typography, Button, Modal, Box } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { ThemeProvider } from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import Modal from "@mui/material/Modal";
import { useState } from "react";

const GifCard = (data) => {
  // console.log("HHHHH", data)
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const [category, setCategory] = useState("");

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
  return (
    <div className="gifAndFavContainer">
      <img src={data.data.images.fixed_height.url} alt={data.title} />
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          //   endIcon={<FavoriteIcon />}
          onClick={(e) => {
            e.preventDefault();
            handleOpenModal();
          }}
          style={{ width: "5%", alignSelf: "center", marginTop: "2%" }}
        >
          <FavoriteIcon />
        </Button>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
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
                id="outlined-basic"
                name="category"
                label="Add a category (optional)"
                placeholder="ex: Funny Animals"
                variant="outlined"
                onChange={(e) => setCategory(e.target.value)}
                sx={{ mt: 2, width: "400px" }}
              />
              <Button
                sx={{ mt: 3, ml: 3 }}
                variant="contained"
                onClick={() => {
                  const gifToSave = {
                    url: data.data.images.fixed_height.url,
                    title: data.data.title,
                    category: category,
                  };
                  const savedGifs =
                    JSON.parse(localStorage.getItem("savedGifs")) || [];
                  savedGifs.push(gifToSave);
                  localStorage.setItem("savedGifs", JSON.stringify(savedGifs));
                  handleCloseModal();
                }}
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

export default GifCard;

//         <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
//         <img key={gif.id} src={gif.images.fixed_height_small.url} alt={gif.title} />
