
import { Pin } from '../pin';

export enum direction {
  in = 'in',
  out = 'out',
  low = 'low',
  high = 'high',
};

export enum edge {
  none = 'none',
  rising = 'rising',
  falling = 'falling',
  both = 'both',
};

export interface PinConfiguration {
  id: number;
  direction: direction;
  address?: number;
  edge?: edge;
}

export abstract class Board {
  static direction = direction;
  static edge = edge;
  
  abstract createPin(pin: PinConfiguration): Pin;
}
