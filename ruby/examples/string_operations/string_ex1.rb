addr = "abc@xyz.com, bcd@yxz.com"
to_arr = []

values = addr.split(",")
values.each do |value|
  to_arr << value.strip
end
puts to_arr
