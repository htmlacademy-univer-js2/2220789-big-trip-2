import BoardPresenter from "./presenter/board-presenter.js";
import PointsModel from "./model/point-model.js";
import { getPoints } from "./mock/point.js";

const headerElement = document.querySelector('.page-header');
const mainElement = document.querySelector('.page-main');
const eventsElement = mainElement.querySelector('.trip-events');
const controlsElement = headerElement.querySelector('.trip-controls');
const points = getPoints();
const pointsModel = new PointsModel();
const boardPresenter = new BoardPresenter(eventsElement, controlsElement);

pointsModel.init(points);
boardPresenter.init(pointsModel);