import { sayHello } from '../src/hello'

describe('sayHello', () => {
  it('should return "Hello World"', () => {
    expect(sayHello()).toBe('Hello World')
  })
})
