# based on https://viewsourcecode.org/why/hacking/seeingMetaclassesClearly.html
require 'yaml'
require_relative 'metaid'
require_relative 'truck'

m = MailTruck.new( "Harold", ['12 Corrigan Way', '23 Antler Ave'] )


puts "o = Object.new: #{o = Object.new}"
puts "o.class: #{o.class}"
puts "Class.superclass.superclass: #{Class.superclass.superclass}"
puts "Object.class: #{Object.class}"
puts "Object.superclass: #{Object.superclass}"



m = MailTruck.new( "Harold", ['12 Corrigan Way', '23 Antler Ave'] )

puts "m.class: #{m.class}"
puts "m.instance_variable_set( \"@speed\", 45 ): #{m.instance_variable_set( '@speed', 45 )}"
puts "m.driver: #{m.driver}"
puts "m.object_id: #{m.object_id}"
puts "MailTruck.object_id: #{MailTruck.object_id}"

puts "m.metaclass.class: #{m.metaclass.class}"
puts "m.metaclass.superclass: #{m.metaclass.superclass}"
puts "m.metaclass.instance_methods: #{m.metaclass.instance_methods}"

class << m
  def to_yaml_properties
    ['@driver', '@route']
  end
end

puts "m.singleton_methods: #{m.singleton_methods}"
puts "m.metaclass.instance_methods: #{m.metaclass.instance_methods}"
puts "YAML::dump m: #{YAML::dump m}"

puts "m.class: #{m.class}"
puts "m.class.instance_methods: #{m.class.instance_methods}"
puts "m.inspect: #{m.inspect}"
puts "m.metaclass: #{m.metaclass}"
# puts "m.metaclass.class: #{m.metaclass.class}"
puts "m.metaclass.superclass: #{m.metaclass.superclass}"
# puts "m.metaclass.superclass.class: #{m.metaclass.superclass.class}"
puts "m.metaclass.metaclass: #{m.metaclass.metaclass}"
puts "m.metaclass.metaclass.metaclass: #{m.metaclass.metaclass.metaclass}"

m.meta_eval do
  self.meta_eval do
      def rabbit; "*rabbit*"; end
    self.meta_eval do
      def ribbit; "*ribbit*"; end
    end
  end
end

puts "m.metaclass.metaclass.singleton_methods #{m.metaclass.metaclass.singleton_methods}"
puts "m.metaclass.metaclass.metaclass.singleton_methods #{m.metaclass.metaclass.metaclass.singleton_methods}"


require_relative 'class' # we put this at the end as it aborts the program.
