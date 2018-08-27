
import { Pin } from './Pin';
import { Gpio } from '../gpio';

import { Subject } from 'rxjs';

export class Pint extends Pin {

  private subject: Subject<boolean>;

  constructor(private gpio: Gpio.Stream) {
    super(gpio);
    this.subject = new Subject();
    this.gpio.watch((error, bit) => {
      if (error) {
        this.subject.error(error);
      } else {
        this.subject.next(convertBitToBoolean(bit));
      }
    });
  }

  read(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.gpio.read((error, bit) => {
        if (error) {
          reject(error);
        } else {
          resolve(convertBitToBoolean(bit));
        }
      });
    });
  }

  write(value: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
      this.gpio.write(convertBooleanToBit(value), (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  subscribe(
    onNext: (value: boolean) => void,
    onError?: (error: Error) => void,
    onComplete?: () => void,
  ) {
    return this.subject.subscribe(onNext, onError, onComplete);
  }

  unexport() {
    this.subject.complete();
    this.gpio.unexport();
  }

}

function convertBitToBoolean(value: number): boolean {
  return Boolean(value);
}

function convertBooleanToBit(value: boolean): number {
  return Number(value);
}
