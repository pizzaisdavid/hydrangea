
import { Pin } from '../pin';
import { System } from '../system';

export abstract class Board {
  static direction = System.direction;
  static edge = System.edge;
  
  abstract createPin(pin: System.configuration): Pin;
}
