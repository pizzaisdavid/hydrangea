
import { Pin } from './Pin';
import { Pint } from './Pint';

import { expect } from 'chai';
import { Gpio } from 'onoff';

describe('Pint', () => {

  let gpio: Gpio;
  let pin: Pin;

  beforeEach(() => {
    gpio = {} as any;

    gpio.watch = (callback: (error: Error, value: number) => void) => {

    }

    pin = new Pint(gpio);
  });

  it('read true', () => {

    gpio.read = (callback: (error: Error, value: number) => void) => {
      callback(null, 1);
    }

    return pin.read()
      .then(value => {
        expect(value).to.equal(true);
      });
  });
  
});
