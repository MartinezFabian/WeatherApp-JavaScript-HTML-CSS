import { alertsContainer } from "../utils/selectors.js";

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
}

export default UserInterface;
