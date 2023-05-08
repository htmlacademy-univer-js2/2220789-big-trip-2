import { createPoint } from "../mock/point";

export default class PointsModel {
  points = Array.from({length: 5}, createPoint);

  getPoints = () => this.points;
}