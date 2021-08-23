exports = this // Creating a global variable
exports.myVariable = "Mumbo Jumbo";

alert exports.myVariable

# function
times = (a=10, b=20) ->
  a * b

sum = (nums...) ->
  result = 0
  nums.forEach (n) -> result += n
  result
