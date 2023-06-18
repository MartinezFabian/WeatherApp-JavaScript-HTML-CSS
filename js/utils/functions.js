import { selectCountry, inputCity } from "./selectors.js";
import UserInterface from "../classes/UserInterface.js";

function searchWeather(e) {
  e.preventDefault();

  const country = selectCountry.value;
  const city = inputCity.value;

  if (country === "" || city === "") {
    UserInterface.displayAlert("¡Ambos campos son obligatorios!");
    return;
  }
}

export { searchWeather };
