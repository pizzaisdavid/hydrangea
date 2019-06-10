
import { System } from './System';

export class FileMock extends System.Stream {

  public static Signal = System.Binary;

  private buffer: System.Binary[];
  private watchers: System.Callback<System.Binary>[];

  constructor() {
    super({
      id: -1,
      direction: System.Direction.High,
    });
    this.buffer = [];
    this.watchers = [];
  }

  push(value: System.Binary): void {
    this.buffer.push(value);
    this.watchers.forEach((watcher) => {
      watcher(null, value);
    });
  }

  shift(): System.Binary {
    return this.buffer.shift();
  }

  watch(callback: System.Callback<System.Binary>) {
    this.watchers.push(callback);
  }

  read(callback: System.Callback<System.Binary>): void {
    callback(null, this.shift());
  }

  write(value: System.Binary, callback: System.Callback<void>): void {
    /* TODO
    Determine if calling "write" should call all the "watchers."
    */
    this.push(value);
    callback(null);
  }

  unexport(): void {}

}
