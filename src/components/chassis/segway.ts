
import {
  Chassis,
  Motor
} from '@/components'

export namespace Segway {

  export interface Options {
    left: Motor.Interface
    right: Motor.Interface
  }

  export function from(
    options: Options
  ): Class {
    return new Class({
      left: options.left,
      right: options.right
    })
  }

  interface Configuration {
    left: Motor.Interface
    right: Motor.Interface
  }

  export class Class implements Chassis.Interface {

    private left: Motor.Interface
    private right: Motor.Interface

    constructor({ left, right }: Configuration) {
      this.left = left
      this.right = right
    }

    turn(degree: number): Promise<void> {
      throw new Error('Method not implemented.')
    }

    forward(): Promise<void> {
      throw new Error('Method not implemented.')
    }

    async stop(): Promise<void> {
      await Promise.all([
        this.left.stop(),
        this.right.stop()
      ])
    }

    reverse(): Promise<void> {
      throw new Error('Method not implemented.')
    }

  }

}
