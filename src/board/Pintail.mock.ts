
import { Board, PinConfiguration } from './Board';
import { Pint } from '../pin';

import { Gpio } from 'onoff';

export class MockPintail extends Board {

  createPin(pin: PinConfiguration) {
    const gpio = new Gpio(pin.id, pin.direction);
    return new Pint(gpio);
  }

}
