
import { Hydrangea } from '../src';

const board = new Hydrangea();

const pin = board.createPin({
  id: 0,
  direction: Hydrangea.Direction.In,
});

pin.write(true)
  .then(() => console.log('success'))
  .catch(console.error);
