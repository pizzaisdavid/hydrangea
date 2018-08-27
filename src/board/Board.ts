
import { Pin } from '../pin';
import { Gpio } from '../gpio';

export abstract class Board {
  static gpio = Gpio;
  
  abstract createPin(pin: Gpio.configuration): Pin;
}
