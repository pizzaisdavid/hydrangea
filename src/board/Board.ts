
import { Pin } from '../pin';
import { System } from '../system';

export abstract class Board {

  public abstract createPin(pin: System.Configuration): Pin;

}
