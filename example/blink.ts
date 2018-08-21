
import { Pintail, Direction } from '../src/index'

const led = Pintail.make(2, Direction.out);

const DURATION_IN_MILLISECONDS = 500;

let state = false;

setInterval(() => {
  led.write(state)
    .then(() => {
      console.log(`state is ${state}`);
      state = !state;
    })
    .catch(error => console.error(error));
}, DURATION_IN_MILLISECONDS);
