import { selectCountry, inputCity } from "./selectors.js";
import UserInterface from "../classes/UserInterface.js";
import API_KEY from "./config.js";

function searchWeather(e) {
  e.preventDefault();

  const country = selectCountry.value;
  const city = inputCity.value;

  // validar inputs

  if (country === "" || city === "") {
    UserInterface.displayAlert("¡Ambos campos son obligatorios!");
    return;
  }

  // si todo esta bien
  fetchGeographicalCoordinates(country, city);
}

function fetchGeographicalCoordinates(country, city) {
  const geocodingUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${API_KEY}`;

  // obtener coordenadas geográficas (latitud y longitud) utilizando Geocoding API
  fetch(geocodingUrl)
    .then((response) => {
      // si la respuesta es exitosa
      if (response.ok) {
        // convertir la respuesta en un objeto, devuelve nueva Promise
        return response.json();
      } else {
        throw new Error(`Error: ${response.statusText}`);
      }
    })
    .then((data) => {
      if (data.length > 0) {
        const lat = data[0].lat;
        const lon = data[0].lon;

        fetchWeatherData(lat, lon);
      } else {
        UserInterface.displayAlert("Ubicación no válida, intenta con otra ubicación distinta");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function fetchWeatherData(lat, lon) {
  // mostramos un spinner de carga
  UserInterface.displayLoader();

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`;

  fetch(url)
    .then((response) => {
      // si la respuesta es exitosa
      if (response.ok) {
        // convertir la respuesta en un objeto, devuelve nueva Promise
        return response.json();
      } else {
        throw new Error(`Error: ${response.statusText}`);
      }
    })
    .then((data) => {
      UserInterface.displayWeather(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export { searchWeather };
