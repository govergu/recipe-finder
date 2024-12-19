import React from "react";
import { useState } from "react";
import SearchBar from "./components/Search.jsx";
import RecipeList from "./components/RecipeList.jsx";
import { fetchRecipes } from "./api.js";
import "./index.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchRecipes(query);
      setRecipes(data.hits);
      console.log(data);
      // API returns an array of recipes under "hits"
    } catch (err) {
      setError("Unable to fetch recipes. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>Recipe Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
