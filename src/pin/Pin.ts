
import { System } from '../system'

import { Subscription } from 'rxjs';

export abstract class Pin {
  constructor(system: System.Stream) {}
  abstract read(): Promise<boolean>;
  abstract write(value: boolean): Promise<void>;
  abstract subscribe(
    onNext: (value: boolean) => void,
    onError?: (error: Error) => void,
    onComplete?: () => void
  ): Subscription;
  abstract unexport(): void;
}
