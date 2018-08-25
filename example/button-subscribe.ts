
import { pintail, Direction, Edge } from '../src';

const DURATION_IN_MILLISECONDS = 60000;
const button = pintail.createPin({ id: 7, direction: Direction.in, edge: Edge.both });

const subscription = button.subscribe(value => {
  console.log(`value is ${value}`);
});

setTimeout(() => {
  subscription.unsubscribe();
}, DURATION_IN_MILLISECONDS);
