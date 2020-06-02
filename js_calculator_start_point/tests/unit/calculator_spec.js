var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should add 1 and 4', function() {
    calculator.previousTotal = 1
    calculator.add(4)
    assert.strictEqual(calculator.runningTotal, 5)
  });

  it('should subtract 4 from 7', function() { 
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('should multiply 3 by 5', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.strictEqual(calculator.runningTotal, 15)
  })

  it('should divide 21 by 7', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('should concatenate number clicks', function(){
    calculator.numberClick(1)
    calculator.numberClick(1)
    calculator.numberClick(1)
    assert.strictEqual(calculator.runningTotal, 111)
  })

  it('should chain multiple operations together', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(1)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 2)
  })

  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(1)
    calculator.clearClick()
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 3)
  })

});
