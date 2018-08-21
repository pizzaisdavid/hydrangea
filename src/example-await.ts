
import { Pintail, Direction, Edge } from './index';

const button = Pintail.make(7, Direction.in, Edge.both);
const led = Pintail.make(4, Direction.in);

button.subscribe(async value => {
  try {
    const result = await led.write(value);
    console.log(`result is ${result}`);
  } catch (error) {
    console.error(error);
  }
});
