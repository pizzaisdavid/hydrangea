
import { System } from './system';

import { Gpio as Onoff } from 'onoff';

export class File extends System.Stream {

  private onoff: Onoff;

  constructor(configuration: System.Configuration) {
    super();
    this.onoff = new Onoff(configuration.id, configuration.direction);
  }

  public watch(callback: System.Callback<System.Binary>) {
    this.onoff.watch(callback);
  }

  public read(callback: System.Callback<System.Binary>): void {
    this.onoff.read(callback);
  }

  public write(value: System.Binary, callback: System.Callback<void>): void {
    this.onoff.write(value, callback);
  }

  public unexport(): void {
    this.onoff.unexport();
  }

}
