
export namespace System {

  export interface Configuration_v2 {
    pin: number;
  }

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
    Low = 0,
  }

  export type Callback<T = void> = (error: any, value?: T) => void;

  export abstract class Stream {

    public abstract watch(callback: Callback<Binary>): void;
    public abstract read(callback: Callback<Binary>): void;
    public abstract write(value: Binary, callback: Callback<void>): void;
    public abstract unexport(): void;

  }

}
