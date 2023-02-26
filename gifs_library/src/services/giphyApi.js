export const getGifs = async (query) => {
  const apiKey = process.env.REACT_APP_API_KEY_GIPHY;
  try {
    const response = await fetch(
      `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=10`
    );
    const res = await response.json();
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
