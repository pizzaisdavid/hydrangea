
import { Gpio } from '../pin';
import { Board } from './board';
import { File, System } from '..';

export class Hydrangea extends Board {

  public createPin(configuration: System.Configuration) {
    const file = new File(configuration);
    return new Gpio(file);
  }

}
