# based on https://viewsourcecode.org/why/hacking/seeingMetaclassesClearly.html
# require_relative 'metaid'
class MailTruck
  attr_accessor :driver, :route
  def initialize( driver, route )
    @driver, @route = driver, route
  end

  @@trucks = [] # class variable
  def MailTruck.addTruck( truck )
    @@trucks << truck
  end

  def say_hi
    puts "Hi, I'm one of #{@@trucks.length} trucks!"
  end

  def MailTruck.display
    puts "@@trucks: #{@@trucks}"
    @@trucks.each do |t|
      puts "truck: #{t}"
    end
  end

end

mt = MailTruck.new( "Harold", ['12 Corrigan Way', '23 Antler Ave'] )
MailTruck.addTruck("Royal Mail Truck")
MailTruck.addTruck("DHL Truck")
MailTruck.addTruck("Indian Post Truck")
MailTruck.display
mt.display
mt.say_hi
MailTruck.instance_eval do
  puts "(instance_eval) self.name : #{self.name}"
  puts "(instance_eval) self.display : #{self.display}"
end

puts "mt.class.inspect: #{mt.class.inspect}"
puts "mt.class.singleton_methods: #{mt.class.singleton_methods}"
# puts "mt.class.instance_methods: #{mt.class.instance_methods}"
puts "mt.class.hash: #{mt.class.hash}"



mt.class.instance_methods.each do |method|
  fullmethod = "mt.class.#{method}"
  puts "#{fullmethod}"
end
