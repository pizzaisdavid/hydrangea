
import { Gpio } from './Gpio';

export class MockFileSystem implements Gpio {

  private buffer: number[];

  constructor() {
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
