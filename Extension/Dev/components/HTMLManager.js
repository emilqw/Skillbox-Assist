/**
 * Менеджер для работы с HTML
 */
export class HTMLManager {
    /**
     * Функция добавляет родителю дочерний элемент, если родителя еще не существует, он ждет его создания, используя MutationObserver
     * @param parentClass {string} Класс родительского элемента
     * @param childElement {HTMLElement} Дочерний элемент
     */
    static appendChild(parentClass, childElement) {
        console.log("Функция appendChild");

        const parentElement = document.getElementsByClassName(parentClass)[0];

        if (parentElement) {
            parentElement.appendChild(childElement);
        } else {
            const observer = new MutationObserver((mutations) => {
                for (const mutation of mutations) {
                    if (mutation.type === "childList") {
                        const addedNodes = mutation.addedNodes;
                        for (const node of addedNodes) {
                            if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains(parentClass)) {
                                node.appendChild(childElement);
                                observer.disconnect();
                                return;
                            }
                        }
                    }
                }
            });
            observer.observe(document.body, {childList: true, subtree: true});
        }
    }
}