
import {
  Board
} from '@/system'

import {
  Motor
} from './motor'

export namespace GearboxMotor {

  export function from(
    board: Board,
    options: Motor.Options
  ): Class {
    return new Class()
  }

  export class Class implements Motor.Interface {

    forward(): Promise<void> {
      throw new Error('Method not implemented.')
    }
    stop(): Promise<void> {
      throw new Error('Method not implemented.')
    }
    reverse(): Promise<void> {
      throw new Error('Method not implemented.')
    }

  }

}
