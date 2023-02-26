import { useState } from "react";

export const useAddGif = (
  data,
  setOpenModal,
  addGifToGifList
) => {
  const [category, setCategory] = useState("");

  const handleCloseModal = () => setOpenModal(false);

  const onClick = () => {
    const gifToSave = {
      url: data.images.fixed_height.url,
      title: data.title,
      category: category,
    };
    const savedGifs = JSON.parse(localStorage.getItem("savedGifs")) || [];
    savedGifs.push(gifToSave);
    localStorage.setItem("savedGifs", JSON.stringify(savedGifs));
    addGifToGifList(gifToSave);
    handleCloseModal();
  };

  return {
    onClick,
    setCategory,
    handleCloseModal,
  };
};
