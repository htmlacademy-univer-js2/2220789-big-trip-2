import { getRandomInteger } from "../utils.js";

const TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];

const OFFERS = ['Order taxi', 'Switch to comfort class', 'Add luggage', 'Rent a car', 'Add dinner'];

const DESTINATIONS = [
  {
    id: 1,
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Chamonix',
    pictures: [
      {
        src: `http://picsum.photos/248/152?r=${getRandomInteger(1,5)}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      }
    ]
  },
  {
    id: 2,
    description: 'London, is a beautiful city.',
    name: 'London',
    pictures: [
      {
        src: `http://picsum.photos/248/152?r=${getRandomInteger(1,5)}`,
        description: 'Cras aliquet varius magna, non porta ligula feugiat eget'
      }
    ] 
  },
  {
    id: 3,
    description: 'Tokyo, is a beautiful city.',
    name: 'Tokyo',
    pictures: [
      {
        src: `http://picsum.photos/248/152?r=${getRandomInteger(1,5)}`,
        description: 'Fusce tristique felis at fermentum pharetra'
      }
    ] 
  },
  {
    id: 4,
    description: 'Moscow, is a beautiful city.',
    name: 'Moscow',
    pictures: [
      {
        src: `http://picsum.photos/248/152?r=${getRandomInteger(1,5)}`,
        description: 'Moscow never sleep'
      }
    ] 
  },
];

export { TYPES, OFFERS, DESTINATIONS };