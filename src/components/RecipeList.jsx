import RecipeCard from "./RecipeCard.jsx";

const RecipeList = ({ recipes }) => {
  if (recipes.length === 0) {
    return <p>No recipes found. Try searching for something!</p>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe.recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
