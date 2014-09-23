// mock Zepto
global.Zepto = function() {
  return Zepto.fn
}
Zepto.fn = {}

function resetZeptoMock() {
  Zepto.os = {}
  Zepto.fn.on = function() {}
  Zepto.fn.tap = function() {}
}


var assert = require("assert")
var sinon = require("sinon")

require("../src/zepto.tapClick.js")

describe('tapClick', function(){
  var callback = function() {}
  var $ = Zepto
  beforeEach(function(){
    resetZeptoMock()
  })

  describe('on web', function(){

    beforeEach(function(){
      Zepto.os.phone = false
      Zepto.os.tablet = false
      Zepto.fn.on = sinon.spy()
    })

    it('should set a click event', function(){
      $('something').tapClick(callback)
      assert(Zepto.fn.on.calledOnce);
      assert(Zepto.fn.on.calledWith('click', callback));
    })

  })

  describe('on a phone', function(){

    beforeEach(function(){
      Zepto.os.phone = true
      Zepto.os.tablet = false
      Zepto.fn.on = sinon.spy()
    })

    it('should set a tap event', function(){
      $('something').tapClick(callback)
      assert(Zepto.fn.on.calledOnce);
      assert(Zepto.fn.on.calledWith('tap', callback));
    })

  })

  describe('on a tablet', function(){

    beforeEach(function(){
      Zepto.os.phone = true
      Zepto.os.tablet = false
      Zepto.fn.on = sinon.spy()
    })

    it('should set a tap event', function(){
      $('something').tapClick(callback)
      assert(Zepto.fn.on.calledOnce);
      assert(Zepto.fn.on.calledWith('tap', callback));
    })

  })

  describe('with detect module missing', function(){

    beforeEach(function(){
      Zepto.os = null
      Zepto.fn.on = sinon.spy()
      console.warn = sinon.spy()
    })

    it('should show a warning', function(){
      $('something').tapClick(callback)
      assert(console.warn.calledOnce);
    })

    it('should set a click event', function(){
      $('something').tapClick(callback)
      assert(Zepto.fn.on.calledOnce);
      assert(Zepto.fn.on.calledWith('click', callback));
    })

  })

  describe('with touch module missing', function(){

    beforeEach(function(){
      Zepto.fn.tap = null
      Zepto.fn.on = sinon.spy()
      console.warn = sinon.spy()
    })

    it('should show a warning', function(){
      $('something').tapClick(callback)
      assert(console.warn.calledOnce);
    })

    it('should set a click event', function(){
      $('something').tapClick(callback)
      assert(Zepto.fn.on.calledOnce);
      assert(Zepto.fn.on.calledWith('click', callback));
    })

  })


})

