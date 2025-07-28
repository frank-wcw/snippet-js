import { expect, test } from 'vitest'
import { autoIncrement } from "./index";

;(() => {
  const N = 0
  test(`autoIncrement ${N} sequence test`, () => {
    const ai = autoIncrement(N)
    expect(ai.value).toBe(N)

    const exceptedList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    for (let i = 0; i < exceptedList.length; i++) {
      expect(ai.next()).toBe(exceptedList[i])
      expect(ai.value).toBe(exceptedList[i])
    }
  })
})()

;(() => {
  const N = 19
  test(`autoIncrement ${N} sequence test`, () => {
    const ai = autoIncrement(N)
    expect(ai.value).toBe(N)

    const exceptedList = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

    for (let i = 0; i < exceptedList.length; i++) {
      expect(ai.next()).toBe(exceptedList[i])
      expect(ai.value).toBe(exceptedList[i])
    }
  })
})()

;(() => {
  const WORDS = 'ab'
  test(`autoIncrement "${WORDS}" sequence test`, () => {
    const ai = autoIncrement(WORDS)
    expect(ai.value).toBe(WORDS[0])

    const exceptedList = ['b', 'aa', 'ab', 'ba', 'bb', 'aaa', 'aab', 'aba', 'abb', 'baa', 'bab', 'bba', 'bbb', 'aaaa', 'aaab', 'aaba', 'aabb', 'abaa', 'abab', 'abba', 'abbb', 'baaa', 'baab', 'baba', 'babb', 'bbaa', 'bbab', 'bbba', 'bbbb', 'aaaaa']

    for (let i = 0; i < exceptedList.length; i++) {
      expect(ai.next()).toBe(exceptedList[i])
      expect(ai.value).toBe(exceptedList[i])
    }
  })
})()

;(() => {
  const WORDS = 'abc'
  test(`autoIncrement "${WORDS}" sequence test`, () => {
    const ai = autoIncrement(WORDS)
    expect(ai.value).toBe(WORDS[0])

    const exceptedList = ['b', 'c', 'aa', 'ab', 'ac', 'ba', 'bb', 'bc', 'ca', 'cb', 'cc', 'aaa', 'aab', 'aac', 'aba', 'abb', 'abc', 'aca', 'acb', 'acc', 'baa', 'bab', 'bac', 'bba', 'bbb', 'bbc', 'bca', 'bcb', 'bcc', 'caa', 'cab', 'cac', 'cba', 'cbb', 'cbc', 'cca', 'ccb', 'ccc', 'aaaa', 'aaab', 'aaac', 'aaba', 'aabb', 'aabc', 'aaca', 'aacb', 'aacc', 'abaa', 'abab', 'abac', 'abba', 'abbb', 'abbc', 'abca', 'abcb', 'abcc', 'acaa', 'acab', 'acac', 'acba', 'acbb', 'acbc', 'acca', 'accb', 'accc', 'baaa', 'baab']

    for (let i = 0; i < exceptedList.length; i++) {
      expect(ai.next()).toBe(exceptedList[i])
      expect(ai.value).toBe(exceptedList[i])
    }
  })
})()
