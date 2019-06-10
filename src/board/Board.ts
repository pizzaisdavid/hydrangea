
import { Pin } from '../pin';
import { System } from '../system';

export abstract class Board {

  public static Direction = System.Direction;
  public static Edge = System.Edge;

  abstract createPin(pin: System.Configuration): Pin;

}
