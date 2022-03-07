import {
  Hydrangea
} from '../src'

import {
  GearboxMotor,
  UltrasonicSensor,
  Segway
} from './../src/components'

import {
  Random
} from '../src/utility'

const board = new Hydrangea()

const sensor = UltrasonicSensor.from(board, { pin: 4 })
const chassis = Segway.from({
  left: GearboxMotor.from(board, { pin: 5 }),
  right: GearboxMotor.from(board, { pin: 6 })
})

Flow.main({
  execute: Flow.decision({
    execute: () => sensor.distance() < 20,
    true: () => chassis.turn(Random.between({ minimum: 2, maximum: 7 })),
    false: () => chassis.forward()
  })
})
namespace Flow {

  export async function main(
    input: {
      execute: () => Promise<void>
    }
  ) {
    while (true) {
      await input.execute()
    }
  }

  export function decision(
    input: {
      execute: () => boolean,
      true: () => Promise<void>,
      false: () => Promise<void>
    }
  ) {
    return async () => {
      if (input.execute()) {
        await input.true()
      } else {
        await input.false()
      }
    }
  }

}
