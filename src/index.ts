
import { Gpio, GpioOptions } from 'onoff';

export class GpioPromise {

  private gpio: Gpio;

  constructor(pin: number, direction: string, edge?: string, options?: GpioOptions) {
    this.gpio = new Gpio(pin, direction, edge, options);
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

  watch(callback: (error: Error, value: number) => void):void {
    this.gpio.watch(callback);
  }

  unwatch(callback?: (error: Error, value: number) => void):void {
    this.gpio.unwatch(callback);
  }

  unexport() {
    this.gpio.unexport();
  }

}
