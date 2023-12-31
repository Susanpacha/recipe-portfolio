import RecipeCard from "./RecipeCard";
function App() {
  const recipeLists = [
    {
      id: 0,
      name: " Apple Smoothie",
      review: null,
      category: "Smoothie",
    },
    {
      id: 1,
      name: " Apple Cake",
      review: null,
      category: "Cake",
    },
    {
      id: 2,
      name: " Orange Cake",
      review: null,
      category: "Cake",
    },
    {
      id: 0,
      name: "Berry  Smoothie",
      review: null,
      category: "Smoothie",
    },
  ];
  return (
    <div>
      <h1>My Recipes</h1>
      {recipeLists.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
    </div>
  );
}

export default App;
