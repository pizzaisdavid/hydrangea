
import { Led } from './Led';
import { GpioMock } from '../../pin';

import { expect } from 'chai';

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
