export class HTMLManager {
    /**
     * Функция добавляет родителю дочерний элемент, если родителя еще не существует, он ждет его создания, используя MutationObserver
     * @param parentSelector {string} CSS-селектор родительского элемента
     * @param childElement {HTMLElement} Дочерний элемент
     */
    static appendChild(parentSelector, childElement) {
        console.log("Функция appendChild");

        const parentElement = document.querySelector(parentSelector);

        if (parentElement) {
            console.log("Element: ",parentElement)
            parentElement.appendChild(childElement);
        } else {
            const observer = new MutationObserver((mutations) => {
                for (const mutation of mutations) {
                    if (mutation.type === "childList") {
                        const addedNodes = mutation.addedNodes;
                        for (const node of addedNodes) {
                            if (node.nodeType === Node.ELEMENT_NODE && node.matches(parentSelector)) {
                                console.log("Element: ",node)
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