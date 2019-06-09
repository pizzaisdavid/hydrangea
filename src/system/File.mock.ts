
import { System } from './System';

export class FileMock extends System.Stream {

  private buffer: number[];
  private watchers: ((error: Error, value: number) => void)[];

  constructor() {
    super({
      id: -1,
      direction: System.Direction.High,
    });
    this.buffer = [];
    this.watchers = [];
  }

  push(value: number) {
    this.buffer.push(value);
    this.watchers.forEach(watcher => {
      watcher(null, value);
    })
  }

  shift() {
    return this.buffer.shift();
  }

  watch(callback: (error: Error, value: number) => void) {
    this.watchers.push(callback);
  }

  read(callback: (error: Error, value: number) => void): void {
    callback(null, this.shift());
  }

  write(value: number, callback: (error: Error) => void): void {
    /* TODO
    Determine if calling "write" should call all the "watchers."
    */
    this.push(value);
    callback(null);
  }

  unexport(): void {
  }

}
