# Lambdas vs Procs
# Procs are a very similar concept to Lambdas
#One of the differences is how you create them.

def call_proc
  puts "Before proc"
  my_proc = Proc.new { return 2 }
  my_proc.call
  puts "After proc"
end
call_proc
p call_proc

def call_proc(my_proc)
  count = 500
  my_proc.call
end

count   = 1
my_proc = Proc.new { puts "The count is : #{count}" }
p call_proc(my_proc) # What does this print?

# Should work
my_lambda = -> { return 1 }
puts "Lambda result: #{my_lambda.call}"
# Should raise exception
my_proc = Proc.new { return 1 }
puts "Proc result: #{my_proc.call}"
