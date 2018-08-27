
import { Board } from './Board';
import { Pint } from '../pin';

import { File, Gpio } from '../gpio';

export class Pintail extends Board {

  createPin(configuration: Gpio.configuration) {
    const file = new File(configuration);
    return new Pint(file);
  }

}
