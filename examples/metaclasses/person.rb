# https://yehudakatz.com/2009/11/15/metaprogramming-in-ruby-its-all-about-the-self/
class Person
  def metaclass; class << self; self; end; end
  def self.species
    "Homo Sapien"
  end

  class << self
    def species
      "Unknown Creature"
    end
  end

end

puts "Person.species : #{Person.species}"
puts "This can't be accessed {Person.metaclass.species}"
puts "However, this can be accessed {ob = Person.new; ob.metaclass.species} #{ob = Person.new; ob.metaclass.species}"

class Person1
  # defining color method for Person1 class
  #It is equivalent to just def color; "Black"; end
  def self.color
    "Black"
  end
  class << self
    def species
      "Homo Sapien"
    end
  end
end

puts "Person1.class : #{Person1.class}"
puts "Person1.color : #{Person1.color}"

class << Person
  def species
    "Homo Sapien"
  end
  puts "(class << Person) self.name : #{self.name}"
end

obj = Person.new
puts "This is defined in the Person class "
puts "(class << Person) obj.metaclass.species : #{obj.metaclass.species}"



Person.instance_eval do
  def species
    "Homo Sapien"
  end
  puts "(instance_eval) self.name : #{self.name}"
  puts "(instance_eval) self.species : #{self.species}"

end

def Person.species
  "Rat"
end

puts "def Person.species; 'Rat'; end; Person.species: #{Person.species}"

matz = Object.new
def matz.speak
  "Place your burden to machine's shoulders"
end

metaclass = class << matz; self; end


puts "matz.class: #{matz.class}" #=> Object
puts "metaclass: #{metaclass.inspect}" #=> Object
puts "metaclass.instance_methods : #{metaclass.instance_methods } "#All methods
puts "metaclass.instance_methods.grep(/speak/) : #{metaclass.instance_methods.grep(/speak/) } "#=> ["speak"]
