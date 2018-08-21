
import { Gpio, GpioOptions } from 'onoff';
import { Subject, Subscription } from 'rxjs';

export enum Direction {
  in = 'in',
  out = 'out',
  low = 'low',
  high = 'high',
};

export enum Edge {
  none = 'none',
  rising = 'rising',
  falling = 'falling',
  both = 'both',
};

export class Pintail {

  static make(pin: number, direction: Direction, edge?: Edge, options?: GpioOptions): Pintail {
    const gpio = new Gpio(pin, direction, edge, options);
    return new Pintail(gpio);
  }

  private subject: Subject<boolean>;

  private constructor(private gpio: Gpio) {
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

  write(value: boolean): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.gpio.write(convertBooleanToBit(value), (error, bit) => {
        if (error) {
          reject(error);
        } else {
          resolve(convertBitToBoolean(bit));
        }
      });
    });
  }

  subscribe(
    onNext: (value: boolean) => void,
    onError?: (error: Error) => void,
    onComplete?: () => void,
  ): Subscription {
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
