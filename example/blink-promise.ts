
import { pintail } from '../src'

const DURATION_IN_MILLISECONDS = 500;
const led = pintail.createPin({
  id: 2,
  direction: pintail.direction.out
});
let state = false;

setInterval(() => {
  led.write(state)
    .then(() => {
      console.log(`state is ${state}`);
      state = !state;
    })
    .catch(error => console.error(error));
}, DURATION_IN_MILLISECONDS);
