
import { Pintail, Direction, Edge } from '../src';

const DURATION_IN_MILLISECONDS = 60000;

const button = Pintail.make(7, Direction.in, Edge.both);
const led = Pintail.make(4, Direction.in);

const subscription = button.subscribe(value => {
  led.write(value)
    .then((value) => console.log(`value is ${value}`))
    .catch((error) => console.error(error));
});

setTimeout(() => {
  subscription.unsubscribe();
}, DURATION_IN_MILLISECONDS);
