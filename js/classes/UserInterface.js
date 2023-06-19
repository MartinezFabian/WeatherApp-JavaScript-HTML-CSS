import { alertsContainer, informationContainer } from "../utils/selectors.js";

class UserInterface {
  static displayAlert(message) {
    const exist = document.querySelector(".alert");

    if (exist) {
      return;
    }

    const alert = document.createElement("DIV");
    alert.classList.add("alert");

    const text = document.createElement("P");
    text.classList.add("alert__text");
    text.textContent = message;

    alert.appendChild(text);

    alertsContainer.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }

  static displayWeather(weather, city) {
    // desestructurar las propiedades del objeto weather
    const {
      main: { temp, temp_min, temp_max, feels_like, humidity },
    } = weather;

    // limpiar el HTML previo
    UserInterface.clearHTML();

    // generar HTML con los datos del objeto weather

    const temperature = document.createElement("h1");
    temperature.classList.add("information__temperature");
    temperature.textContent = `${Math.round(temp)}°c`;

    informationContainer.appendChild(temperature);

    const cityElement = document.createElement("h2");
    cityElement.classList.add("information__city");
    cityElement.textContent = city;

    informationContainer.appendChild(cityElement);

    const informationGrid = document.createElement("div");
    informationGrid.classList.add("information__grid");

    informationContainer.appendChild(informationGrid);

    const tempMinElement = document.createElement("p");
    tempMinElement.classList.add("information__additional");
    tempMinElement.textContent = `Min: ${Math.round(temp_min)}°c`;

    informationGrid.appendChild(tempMinElement);

    const tempMaxElement = document.createElement("p");
    tempMaxElement.classList.add("information__additional");
    tempMaxElement.textContent = `Max: ${Math.round(temp_max)}°c`;

    informationGrid.appendChild(tempMaxElement);

    const feelsLikeElement = document.createElement("p");
    feelsLikeElement.classList.add("information__additional");
    feelsLikeElement.textContent = `Sensación térmica: ${Math.round(feels_like)}°c`;

    informationGrid.appendChild(feelsLikeElement);

    const humidityElement = document.createElement("p");
    humidityElement.classList.add("information__additional");
    humidityElement.textContent = `Humedad: ${Math.round(humidity)}%`;

    informationGrid.appendChild(humidityElement);
  }

  static clearHTML() {
    // mientras el elemento informationContainer tenga un primer hijo
    while (informationContainer.firstChild) {
      //eliminar el primer hijo del elemento informationContainer
      informationContainer.removeChild(informationContainer.firstChild);
    }
  }
}

export default UserInterface;
