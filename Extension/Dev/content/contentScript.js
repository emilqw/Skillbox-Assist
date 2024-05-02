import {SabiButton} from "../components/SabiButton";
import {HTMLManager} from "../components/HTMLManager";

const button = new SabiButton("Привет-Пока", "primary", () => {
    console.log("Нажата кнопка- Привет-Пока")
})
button.element.classList.add("fr-command", "fr-btn");

HTMLManager.appendChild('.fr-btn-grp', button.element)
const p = document.createElement("p");
p.textContent = "Привет, как дела?"
HTMLManager.appendChild('div[data-e2e="wysiwyg-editor"] .fr-element.fr-view.custom-theme p', p)
