
import { Pin } from './Pin';

export { Pin };

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

export interface Board {
  createPin(pin: PinConfiguration): Pin;
}
