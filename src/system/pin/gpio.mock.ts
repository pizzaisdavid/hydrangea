
import { Pin, Subscription } from './pin';

import { Subject } from 'rxjs';

export class GpioMock extends Pin {

  private buffer: boolean[];
  private subject: Subject<boolean>;

  constructor() {
    super();
    this.buffer = [];
    this.subject = new Subject();
  }

  push(value: boolean) {
    this.buffer.push(value);
    this.subject.next(value);
  }

  shift() {
    return this.buffer.shift();
  }

  read(): Promise<boolean> {
    const value = this.buffer.shift();
    return Promise.resolve(value);
  }

  write(value: boolean): Promise<void> {
    this.buffer.push(value);
    return Promise.resolve();
  }

  subscribe(
    onNext: (value: boolean) => void,
    onError?: (error: Error) => void,
    onComplete?: () => void,
  ): Subscription {
    return this.subject.subscribe(onNext, onError, onComplete);
  }

  unexport() {

  }
}
