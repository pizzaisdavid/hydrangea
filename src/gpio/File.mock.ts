
import { Gpio } from './Gpio';

export class FileMock extends Gpio.Stream {

  private buffer: number[];

  constructor() {
    super({
      id: -1,
      direction: Gpio.direction.high,
    });
    this.buffer = [];
  }

  push(value: number) {
    this.buffer.push(value);
  }

  watch(callback: (error: Error, value: number) => void) {
  }

  read(callback: (error: Error, value: number) => void): void {
    const value = this.buffer.shift();
    callback(null, value);
  }

  write(value: number, callback: (error: Error) => void): void {
  }

  unexport(): void {
  }

}
