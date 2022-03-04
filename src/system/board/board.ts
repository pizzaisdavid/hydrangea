
import { Pin } from '../pin';
import { System } from '..';

export abstract class Board {

  public abstract createPin(pin: System.Configuration): Pin;

}
