
import { Hydrangea } from '../src';

const board = new Hydrangea();
const pin = board.createPin({
  id: 0,
  direction: Hydrangea.direction.in,
});

pin.write(true)
  .then(() => console.log('success'))
  .catch((error) => console.error(error));
