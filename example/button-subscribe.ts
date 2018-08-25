
import { pintail } from '../src';

const button = pintail.createPin({
  id: 7,
  direction: pintail.direction.in,
  edge: pintail.edge.both
});

button.subscribe(value => {
  console.log(`value is ${value}`);
});
