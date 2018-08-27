
import { System } from './System';

export class FileMock extends System.Stream {

  private buffer: number[];

  constructor() {
    super({
      id: -1,
      direction: System.direction.high,
    });
    this.buffer = [];
  }

  push(value: number) {
    this.buffer.push(value);
  }

  shift() {
    return this.buffer.shift();
  }

  watch(callback: (error: Error, value: number) => void) {
  }

  read(callback: (error: Error, value: number) => void): void {
    callback(null, this.shift());
  }

  write(value: number, callback: (error: Error) => void): void {
    this.push(value);
    callback(null);
  }

  unexport(): void {
  }

}
