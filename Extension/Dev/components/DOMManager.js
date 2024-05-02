/**
 * Класс для управления DOM (Document Object Model)
 */
export class DOMManager {
    /**
     * Вставляет элемент в DOM относительно другого элемента
     * @param {string} parentSelector CSS-селектор родительского элемента
     * @param {HTMLElement} elementToInsert Элемент, который нужно вставить
     * @param {"beforebegin" | "afterbegin" | "beforeend" | "afterend"} insertPosition Позиция, в которую нужно вставить элемент
     *                                       "beforebegin" - перед родительским элементом
     *                                       "afterbegin" - после открывающего тега родительского элемента, но перед его первым дочерним элементом
     *                                       "beforeend" - перед закрывающим тегом родительского элемента, после его последнего дочернего элемента
     *                                       "afterend" - после родительского элемента
     */
    static insertElement(parentSelector, elementToInsert, insertPosition) {
        const parentElement = document.querySelector(parentSelector);

        if (parentElement) {
            parentElement.insertAdjacentElement(insertPosition, elementToInsert);
        } else {
            const observer = new MutationObserver((mutations) => {
                for (const mutation of mutations) {
                    if (mutation.type === 'childList') {
                        const addedNodes = mutation.addedNodes;
                        for (const node of addedNodes) {
                            if (node.nodeType === Node.ELEMENT_NODE && node.matches(parentSelector)) {
                                node.insertAdjacentElement(insertPosition, elementToInsert);
                                observer.disconnect();
                                return;
                            }
                        }
                    }
                }
            });
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }
}