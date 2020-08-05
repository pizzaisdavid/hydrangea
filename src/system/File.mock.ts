
import { System } from './System';

export class FileMock extends System.Stream {

  private buffer: System.Binary[];
  private watchers: Array<System.Callback<System.Binary>>;

  constructor() {
    super();
    this.buffer = [];
    this.watchers = [];
  }

  public push(value: System.Binary): void {
    this.buffer.push(value);
    this.watchers.forEach((watcher) => {
      watcher(null, value);
    });
  }

  public shift(): System.Binary {
    return this.buffer.shift();
  }

  public watch(callback: System.Callback<System.Binary>) {
    this.watchers.push(callback);
  }

  public read(callback: System.Callback<System.Binary>): void {
    callback(null, this.shift());
  }

  public write(value: System.Binary, callback: System.Callback<void>): void {
    /* TODO
    Determine if calling "write" should call all the "watchers."
    */
    this.push(value);
    callback(null);
  }

  public unexport(): void {}

}
