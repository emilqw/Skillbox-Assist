class Button {
    /**
     *
     * @param type {"default" | ""}
     */
    constructor(type) {
        this.element = document.createElement('button');
        this.element.setAttribute('type', 'button');
        this.element.setAttribute('class', 'btn');
    }
    get getElement(){
        return this.element;
    }
}

new Button();