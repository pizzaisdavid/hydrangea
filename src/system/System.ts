
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

  export interface Callback<T = void> {
    (error: any, value?: T): void;
  }

  export abstract class Stream {
    constructor(configuration: Configuration) {}
    abstract watch(callback: Callback<number>): void;
    abstract read(callback: Callback<number>): void;
    abstract write(value: number, callback: Callback<void>): void;
    abstract unexport(): void;
  }  
}
