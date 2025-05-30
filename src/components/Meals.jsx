import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";
import EmojiParade from "../pages/EmojiParade.jsx";

const requestConfig = {};

// Correct category list
const categories = [
  "Pasta & Rice Dishes",
  "Pizza & Burgers",
  "Salads & Bowls",
  "Sandwiches & Wraps",
  "Meat & Seafood",
  "Soups & Stews",
  "Desserts"
];

export default function Meals() {
  const { data: loadedMeals, isLoading, error } = useHttp(
    "http://localhost:3000/meals",
    requestConfig,
    []
  );

  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();

  function handleCategoryClick(category) {
    setShowLoader(true);
    setTimeout(() => {
      navigate(`/main/category/${category}`);
    }, 1000); // delay for loader effect
  }

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <div>
      {showLoader && <EmojiParade />}
      <div className="category-container">
        {categories.map((category) => (
          <button key={category} className="category-tile" onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>

      <ul id="meals">
        {loadedMeals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </div>
  );
}