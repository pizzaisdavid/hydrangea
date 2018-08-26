
import { Pintail } from '../src';

const board = new Pintail();
const pin = board.createPin({
  id: 0,
  direction: Pintail.direction.in,
});

pin.write(true)
  .then(() => console.log('success'))
  .catch((error) => console.error(error));
