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
            <h1 className="foodTitle">Simple Omelette Recipe</h1>

            <p className="foodDescription">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>
          <div className="preparationCard">
            <p className="preparationTitle">Preparation</p>
            <ul>
              <li>
                <span className="preparationItem">Total :</span>
                <p className="preparationItemdesc">Approximately 10 minutes</p>
              </li>

              <li>
                <span className="preparationItem">Preparation :</span>
                <p className="preparationItemdesc">5 minutes</p>
              </li>

              <li>
                <span className="preparationItem">Cooking :</span>
                <p className="preparationItemdesc">5 minutes</p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="IngeredientTitle">Ingeredients</h2>

            <ul>
              <li>
                <p className="ingeredientsItem">2-3 large eggs</p>
              </li>

              <li>
                <p className="ingeredientsItem">Salt , to taste </p>
              </li>

              <li>
                <p className="ingeredientsItem">Pepper, to taste</p>
              </li>

              <li>
                <p className="ingeredientsItem">
                  1 tablespoon of butter or oil
                </p>
              </li>

              <li>
                <p className="ingeredientsItem">
                  Optional fillings: cheese, diced vegetables, cooked meats,
                  herbs
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="instructionTitle"> Instructions</h2>

            <ol>
              <li>
                <span className="instructionItemHead">Beat the eggs: </span>
                <p className="instructionItem">
                  In a bowl, beat the eggs with a pinch of salt and pepper until
                  they are well mixed. You can add a tablespoon of water or milk
                  for a fluffier texture.
                </p>
              </li>
              <li>
                <span className="instructionItemHead">Heat the pan:</span>
                <p className="instructionItem">
                  Place a non-stick frying pan over medium heat and add butter
                  or oil.
                </p>
              </li>
              <li>
                <span className="instructionItemHead">Cook the omelette:</span>
                <p className="instructionItem">
                  Once the butter is melted and bubbling, pour in the eggs. Tilt
                  the pan to ensure the eggs evenly coat the surface.
                </p>
              </li>
              <li>
                <span className="instructionItemHead">
                  Add fillings (optional):
                </span>
                <p className="instructionItem">
                  When the eggs begin to set at the edges but are still slightly
                  runny in the middle, sprinkle your chosen fillings over one
                  half of the omelette.
                </p>
              </li>
              <li>
                <span className="instructionItemHead">Fold and serve: </span>
                <p className="instructionItem">
                  As the omelette continues to cook, carefully lift one edge and
                  fold it over the fillings. Let it cook for another minute,
                  then slide it onto a plate.
                </p>
              </li>
              <li>
                <span className="instructionItemHead">Enjoy:</span>{" "}
                <p className="instructionItem">
                  Serve hot, with additional salt and pepper if needed.
                </p>
              </li>
            </ol>
          </div>
          <div>
            <h2 className="nutritionTitle">Nutrition</h2>
            <p className="nutritionDescription">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <table>
              <tbody>
                <tr>
                  <td className="">Colories</td>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
