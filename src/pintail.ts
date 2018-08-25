
import { Pint } from './Pint';
import { Pin } from './Pin';

import { Gpio } from 'onoff';

export namespace pintail {

  export enum direction {
    in = 'in',
    out = 'out',
    low = 'low',
    high = 'high',
  };
  
  export enum edge {
    none = 'none',
    rising = 'rising',
    falling = 'falling',
    both = 'both',
  };

  export function createPin(pin: { id: number, direction: direction, edge?: edge }): Pin {
    const gpio = new Gpio(pin.id, pin.direction);
    return new Pint(gpio);
  }

}
