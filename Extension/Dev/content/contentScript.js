import {SabiButton} from "../components/SabiButton";
import {DOMManager} from "../components/DOMManager";

const button = new SabiButton("HiBye", "primary", () => {
    console.log("Нажата кнопка- Привет-Пока")
    const p = document.createElement("p");
    p.textContent = "Привет, как дела?"
    const p2 = document.createElement("p");
    p2.textContent = "Прощай, мир!"

    DOMManager.insertElement('div[data-e2e="wysiwyg-editor"] .fr-element.fr-view.custom-theme', p, 'afterbegin');
    DOMManager.insertElement('div[data-e2e="wysiwyg-editor"] .fr-element.fr-view.custom-theme', p2, 'beforeend');
})
button.element.classList.add("fr-command", "fr-btn");

DOMManager.insertElement('.form__actions.ng-star-inserted', button.element, 'beforeend')