
import { Board } from './Board';
import { Pint } from '../pin';

import { File, System } from '../system';

export class Pintail extends Board {

  createPin(configuration: System.configuration) {
    const file = new File(configuration);
    return new Pint(file);
  }

}
