
import {
  System,
  Hydrangea
} from '../src';

const board = new Hydrangea();

const pin = board.createPin({
  id: 0,
  direction: System.Direction.In,
});

pin.subscribe(
  (value) => console.log(value),
  (error) => console.log(error)
);

pin.write(true)
  .then(() => console.log('success'))
  .catch(console.error);
