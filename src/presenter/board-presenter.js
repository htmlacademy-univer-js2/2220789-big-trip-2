import TripListView from '../view/trip-list-view.js';
import EventTripView from '../view/event-trip-view.js';
import SortTripView from '../view/sort-trip-view.js';
import FilterTripView from '../view/filter-trip-view.js';
import FormTripView from '../view/form-trip-view.js';
import MenuTripView from '../view/menu-trip-view.js';
import NoPointView from '../view/no-point-view.js';
import { render } from '../render.js';

export default class BoardPresenter {
  #eventsContainer = null;
  #controlsContainer = null;
  #pointModel = null;
  #boardPointModel = null;
  #pointComponent = new TripListView();

  constructor(eventsElement,controlsElement) {
    this.#eventsContainer = eventsElement;
    this.#controlsContainer = controlsElement;
  }

  init (pointModel) {
    this.#pointModel = pointModel;
    this.#boardPointModel = [...this.#pointModel.points];

    if (this.#boardPointModel.length === 0) {
      render(new NoPointView(), this.#eventsContainer);
    }
    else {
      render(new MenuTripView(), this.#controlsContainer);
      render(new FilterTripView(), this.#controlsContainer);
      render(new SortTripView(), this.#eventsContainer);
      render(this.#pointComponent, this.#eventsContainer);

      for (const point of this.#boardPointModel) {
        this.#renderPoint(point);
      }
    }
  }

  #renderPoint = (point) => {
    const pointComponent = new EventTripView(point);
    const pointEditComponent = new FormTripView(point);

    const replacePointToForm = () => {
      this.#pointComponent.element.replaceChild(pointEditComponent.element, pointComponent.element);
    };

    const replaceFormToPoint = () => {
      this.#pointComponent.element.replaceChild(pointComponent.element, pointEditComponent.element);
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    pointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToForm();
      document.addEventListener('keydown', onEscKeyDown);
    });

    pointEditComponent.element.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    render(pointComponent, this.#pointComponent.element);
  };
}