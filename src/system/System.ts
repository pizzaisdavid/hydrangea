
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

  export enum Binary {
    High = 1,
    Low = 0
  }

  export interface Callback<T = void> {
    (error: any, value?: T): void;
  }

  export abstract class Stream {

    constructor(protected configuration: Configuration) {}
    abstract watch(callback: Callback<Binary>): void;
    abstract read(callback: Callback<Binary>): void;
    abstract write(value: Binary, callback: Callback<void>): void;
    abstract unexport(): void;

  }

}
