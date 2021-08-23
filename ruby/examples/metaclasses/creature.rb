require_relative 'metaid'

class Creature
  def self.traits( *arr )
    return @traits if arr.empty?
    attr_accessor *arr
    arr.each do |trait|
      meta_def trait do |val|
        @traits ||= {}
        @traits[trait] = val
        puts val
      end
    end
    class_def :initialize do
      self.class.traits.each do |k,v|
        instance_variable_set( "@#{k}", v )
      end
    end
  end
end

#Added experiementally
cr = Creature.new()
ar = ["dark", "nice"]
cr.class.traits(*ar)
tr = Creature.traits(*ar)

# Creature.traits(*arr)
puts "Creature.traits #{cr.class.traits}\n"
puts "tr:  #{tr}\n"
puts "tr.inspect:  #{tr.inspect}\n"
puts "tr.class:  #{tr.class}\n"
puts "cr.class.traits.inspect: #{cr.class.traits.inspect}"
