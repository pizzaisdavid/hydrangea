
import { Board, PinConfiguration, Pin } from './Board';
import { Pint } from './Pint';

import { Gpio } from 'onoff';

export namespace mock {

  export function createPin(pin: PinConfiguration): Pin {
    const gpio = new Gpio(pin.id, pin.direction);
    return new Pint(gpio);
  }
}
