import { Board, System } from '../..'
import { Motor } from './motor'

export class GearboxMotor implements Motor {

  static from(
    board: Board,
    configuration: System.Configuration_v2
  ): GearboxMotor {
    return new GearboxMotor()
  }

  start(): Promise<void> {
    throw new Error('Method not implemented.')
  }
  stop(): Promise<void> {
    throw new Error('Method not implemented.')
  }

}
