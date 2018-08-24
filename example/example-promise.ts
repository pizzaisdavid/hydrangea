
import { Pintail, Direction, Edge } from '../src';

const button = Pintail.make(7, Direction.in, Edge.both);
const led = Pintail.make(4, Direction.in);

button.subscribe(value => {
  led.write(value)
    .then(result => console.log(`result is ${result}`))
    .catch(error => console.error(error));
});
