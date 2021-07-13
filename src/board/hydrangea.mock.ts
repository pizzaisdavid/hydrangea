
import { Gpio } from '../pin';
import { Board } from './board';
import { FileMock, System } from '../system';

export class HydrangeaMock extends Board {

  public createPin(configuration: System.Configuration) {
    const file = new FileMock();
    return new Gpio(file);
  }

}
