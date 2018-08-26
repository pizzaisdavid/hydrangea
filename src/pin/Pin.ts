
import { Subscription } from 'rxjs';

export interface Pin {
  read(): Promise<boolean>;
  write(value: boolean): Promise<void>;
  subscribe(
    onNext: (value: boolean) => void,
    onError?: (error: Error) => void,
    onComplete?: () => void
  ): Subscription;
  unexport(): void;
}
