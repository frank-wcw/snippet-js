export type AutoIncrementInstance<T extends string | number> = {
  value: T
  set(value: T extends number ? number : string): void
  next(): T
}

export const a_z = 'abcdefghijklmnopqrstuvwxyz'
export const A_Z = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
export const A_z = a_z + A_Z

export function autoIncrement<T extends string | number>(n: T): AutoIncrementInstance<T> {
  if (typeof n === 'number') {
    return {
      value: n,
      set(value) {
        this.value = value
      },
      next() {
        ;(this.value as number)++
        return this.value
      },
    }
  }

  let idxes = [0] as number[]
  let idx = 0

  return {
    value: n[0] as T,
    set(value) {
      const _value = value as string
      for (let i = 0; i < _value.length; i++) {
        const e = _value[i]
        const mi = n.indexOf(e)
        if (mi === -1) {
          n += e
          idxes[i] = n.length - 1
        }
        else idxes[i] = mi
      }
      idx = idxes.length - 1
      this.value = value
    },
    next() {
      if (idxes[idx] + 1 === n.length) {
        if (idxes.length > 1) {
          for (let i = idx - 1; i >= 0; i--) {
            if (idxes[i] + 1 < n.length) {
              for (let j = i + 1; j < idxes.length; j++) {
                idxes[j] = 0
              }
              idxes[i]++
              break
            } else if (i === 0) {
              idxes = Array((idx = idxes.length) + 1).fill(0)
            }
          }
        } else {
          idxes = Array((idx = idxes.length) + 1).fill(0)
        }
      } else {
        idxes[idx]++
      }

      return this.value = idxes.reduce<string>((p, i) => p + n[i], '') as T
    },
  }
}