
import { System } from './System';

import { Gpio as Onoff } from 'onoff';

export class File implements System.Stream {

  private onoff: Onoff;

  constructor(configuration: System.Configuration) {
    this.onoff = new Onoff(configuration.id, configuration.direction);
  }

  watch(callback: System.Callback<System.Binary>) {
    this.onoff.watch(callback);
  }

  read(callback: System.Callback<System.Binary>): void {
    this.onoff.read(callback);
  }

  write(value: System.Binary, callback: System.Callback<void>): void {
    this.onoff.write(value, callback);
  }

  unexport(): void {
    this.onoff.unexport();
  }

}
