import {
  Hydrangea
} from '../src'

import {
  GearboxMotor,
  UltrasonicSensor
} from './../src/components'

const board = new Hydrangea()
const sensor = UltrasonicSensor.from(board, { pin: 4 })
const motor = GearboxMotor.from(board, { pin: 5 })

sensor.subscribe(
  async (distance) => {
    if (distance < 20) {
      await motor.stop()
    }
  }
)
