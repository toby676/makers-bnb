function Calculator() {

}

Calculator.prototype.addition = function(x, y) {
  return x + y;
}

describe('#addition', function() {
  it('should add two numbers together', function() {
    var calculator = new Calculator();
    expect(calculator.addition(2, 2)).equal(4);
  });
});
