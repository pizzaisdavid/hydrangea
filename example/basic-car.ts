import {
  Hydrangea
} from '../src'

import {
  GearboxMotor,
  UltrasonicSensor,
  Segway
} from './../src/components'

import {
  Utility
} from './../src/utility'

const board = new Hydrangea()

const sensor = UltrasonicSensor.from(board, { pin: 4 })
const chassis = Segway.from({
  left: GearboxMotor.from(board, { pin: 5 }),
  right: GearboxMotor.from(board, { pin: 6 })
})

Flowchat
  .decision({
    condition: () => sensor.distance() < 20,
    then: () => chassis.turn(Utility.Random.between(2, 7)),
    else: () => chassis.forward()
  })

namespace Flowchat {

  interface IfOptions {
    condition: () => boolean
    then: () => Promise<void>
    else: () => Promise<void>
  }

  export async function decision(optons: IfOptions) {
    if (optons.condition()) {
      await optons.then()
    } else {
      await optons.else()
    }
  }
}
