const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.label} />
      <h3>{recipe.label}</h3>
      <p>
        Type: {recipe.dishType} Calories: {Math.round(recipe.calories)}
      </p>
      <p className="show-digest-detail">
        {recipe.digest.map((item, index) => (
          <li key={index} className="digest-detail">
            {item.tag}:{Math.round(item.total)}
          </li>
        ))}
      </p>

      <a href={recipe.url} target="_blank" rel="noopener noreferrer">
        View Recipe
      </a>
    </div>
  );
};

export default RecipeCard;
