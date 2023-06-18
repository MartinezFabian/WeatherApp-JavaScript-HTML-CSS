import { form } from "../utils/selectors.js";
import { searchWeather } from "../utils/functions.js";

class App {
  constructor() {
    this.initApp();
  }

  initApp() {
    form.addEventListener("submit", searchWeather);
  }
}

export default App;
