const WIDTH = document.documentElement.clientWidth;
const HEIGHT = document.documentElement.clientHeight;

let colors;

window.setup = function() {
  createCanvas(WIDTH, HEIGHT);
  colors = Array(3)
    .fill(null)
    .map(() => random(50, 200));
};

window.draw = function() {
  background(...colors);
};
