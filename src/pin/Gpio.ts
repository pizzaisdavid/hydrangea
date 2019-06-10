
import { Pin, Subscription } from './Pin';
import { System } from '../system';

import { Subject } from 'rxjs';

export class Gpio extends Pin {

  private subject: Subject<boolean>;

  constructor(private system: System.Stream) {
    super();
    this.subject = new Subject();
    this.system.watch((error, bit) => {
      if (error) {
        this.subject.error(error);
      } else {
        this.subject.next(convertBitToBoolean(bit));
      }
    });
  }

  read(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.system.read((error, bit) => {
        if (error) {
          reject(error);
        } else {
          resolve(convertBitToBoolean(bit));
        }
      });
    });
  }

  write(value: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
      this.system.write(convertBooleanToBit(value), (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  subscribe(
    onNext: (value: boolean) => void,
    onError?: (error: Error) => void,
    onComplete?: () => void,
  ): Subscription {
    return this.subject.subscribe(onNext, onError, onComplete);
  }

  unexport() {
    this.subject.complete();
    this.system.unexport();
  }

}

function convertBitToBoolean(value: System.Binary): boolean {
  return Boolean(value);
}

function convertBooleanToBit(value: boolean): System.Binary {
  return value ? 1 : 0;
}
