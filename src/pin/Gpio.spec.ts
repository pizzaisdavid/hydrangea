
import { FileMock, System } from '../system';
import { Gpio } from './Gpio';

import { expect } from 'chai';

describe('Gpio', () => {

  let system: FileMock;
  let gpio: Gpio;

  beforeEach(() => {
    system = new FileMock();
    gpio = new Gpio(system);
  });

  describe('read', () => {

    it('should succeed', () => {
      system.push(System.Binary.High);
      return gpio.read()
        .then((value) => {
          expect(value).to.equal(true);
        });
    });

  });

  describe('write', () => {

    it('should succeed', () => {
      return gpio.write(true)
        .then(() => {
          expect(system.shift()).to.equal(System.Binary.High);
        });
    });

  });

  describe('subscribe', () => {

    it('should be notified of new value', () => {
      return new Promise((resolve) => {

        gpio.subscribe((value) => {
          expect(value).to.equal(true);
          resolve();
        });

        gpio.write(true);
      });
    });

    it('should call onComplete when a gpio is unexported', () => {
      return new Promise((resolve) => {

        gpio.subscribe(
          () => {},
          () => {},
          resolve,
        );

        gpio.unexport();
      });
    });

  });

});
