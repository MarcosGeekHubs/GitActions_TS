import HelloWorld from "../src/HelloWorld"

describe('Hello World', () => {

  it('Send One return one', () => {
    expect(HelloWorld.helloWorld()).toEqual("Hello World")
  });

  it.skip('Send One return one', () => {
    expect(HelloWorld.helloWorld()).toEqual("Hello ")
  })

})
