import "./gifCard.css";
import { Button } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { ThemeProvider } from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import Modal from "@mui/material/Modal";
import { useState } from "react";
import AddGif from "../gifActions/addGif/AddGif";
import MyGifs from "../myGifs/MyGifs";

const GifCard = (data) => {
  // console.log("HHHHH", data);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
 

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
      </ThemeProvider>
      <AddGif
        data={data}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};

export default GifCard;

//         <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
//         <img key={gif.id} src={gif.images.fixed_height_small.url} alt={gif.title} />
