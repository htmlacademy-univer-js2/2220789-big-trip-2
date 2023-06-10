import AbstractStatefulView from '../framework/view/abstract-stateful-view';
import { DESTINATIONS } from '../mock/const';
import { OFFERS, OFFERS_BY_TYPE } from '../mock/offers.js';
import { convertEventDateForEditForm, capitalizeFirstLetter } from '../utils';

const createDestionationsOptionsTemplate = (destinations) =>
  destinations.reduce((result, destination) =>
    result.concat(`<option value="${destination.name}"></option>\n`), '');

const createAvailableOptionsTemplate = (offers, eventType) => {
  const availableOffers = OFFERS_BY_TYPE.find((item) => (item.type === eventType)).offers;
  const allOffers = availableOffers.map((offer) => OFFERS.find((item) => item.id === offer));

  return allOffers.reduce((result, offer) => result.concat(
    `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.title.split(' ').pop()}-${offer.id}"
        type="checkbox" name="event-offer-${offer.title.split(' ').pop()}"  ${offers.includes(offer.id) ? 'checked' : ''}>
      <label class="event__offer-label" for="event-offer-${offer.title.split(' ').pop()}-${offer.id}">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>`
  ), '');
};

const createDestinationDescriptionTemplate = (destinations, name) =>
  destinations.find((it) => it.name === name).description;

const createPicturesListTemplate = (pictures) =>
  `<div class="event__photos-container">
      <div class="event__photos-tape">
      ${pictures.reduce((result, picture) =>
    result.concat(`<img class="event__photo" src="${picture.src}" alt="Event photo">`), '')}
      </div>
   </div>`;

const createEditFormTemplate = ({ selectedDestination, type, basePrice, startDate, endDate, offers }) =>
  `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
              <div class="event__type-item">
                <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
                <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
              </div>
            </fieldset>
          </div>
        </div>
        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${capitalizeFirstLetter(type)}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${selectedDestination.name}" list="destination-list-1">
          <datalist id="destination-list-1">
            ${createDestionationsOptionsTemplate(DESTINATIONS)}
          </datalist>
        </div>
        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${convertEventDateForEditForm(startDate)}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${convertEventDateForEditForm(endDate)}">
        </div>
        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
        </div>
        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>
          <div class="event__available-offers">
          ${createAvailableOptionsTemplate(offers, type)}
          </div>
        </section>
        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${createDestinationDescriptionTemplate(DESTINATIONS, selectedDestination.name)}</p>
          ${selectedDestination.pictures ? createPicturesListTemplate(selectedDestination.pictures) : ''}
        </section>
      </section>
      </form>
    </li>`;

export default class EditFormView extends AbstractStatefulView {
  constructor(event) {
    super();
    this._state = EditFormView.parseEvent(event);
    this.#setInnerHandlers();
  }

  get template() {
    return createEditFormTemplate(this._state);
  }

  reset = (event) => this.updateElement(EditFormView.parseEvent(event));

  _restoreHandlers = () => {
    this.#setInnerHandlers();
    this.setSaveHandler(this._callback.save);
    this.setRollDownHandler(this._callback.rollDown);
  };

  setRollDownHandler = (callback) => {
    this._callback.rollDown = callback;
    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#rollDownHandler);
  }

  #rollDownHandler = (e) => {
    e.preventDefault();
    this._callback.rollDown();
  }

  setSaveHandler = (callback) => {
    this._callback.save = callback;
    this.element.querySelector('form')
      .addEventListener('submit', this.#saveHandler);
  }

  #saveHandler = (e) => {
    e.preventDefault();
    this._callback.save(EditFormView.parseState(this._state));
  }

  #destinationToggleHandler = (e) => {
    e.preventDefault();
    this.updateElement({
      selectedDestination: DESTINATIONS.find((item) => (item.name === e.target.value)),
    });
  };

  #typeToggleHandler = (e) => {
    e.preventDefault();
    this.updateElement({
      type: e.target.value,
      offers: [],
      availableOffers: OFFERS_BY_TYPE.find((item) => (item.type === e.target.value)).offers
    });
  };

  #offerToggleHandler = (e) => {
    e.preventDefault();
    const selectedOffers = this._state.offers;
    const clickedOffer = parseInt((e.target.id).match(/\d+/g), 10);
    const clickedOfferId = selectedOffers.indexOf(clickedOffer);

    if (clickedOfferId === -1) {
      selectedOffers.push(clickedOffer);
    } else {
      selectedOffers.splice(clickedOfferId, 1);
    }

    const updatedSelectedOffers = selectedOffers;
    this.updateElement({
      offers: updatedSelectedOffers
    });
  };

  #setInnerHandlers = () => {
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#destinationToggleHandler);
    Array.from(this.element.querySelectorAll('.event__type-input'))
      .forEach((typeElement) => typeElement.addEventListener('click', this.#typeToggleHandler));
    Array.from(this.element.querySelectorAll('.event__offer-checkbox')).forEach((offerElement) => offerElement
      .addEventListener('click', this.#offerToggleHandler)
    );
  };

  static parseEvent = (event) => ({
    ...event,
    selectedDestination: DESTINATIONS.find((item) => (item.id === event.destination)),
    availableOffers: OFFERS_BY_TYPE.find((item) => (item.type === event.type)).offers,
    selectedOffers: event.offers
  });

  static parseState = (state) => {
    const event = { ...state, destination: state.selectedDestination.id };
    delete event.selectedDestination;
    delete event.availableOffersId;
    return event;
  };
}
