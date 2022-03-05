
import {
  System,
  Hydrangea
} from '../src';

import {
  Led
} from '../src/components/light';

const board = new Hydrangea();

const pin = board.createPin({
  id: 0,
  direction: System.Direction.In,
});

const led = new Led(pin);

led.toggle()
  .then(() => console.log('test!'))
