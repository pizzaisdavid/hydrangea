
import { Board } from './Board';
import { Gpio } from '../pin';

import { File, System } from '../system';

export class Pintail extends Board {

  createPin(configuration: System.configuration) {
    const file = new File(configuration);
    return new Gpio(file);
  }

}
