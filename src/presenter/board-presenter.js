import TripListView from '../view/trip-list-view.js';
import EventTripView from '../view/filter-trip-view.js';
import SortTripView from '../view/sort-trip-view.js';
import FilterTripView from '../view/filter-trip-view.js';
import FormTripView from '../view/form-trip-view.js';
import MenuTripView from '../view/menu-trip-view.js';
import { render } from '../render.js';

export default class BoardPresenter {
  constructor(eventsElement, controlsElement) {
    this.eventsContainer = eventsElement;
    this.controlsContainer = controlsElement;
  }

  init (pointsModel) {
    this.pointsModel = pointsModel;
    this.boardPointsModel = [...this.pointsModel.getPoints()];

    render(new MenuTripView(), this.controlsContainer);
    render(new FilterTripView(), this.controlsContainer);

    render(new SortTripView(), this.eventsContainer);
    render(new TripListView(), this.eventsContainer);

    const eventsList = this.eventsContainer.querySelector('.trip-events__list');
    render(new FormTripView(this.boardPointsModel[0]), eventsList);

    for (let i = 0; i < this.boardPointsModel.length; i++) {
      render(new EventTripView(this.boardPointsModel[i]), eventsList);
    }
  }
}