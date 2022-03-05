
import {
  System
} from '@/system'

import {
  Board
} from '@/system/board'

import {
  Subscription
} from '@/system/pin'

import { DistanceSensor  } from "./interface";

export class UltrasonicSensor implements DistanceSensor {

  static from(
    board: Board,
    configuration: System.Configuration_v2
  ): UltrasonicSensor {
    return new UltrasonicSensor()
  }

  public subscribe(
    onNext: (value: number) => void,
    onError?: (error: Error) => void,
    onComplete?: () => void
  ): Subscription {
    // TODO
    return new Subscription()
  }

}
