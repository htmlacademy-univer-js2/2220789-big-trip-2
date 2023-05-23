import { createElement } from "../render.js";

const createNoPointMessageTemplate = () =>
    '<p class="trip-events__msg">Click New Event to create your first point</p>';

export default class NoPointView {
    #element = null;

    get template() {
        return createNoPointMessageTemplate();
    }

    get element() {
        if (!this.#element) {
            this.#element = createElement(this.template);
        }

        return this.#element;
    }

    removeElement() {
        this.#element = null;
    }
}
    
