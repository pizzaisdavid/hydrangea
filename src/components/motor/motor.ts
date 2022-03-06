
export namespace Motor {

  export abstract class Options {
    pin: number
  }

  export abstract class Interface {
    abstract forward(): Promise<void>
    abstract stop(): Promise<void>
    abstract reverse(): Promise<void>
  }

}
