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

sensor.subscribe(
  async (distance) => {
    if (distance < 20) {
      await chassis.turn(Utility.Random.between(2, 7))
    } else {
      await chassis.forward()
    }
  }
)


