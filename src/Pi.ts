
import { Direction, Edge, Pintail } from './Pintail';
import { Pin } from './Pin';

import { Gpio } from 'onoff';

export namespace pi {

  export function createPin(pin: { id: number, direction: Direction, edge?: Edge }): Pin {
    const gpio = new Gpio(pin.id, pin.direction);
    return new Pintail(gpio);
  }

}
