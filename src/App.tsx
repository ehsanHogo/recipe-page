import React from "react";

import omelettePic from "./assets/images/image-omelette.jpeg";
import "./App.css";
function App() {
  return (
    <>
      <div className="mainBody">
        <div className="recipeCard">
          <div>
            <img className="foodPic" src={omelettePic} alt="omelette picture" />
          </div>

          <div>
            <h1>Simple Omelette Recipe</h1>

            <p>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>
          <div>
            <p>Preparation</p>
            <ul>
              <li>
                <p>
                  <span>Total :</span>
                  Approximately 10 minutes
                </p>
              </li>

              <li>
                <p>
                  <span>Preparation :</span>5 minutes
                </p>
              </li>

              <li>
                <p>
                  <span>Cooking :</span>5 minutes
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2>Ingeredients</h2>

            <ul>
              <li>
                <p>2-3 large eggs</p>
              </li>

              <li>
                <p>Salt , to taste </p>
              </li>

              <li>
                <p>Pepper, to taste</p>
              </li>

              <li>
                <p>1 tablespoon of butter or oil</p>
              </li>

              <li>
                <p>
                  Optional fillings: cheese, diced vegetables, cooked meats,
                  herbs
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2>Instructions</h2>

            <ol>
              <li>
                <p>
                  Beat the eggs: In a bowl, beat the eggs with a pinch of salt
                  and pepper until they are well mixed. You can add a tablespoon
                  of water or milk for a fluffier texture.
                </p>
              </li>
              <li>
                <p>
                  Heat the pan: Place a non-stick frying pan over medium heat
                  and add butter or oil.
                </p>
              </li>
              <li>
                <p>
                  Cook the omelette: Once the butter is melted and bubbling,
                  pour in the eggs. Tilt the pan to ensure the eggs evenly coat
                  the surface.
                </p>
              </li>
              <li>
                <p>
                  Add fillings (optional): When the eggs begin to set at the
                  edges but are still slightly runny in the middle, sprinkle
                  your chosen fillings over one half of the omelette.
                </p>
              </li>
              <li>
                <p>
                  Fold and serve: As the omelette continues to cook, carefully
                  lift one edge and fold it over the fillings. Let it cook for
                  another minute, then slide it onto a plate.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  Enjoy: Serve hot, with additional salt and pepper if needed.
                </p>
              </li>
            </ol>
          </div>
          <div>
            <h2>Nutrition</h2>

            <table>
              <tr>
                <td>Colories</td>
                <td>277kcal</td>
              </tr>

              <tr>
                <td>Carbs</td>
                <td>0g</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>20g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>22g</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
