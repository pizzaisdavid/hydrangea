
import { Subscription } from 'rxjs';

export { Subscription };

export abstract class Pin {

  abstract read(): Promise<boolean>;
  abstract write(value: boolean): Promise<void>;
  abstract subscribe(
    onNext: (value: boolean) => void,
    onError?: (error: Error) => void,
    onComplete?: () => void
  ): Subscription;
  abstract unexport(): void;

}
