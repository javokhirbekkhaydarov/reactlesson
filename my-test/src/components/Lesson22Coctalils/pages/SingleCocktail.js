import React from "react";
import Loading from "../Loading";
import { useParams, Link } from "react-router-dom";

const SingleCocktail = () => {
  const { id } = useParams();
  const { loading, setLoading } = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          
          const newCocktail = {
            id,
            name,
            image,
            category,
            info,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktails</h2>;
  } else {
    const {
      id,
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail;
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>
              <span className="drink-date">name: {name}</span>
            </p>
            <p>
              <span className="drink-date">category: {category}</span>
            </p>
            <p>
              <span className="drink-date">info: {info}</span>
            </p>
            <p>
              <span className="drink-date">glass: {glass}</span>
            </p>
            <p>
              <span className="drink-date">instructions: {instructions}</span>
            </p>
            <p>
              <span className="drink-date">ingredients: {ingredients}</span>
            </p>
            {ingredients.map((item, index) => {
              return item ? <span key={id}>{item}</span> : null;
            })}
          </div>
        </div>
      </section>
    );
  }
};

export default SingleCocktail;
