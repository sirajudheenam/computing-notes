# A lambda is a way to define a block & its parameters with some special syntax.
say_something = -> { puts "This is a lambda" }
say_something.call


my_lambda = -> { puts "Lambda called" }
# Call lambda in the following ways
my_lambda.call
my_lambda.()
my_lambda[]
my_lambda.===

times_two = ->(x) { x * 2 }
times_two.call(10)
