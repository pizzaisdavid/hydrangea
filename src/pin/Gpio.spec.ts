
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

    it('success', () => {
      system.push(1);
      return gpio.read()
        .then(value => expect(value).to.equal(true));
    });

  });

  describe('write', () => {

    it('success', () => {
      return gpio.write(true)
        .then(() => {
          const value = system.shift();
          expect(value).to.equal(1);
        });  
    });

  });

  describe('subscribe', () => {

    it('success', (done) => {
      gpio.subscribe(value => {
        expect(value).to.equal(true);
        done();
      });
      system.push(1);
    });

    it('onComplete on unexport', (done) => {
      gpio.subscribe(
        () => {},
        () => {},
        done
      );
      gpio.unexport();
    });

  });
  
});
