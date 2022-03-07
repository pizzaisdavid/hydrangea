
export namespace Sleep {

  export function until(duration: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, duration)
    })
  }

}
