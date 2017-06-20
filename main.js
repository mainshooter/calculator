var get;
var calculate;

(function() {
  get = {
    /**
     * Gets the value from a input field
     * @return {[array]} [the value form the field]
     */
    numbers: function() {
      var value = document.getElementById('numbers').value;
      var value = value.split(",");
      return(value);
    },
    /**
     * Gets the value from the select fields
     * @return {[string]} [The value from the field]
     */
    operator: function() {
      var value = document.getElementById('operator').value;
      return(value);
    }
  }
})();

(function() {
  calculate = {
    calculate: function() {
      var numbers = get.numbers();
      var operator = get.operator();
      console.log("Numbers: " + numbers);
      console.log("operator: " + operator);

      switch (operator) {
        case '+':
          calculate.showResult(calculate.plus(numbers));
          break;
        case '-':
          calculate.showResult(calculate.minus(numbers));
          break;
        case '*':
          calculate.showResult(calculate.keer(numbers));
          break;
        case '/':
            calculate.showResult(calculate.delen(numbers));
          break;
        }
    },
    /**
     * Plus things together
     * @param  {[array]} numbers [The numbers we get from the field]
     * @return {[numbers]} [The result from the plus function]
     */
    plus: function(numbers) {
      var result = 0;
      for (var i = 0; i < numbers.length; i++) {
        result = result + parseInt(numbers[i]);
      }
      return(result);
    },

    /**
     * Minus thing to
     * @param  {[type]} numbers [description]
     * @return {[type]}         [description]
     */
    minus: function(numbers) {
      // 30,2,5
      var result = numbers[0];
      for (var i = 1; i < numbers.length; i++) {
        result = result - parseInt(numbers[i]);
        // 30 - 2 = 28
        // 28 - 5 = 23


        //  0 , 1 , 2 - array index
        // 0 -30 = -30
        // -30 - 2 = -32
        // -32 - 5 = -37
      }
      return(result);
    },
    keer: function(numbers) {
      var result = numbers[0];
      for (var i = 1; i < numbers.length; i++) {
        result = result * parseInt(numbers[i]);
      }
      return(result);
    },
    delen: function(numbers) {
      var result = numbers[0];
      for (var i = 1; i < numbers.length; i++) {
        result = result / parseInt(numbers[i]);
      }
      return(result);
    },
    /**
     * Sets our listeners
     */
    listeners: function() {
      document.getElementById('startApp').addEventListener("click", function() {
        calculate.calculate();
      });
    },
    showResult: function(result) {
      document.getElementById('result').innerHTML = result;
    }
  }
})();
