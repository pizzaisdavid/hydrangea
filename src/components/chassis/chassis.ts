
import {
  Motor
} from '@/components/motor'

export namespace Chassis {

  export abstract class Interface extends Motor.Interface {
    abstract turn(degree: number): Promise<void>
  }

}
