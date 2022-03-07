
export namespace Random {

  interface BetweenOptions {
    minimum: number
    maximum: number
  }

  export function between(
    { minimum, maximum }: BetweenOptions
  ): number {
    const delta = maximum - minimum
    const inclusive = delta + 1
    return Math.floor(Math.random() * inclusive) + minimum
  }

}
