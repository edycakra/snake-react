//screen size
const CANVAS_SIZE = [800, 800]; 

//snake first position 
const SNAKE_START = [
  [16, 16]
];

//food first position
const FOOD_START = [8, 8];

//size of char
const SCALE = 20;

//speed = setTimeout
const SPEED = 150;

//direction according to keyboard
const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0] // right
};

export {
  CANVAS_SIZE,
  SNAKE_START,
  FOOD_START,
  SCALE,
  SPEED,
  DIRECTIONS
};