# https://stackoverflow.com/questions/2505067/class-self-idiom-in-ruby
# First, the class << foo syntax opens up foo's singleton class (eigenclass). This allows you to specialise the behaviour of methods called on that specific object.

a = 'foo'
class << a
  def inspect
    '"bar"'
  end
end
a.inspect   # => "bar"

a = 'foo'   # new object, new singleton class
a.inspect   # => "foo"

# Now, to answer the question: class << self opens up self's singleton class, so that methods can be redefined for the current self object (which inside a class or module body is the class or module itself). Usually, this is used to define class/module ("static") methods:

class String
  class << self
    def value_of obj
      obj.to_s
    end
  end
end

String.value_of 42   # => "42"

# This can also be written as a shorthand:

# class String
#   def self.value_of obj
#     obj.to_s
#   end
# end

# Or even shorter:

# def String.value_of obj
#   obj.to_s
# end
