
import { Hydrangea, Led } from '../../../src';

const board = new Hydrangea();
const pin = board.createPin({
  id: 3,
  direction: Hydrangea.Direction.In,
});
const led = new Led(pin);

setInterval(() => {
  led.toggle()
    .then(() => console.log(`the led state is ${led.state}`))
    .catch(error => console.error(error));
}, 500);
