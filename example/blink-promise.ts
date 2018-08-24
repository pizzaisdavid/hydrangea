
import { Pintail, Direction } from '../src'

const DURATION_IN_MILLISECONDS = 500;
const led = Pintail.make(2, Direction.out);
let state = false;

setInterval(() => {
  led.write(state)
    .then(() => {
      console.log(`state is ${state}`);
      state = !state;
    })
    .catch(error => console.error(error));
}, DURATION_IN_MILLISECONDS);
