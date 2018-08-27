
import { Gpio } from './Gpio';
import { FileMock } from '../system';

import { expect } from 'chai';

describe('Gpio', () => {

  let system: FileMock;
  let gpio: Gpio;

  beforeEach(() => {
    system = new FileMock();
    gpio = new Gpio(system);
  });

  describe('read', () => {

    it('true', () => {
      system.push(1);
      return gpio.read()
        .then(value => expect(value).to.equal(true));
    });

    it('false', () => {
      system.push(0);
      return gpio.read()
        .then(value => expect(value).to.equal(false));
    });

  });
  
});
