
import { Subscription } from 'rxjs';

export { Subscription };

export abstract class Pin {

  public abstract read(): Promise<boolean>;
  public abstract write(value: boolean): Promise<void>;
  public abstract subscribe(
    onNext: (value: boolean) => void,
    onError?: (error: Error) => void,
    onComplete?: () => void,
  ): Subscription;
  public abstract unexport(): void;

}
