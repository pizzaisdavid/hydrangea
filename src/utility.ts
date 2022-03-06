
export namespace Utility {

  export namespace Random {

    export function between(
      minimum: number,
      maximum: number
    ): number {
      const delta = maximum - minimum
      return Math.floor(Math.random() * (delta + 1)) + minimum
    }

  }

  export namespace Sleep {

    export function until(duration: number): Promise<void> {
      return new Promise((resolve) => {
        setTimeout(resolve, duration)
      })
    }

  }

}
