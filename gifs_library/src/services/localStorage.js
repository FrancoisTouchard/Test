export const getSavedGifs = () => {
  const savedGifs = localStorage.getItem("savedGifs");
  // initialize to empty array if storage is totally empty
  if (!savedGifs) {
    return [];
  }
  const gifs = JSON.parse(savedGifs);
  return gifs;
};
