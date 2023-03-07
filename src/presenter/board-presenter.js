import EditTripView from '../view/edit-trip-view.js';
import EventTripView from '../view/filter-trip-view.js';
import FormTripView from '../view/form-trip-view.js';
import SortTripView from '../view/sort-trip-view.js';
import TripListView from '../view/trip-list-view.js';
import { render } from '../render.js';

export default class BoardPresenter {
    constructor() {
        this.tripEventsList = new TripListView();
    }

    init (boardContainer) {
        this.boardContainer = boardContainer;

        render(new SortTripView(), this.boardContainer);
        render(this.tripEventsList, this.boardContainer);
        render(new FormTripView(), this.tripEventsList.getElement());

        for (let i = 0; i < 3; i++) {
            render(new EventTripView(), this.tripEventsList.getElement());
        }

        render(new EditTripView(), this.tripEventsList.getElement());


    }
}