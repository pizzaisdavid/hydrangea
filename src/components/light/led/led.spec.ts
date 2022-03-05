import { Led } from './../led';

import { expect } from 'chai';
import { GpioMock } from '../../pin';

describe('Led', () => {
  let pin: GpioMock;
  let light: Led;

  beforeEach(async () => {
    pin = new GpioMock();
    light = new Led(pin);
  });

  it('on', () => {
    return light.on()
      .then(() => {
        const value = pin.shift();
        expect(value).to.equal(true);
      });
  });

});
