
import { Pin } from './Pin';
import { System } from '../system';

import { Subject } from 'rxjs';

export class Gpio extends Pin {

  private subject: Subject<boolean>;

  constructor(private system: System.Stream) {
    super(system);
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
  ) {
    return this.subject.subscribe(onNext, onError, onComplete);
  }

  unexport() {
    this.subject.complete();
    this.system.unexport();
  }

  test() {
    
  }
}

function convertBitToBoolean(value: number): boolean {
  return Boolean(value);
}

function convertBooleanToBit(value: boolean): number {
  return Number(value);
}
