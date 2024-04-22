export class SabiButton {
    // Определяем приватные поля класса
    #button;
    #buttonType;

    /**
     * Создает кнопку с заданным текстом, типом стиля и обработчиком клика.
     * @param {string} text - текст на кнопке.
     * @param {string} buttonType - тип стиля кнопки ('primary', 'secondary').
     * @param {Function} onClick - функция, которая будет вызвана при клике на кнопку.
     */
    constructor(text, buttonType = 'primary', onClick = () => console.log('SabiButton clicked!')) {
        this.#button = document.createElement('button');
        this.#button.textContent = text;
        this.#button.type = 'button';
        this.#button.classList.add('sabi-button', buttonType);
        this.#buttonType = buttonType;

        this.applyButtonStyles();
        this.addEventListeners(onClick);
    }

    /**
     * Возвращает DOM элемент кнопки.
     * @returns {HTMLElement}
     */
    get element() {
        return this.#button;
    }

    /**
     * Применяет стили к кнопке в зависимости от её типа.
     */
    applyButtonStyles() {
        const baseStyles = {
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'all 0.3s',
            marginLeft: '16px'
        };

        const typeStyles = {
            primary: {
                backgroundColor: '#4CAF50',
                color: 'white'
            },
            secondary: {
                backgroundColor: '#f44336',
                color: 'white'
            }
        };

        Object.assign(this.#button.style, baseStyles, typeStyles[this.#buttonType]);
    }

    /**
     * Добавляет обработчики событий на кнопку.
     * @param {Function} onClick - функция обработчика клика.
     */
    addEventListeners(onClick) {
        this.#button.addEventListener('mouseover', this.onMouseOverHandler.bind(this));
        this.#button.addEventListener('mouseout', this.onMouseOutHandler.bind(this));
        this.#button.addEventListener('click', onClick);
    }

    /**
     * Обработчик события mouseover.
     */
    onMouseOverHandler() {
        this.#button.style.backgroundColor = this.#buttonType === 'primary' ? '#3d8e41' : '#a52424';
    }

    /**
     * Обработчик события mouseout.
     */
    onMouseOutHandler() {
        this.#button.style.backgroundColor = this.#buttonType === 'primary' ? '#4CAF50' : '#f44336';
    }
}