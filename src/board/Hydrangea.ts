
import { Gpio } from '../pin';
import { Board } from './Board';

import { File, System } from '../system';

export class Hydrangea extends Board {

  public createPin(configuration: System.Configuration) {
    const file = new File(configuration);
    return new Gpio(file);
  }

}
