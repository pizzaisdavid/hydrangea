
import { Gpio, GpioOptions } from 'onoff';
import { Subject, Subscription } from 'rxjs';

export class Pintail {

  static make(pin: number, direction: string, edge?: string, options?: GpioOptions): Pintail {
    const gpio = new Gpio(pin, direction, edge, options);
    return new Pintail(gpio);
  }

  private subject: Subject<any>;

  private constructor(private gpio: Gpio) {
    this.subject = new Subject();
    this.gpio.watch((error, value) => {
      if (error) {
        this.subject.error(error);
      } else {
        this.subject.next(value);
      }
    });
  }

  read(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.gpio.read((error, value) => {
        if (error) {
          reject(error);
        } else {
          resolve(value);
        }
      });
    });
  }

  write(value: number): Promise<number> {
    return new Promise((resolve, reject) => {
      this.gpio.write(value, (error, value) => {
        if (error) {
          reject(error);
        } else {
          resolve(value);
        }
      });
    });
  }

  subscribe(
    onNext: (value: number) => void,
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
