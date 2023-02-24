import "./gifCard.css";
import { Button } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { ThemeProvider } from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import AddGif from "../../gifActions/addGif/AddGif";

const GifCard = ({ data, addGifToGifList }) => {
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
      <img src={data.images.fixed_height.url} alt={data.title} />
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
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
        addGifToGifList={addGifToGifList}
      />
    </div>
  );
};

export default GifCard;
