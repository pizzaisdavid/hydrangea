
import {
  Chassis,
  Motor
} from '@/components'

import {
  Utility
} from '@/utility'

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

    async turn(duration: number): Promise<void> {
      await Promise.all([
        this.left.forward(),
        this.right.forward()
      ])
      await Utility.Sleep.until(duration)
      await this.stop()
    }

    async forward(): Promise<void> {
      await Promise.all([
        this.left.forward(),
        this.right.reverse()
      ])
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
