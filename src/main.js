import BoardPresenter from "./presenter/board-presenter.js";
import PointsModel from "./model/point-model.js";

const headerElement = document.querySelector('.page-header');
const mainElement = document.querySelector('.page-main');
const eventsElement = mainElement.querySelector('.trip-events');
const controlsElement = headerElement.querySelector('.trip-controls');


const pointsModel = new PointsModel();
const boardPresenter = new BoardPresenter(eventsElement, controlsElement);

boardPresenter.init(pointsModel);