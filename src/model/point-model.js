export default class PointsModel {
  #points = null;

  constructor() {
    this.#points = [];
  }

  init(points) {
    this.#points = points;
  }

  get points() {
    return this.#points;
  }
}