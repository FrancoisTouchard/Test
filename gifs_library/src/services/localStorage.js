export const getSavedGifs = () => {
  const savedGifs = localStorage.getItem("savedGifs") || [];
  const gifs = JSON.parse(savedGifs);
  return gifs;
};
