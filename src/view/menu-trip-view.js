import { createElement } from '../render.js';

const createMenuTripTemplate = () => `<nav class="trip-controls__trip-tabs  trip-tabs">
<a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
<a class="trip-tabs__btn" href="#">Stats</a>
</nav>`;

export default class MenuTripView {
  #element = null;

  get template () {
    return createMenuTripTemplate();
  }

  get element() {
    if (!this.#element){
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}