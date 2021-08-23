# Arrays
# https://ruby-doc.org/core-3.0.0/Array.html
# Initialization
puts "Array.new(4) {Hash.new} : #{Array.new(4) {Hash.new}}"
puts "Array.new(4) {|i| i.to_s } : #{Array.new(4) {|i| i.to_s }}"

# Initiate an empty array
names = []

["Charles", "Dickins", "Easton", "Fitzerald", "Gothe", "Hendry"].each do | element |
  # add each element to names array
  names << element
end

puts "names : #{names}"
puts "names.size : #{names.size}"
puts "names.length : #{names.length}"
puts "names.count : #{names.count}"
puts "names.empty? : #{names.empty?}"
puts "names.include?('Kazakastan') : #{names.include?('Kazakastan')}"
puts "names.push('Irvin') : #{names.push('Irvin')}"
puts "names << 'Jack' : #{names << 'Jack' }"
# unshift will add a new item to the beginning of an array.
puts "names.unshift('Anton') #{names.unshift('Anton')}"
puts "names.class: #{names.class}"
puts "names.inspect : #{names.inspect}"
puts "numbers = ['one', 'two'] : #{numbers = ['one', 'two']}"
puts "numbers.insert(2, 'three') : #{numbers.insert(2, 'three')}"
# Using the insert method, you can also insert multiple values at once:
puts "numbers.insert(3, 'four', 'five', 'six') : #{numbers.insert(3, 'four', 'five', 'six')}"
# Removing elements:
# pop - The method pop removes the last element in an array and returns it:
puts "numbers.pop (last element) : #{numbers.pop}"
# shift - To retrieve and at the same time remove the first item, use shift:
puts "numbers.shift (first element) : #{numbers.shift}"
# delete_at(index)
puts "numbers.delete_at(2) (deleted element) : #{numbers.delete_at(2)}"

countries = []
countries = ["Australia", "Belgium", "Canada", "Denmark", "Estonia", "Finland", "Germany", "Hong Kong", "Ireland", "Kazakastan", "Libiya", "Mongolia", "Norway", "Peru", "Russia", "Thailand", "United Kingdom", "Zimbawe"]
puts "countries : #{countries}"
puts "countries.first : #{countries.first}"
puts "countries.last : #{countries.last}"
puts "countries.fetch(1) : #{countries.fetch(1)}"
# To return the first n elements of an array, use take
puts "countries.take(3) : #{countries.take(3)}"
countries_list_str = "Australia, Belgium, Canada, Denmark, Estonia, Finland, Germany, HongKong, Ireland, Kazakastan, Libiya, Mongolia, Norway, Peru, Russia, Thailand, UnitedKingdom, Zimbawe"
# countries_list = Array.new()
countries_list = []
countries_list_quoted = []
values = countries_list_str.split(",")
values.each do |element|
  countries_list << element.strip
end

puts "countries_list: #{countries_list}"
# compact
arr_with_nil = ['foo', 0, nil, 'bar', 7, 'baz', nil]
puts "arr_with_nil : #{arr_with_nil}"
puts "arr_with_nil.compact : #{arr_with_nil.compact}"  #=> ['foo', 0, 'bar', 7, 'baz']
puts "arr_with_nil : #{arr_with_nil}"         #=> ['foo', 0, nil, 'bar', 7, 'baz', nil]
puts "This is permanent change with compact! "
puts "arr_with_nil.compact! : #{arr_with_nil.compact!}" #=> ['foo', 0, 'bar', 7, 'baz']
puts "arr_with_nil : #{arr_with_nil}"          #=> ['foo', 0, 'bar', 7, 'baz']

#each
arr = [1, 2, 3, 4, 5, 6]
puts
arr.each {|a| print a -= 10, ' '} # prints the decrements numbers from -10
puts
p "#{arr.each {|a| print a -= 10, ' '}}" # returns the original array

puts "arr.map {|a| 2*a} : #{arr.map {|a| 2*a}}"    #=> [2, 4, 6, 8, 10]
puts arr                   #=> [1, 2, 3, 4, 5]
puts "arr.map! {|a| a**2} #{arr.map! {|a| a**2} }"  #=> [1, 4, 9, 16, 25]
puts arr                   #=> [1, 4, 9, 16, 25]


puts "arr.select {|a| a > 3} : #{arr.select {|a| a > 3} }"
puts "arr.reject {|a| a < 3} : #{arr.reject {|a| a < 3}}"
puts "arr.drop_while {|a| a < 4} : #{arr.drop_while {|a| a < 4} }"
puts arr                          #=> [1, 2, 3, 4, 5, 6]

puts "arr.select! {|a| a > 3} : #{ arr.select! {|a| a > 3} }"
puts "arr.reject! {|a| a < 3} : #{ arr.reject! {|a| a < 3} }"
puts arr

arr = [1, 2, 3, 4, 5, 6]
puts arr
puts "arr.delete_if {|a| a < 4} : #{ arr.delete_if {|a| a < 4} }"   #=> [4, 5, 6]
p arr                         #=> [4, 5, 6]

arr = [1, 2, 3, 4, 5, 6]
puts "arr.keep_if {|a| a < 4} : #{ arr.keep_if {|a| a < 4} }"   #=> [1, 2, 3]
p arr                       #=> [1, 2, 3]


#reverse_each
words = %w[first second third fourth fifth sixth]
str = ""
words.reverse_each {|word| str += "#{word} "}
p str #=> "sixth fifth fourth third second first "
