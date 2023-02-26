import "./gifCard.css";
import { useState } from "react";
import AddGif from "../../../../gifAddAndDelete/addGif/AddGif";
import { FavButton } from "./favButton/FavButton";

const GifCard = ({ data, addGifToGifList, notifyAdded }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);

  return (
    <div className="gifAndFavContainer">
      <img src={data.images.fixed_height.url} alt={data.title} />
      <div className="hoverFavBtn">
        <FavButton handleOpenModal={handleOpenModal} />
      </div>
      <AddGif
        data={data}
        openModal={openModal}
        setOpenModal={setOpenModal}
        addGifToGifList={addGifToGifList}
        notifyAdded={notifyAdded}
      />
    </div>
  );
};

export default GifCard;
