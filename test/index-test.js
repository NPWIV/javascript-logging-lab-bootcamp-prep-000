const expect = require('expect')
const fs = require('fs')
const jsdom = require('jsdom')
const path = require('path')


describe('index', () => {
  const html = '<div></div>'
  const src = path.resolve(__dirname, '..', 'index.js')
console.log("I want to be a developer")
  it('calls console.error()', done => {
    const spy = expect.spyOn(console, 'error').andCallThrough()
console.error("HALP")
    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      expect(spy).toHaveBeenCalled('expected console.error to have been called')
      console.error.restore()
      done()
    })
  })

  it('calls console.log()', done => {
    const spy = expect.spyOn(console, 'log').andCallThrough()
console.log("I have been called")
    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      expect(spy).toHaveBeenCalled('expected console.log to have been called')

      console.log.restore()
      done()
    })
  })

  it('calls console.warn()', done => {
    const spy = expect.spyOn(console, 'warn').andCallThrough()
console.warn("called")
    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      expect(spy).toHaveBeenCalled('expected console.warn to have been called')
      console.warn.restore()
      done()
    })
  })
})
