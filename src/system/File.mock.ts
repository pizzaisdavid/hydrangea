
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
