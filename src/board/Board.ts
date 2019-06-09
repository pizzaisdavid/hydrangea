
import { Pin } from '../pin';
import { System } from '../system';

export abstract class Board {
  static Direction = System.Direction;
  static Edge = System.Edge;
  
  abstract createPin(pin: System.Configuration): Pin;
}
