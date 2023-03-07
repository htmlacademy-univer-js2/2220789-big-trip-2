import FilterTripView from "./view/filter-trip-view.js";
import BoardPresenter from "./presenter/board-presenter.js";
import { render } from './render.js';

const headerElement = document.querySelector('.trip-main');
const mainElement = document.querySelector('.page-main');
const tripPresenter = new BoardPresenter();

render(new FilterTripView(), headerElement.querySelector('.trip-controls__filters'));

tripPresenter.init(mainElement.querySelector('.trip-events'));