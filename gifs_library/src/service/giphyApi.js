export const getGifs = async (userQuery) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await fetch(
      // `http://api.giphy.com/v1/gifs/search?q=${userQuery}&api_key=iitVv68p2nod2xg57ktamEzDXfoSmsfa&limit=10`
      `http://api.giphy.com/v1/gifs/search?q=${userQuery}&api_key=${apiKey}&limit=10`
    );
    const res = await response.json();

   return res.data;
  }

  // CRUD ICI pour api giphy