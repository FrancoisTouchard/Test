import { useState } from "react";
import { getSavedGifs } from "../../../../../../../../services/localStorage";

export const useAddGif = (data, setOpenModal, addGifToGifList, notifyAdded) => {
  const [category, setCategory] = useState("");

  const handleCloseModal = () => setOpenModal(false);

  const onClick = () => {
    const gifToSave = {
      url: data.images.fixed_height.url,
      title: data.title,
      category: category,
    };
    const savedGifs = getSavedGifs();
    const gifIsDuplicated = savedGifs.some((gif) => gif.url === gifToSave.url);
    // prevent user from saving the same gif twice
    if (gifIsDuplicated) {
      window.alert("Gif already saved !");
    } else {
      savedGifs.push(gifToSave);
      localStorage.setItem("savedGifs", JSON.stringify(savedGifs));
      addGifToGifList(gifToSave);
      handleCloseModal();
      notifyAdded();
    }
  };

  return {
    onClick,
    setCategory,
    handleCloseModal,
  };
};
