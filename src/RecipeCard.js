const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-success">
      <h2>{recipe.name} </h2>
      <p>{recipe.category} </p>
      <p>{recipe.review} </p>
    </div>
  );
};

export default RecipeCard;
