
import { Pintail, Direction, Edge } from '../src';

const DURATION_IN_MILLISECONDS = 60000;
const button = Pintail.make(7, Direction.in, Edge.both);

const subscription = button.subscribe(value => {
  console.log(`value is ${value}`);
});

setTimeout(() => {
  subscription.unsubscribe();
}, DURATION_IN_MILLISECONDS);
