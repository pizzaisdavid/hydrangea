import { Pin } from './Pin';
import { Subscription } from 'rxjs';

export class GpioMock extends Pin {

    private content: boolean[];

    constructor() {
        super();
        this.content = [];
    }

    public read(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    public write(value: boolean): Promise<void> {
        this.content.push(value);
        return Promise.resolve();
    }

    public subscribe(onNext: (value: boolean) => void, onError?: (error: Error) => void, onComplete?: () => void): Subscription {
        throw new Error("Method not implemented.");
    }

    public unexport(): void {
        throw new Error("Method not implemented.");
    }

    public shift() {
        return this.content.shift();
    }

}
