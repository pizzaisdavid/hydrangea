
export namespace System {

  export interface configuration {
    id: number;
    direction: direction;
    address?: number;
    edge?: edge;
  }
  
  export enum direction {
    in = 'in',
    out = 'out',
    low = 'low',
    high = 'high',
  }

  export enum edge {
    none = 'none',
    rising = 'rising',
    falling = 'falling',
    both = 'both',
  }

  export abstract class Stream {
    constructor(configuration: configuration) {}
    abstract watch(callback: (error: Error, value: number) => void): void;
    abstract read(callback: (error: Error, value: number) => void): void;
    abstract write(value: number, callback: (error: Error) => void): void;
    abstract unexport(): void;
  }  
}
