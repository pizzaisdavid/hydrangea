
export namespace System {

  export interface Configuration {
    id: number;
    direction: Direction;
    address?: number;
    edge?: Edge;
  }
  
  export enum Direction {
    In = 'in',
    Out = 'out',
    Low = 'low',
    High = 'high',
  }

  export enum Edge {
    None = 'none',
    Rising = 'rising',
    Falling = 'falling',
    Both = 'both',
  }

  export abstract class Stream {
    constructor(configuration: Configuration) {}
    abstract watch(callback: (error: Error, value: number) => void): void;
    abstract read(callback: (error: Error, value: number) => void): void;
    abstract write(value: number, callback: (error: Error) => void): void;
    abstract unexport(): void;
  }  
}
