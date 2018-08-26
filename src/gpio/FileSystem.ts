
import { Gpio } from './Gpio';

import { Gpio as Onoff } from 'onoff';

export class FileSystem implements Gpio {

  private onoff: Onoff;

  constructor(configuration: any) {
    this.onoff = new Onoff(configuration.id, configuration.direction);
  }

  watch(callback: (error: Error, value: number) => void) {
    this.onoff.watch(callback);
  }

  read(callback: (error: Error, value: number) => void): void {
    this.onoff.read(callback);
  }

  write(value: number, callback: (error: Error) => void): void {
    this.onoff.write(value, callback);
  }

  unexport(): void {
    this.onoff.unexport();
  }

}
