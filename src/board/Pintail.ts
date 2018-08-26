
import { Board, PinConfiguration, Pin } from './Board';
import { Pint } from '../pin';

import { Gpio } from 'onoff';

export class Pintail extends Board {

  createPin(pin: PinConfiguration): Pin {
    const gpio = new Gpio(pin.id, pin.direction);
    return new Pint(gpio);
  }

}
