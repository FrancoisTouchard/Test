import "./search.css";
import { useState, useEffect } from "react";
import SearchBar from "./searchBar/SearchBar";
import SearchResults from "./searchResults/SearchResults";

const Search = () => {
  const [data, setData] = useState([]);
  const [userQuery, setUserQuery] = useState("");

  useEffect(() => {
    async function getGifs() {
      const response = await fetch(
        //   "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=iitVv68p2nod2xg57ktamEzDXfoSmsfa&limit=5"
        `http://api.giphy.com/v1/gifs/search?q=${userQuery}&api_key=iitVv68p2nod2xg57ktamEzDXfoSmsfa&limit=5`
      );
      const res = await response.json();
      console.log("RES", res);
      setData(res);
      // console.log("ONE", data.data[0].bitly_url)
    }
    getGifs();
  }, [userQuery]);

  console.log("la data", data);

  return (
    <div className="searchContainer">
      <p>Search BOX</p>
      <div>
        <SearchBar handleChange={setUserQuery} />
      </div>
      <div>
        <SearchResults fetchedData={data} />
      </div>
    </div>
  );
};
export default Search;
