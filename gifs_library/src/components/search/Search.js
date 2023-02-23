import "./search.css";
import { useState, useEffect } from "react";
import SearchBar from "./searchBar/SearchBar";
import SearchResults from "./searchResults/SearchResults";

const Search = () => {
  const [gifs, setGifs] = useState([]);
  const [userQuery, setUserQuery] = useState("");

  useEffect(() => {
    async function getGifs() {
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/search?q=${userQuery}&api_key=iitVv68p2nod2xg57ktamEzDXfoSmsfa&limit=10`
      );
      const res = await response.json();
      //   console.log("RES", res);
      setGifs(res.data);
      // console.log("ONE", data.data[0].bitly_url)
    }
    getGifs();
  }, [userQuery]);

    console.log("la data", gifs);

  return (
    <div className="searchContainer">
      <p>Search BOX</p>
      <div>
        <SearchBar handleChange={setUserQuery} />
      </div>
      <div>
        <SearchResults gifs={gifs} />
      </div>
    </div>
  );
};
export default Search;
