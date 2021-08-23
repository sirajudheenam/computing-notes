
def contains_vowel(str)
  str =~ /[aeiou]/
end

def contains_number(str)
  str =~ /[0-9]/
end

p contains_vowel("test")
p contains_vowel("sky")

p contains_number("The year is 2015")
p contains_number("The cat is black")



# There is a nice shorthand syntax for specifying character ranges:
# \w is equivalent to [0-9a-zA-Z_]
# \d is the same as [0-9]
# \s matches white space (tabs, regular space, newline)

# There is also the negative form of these:

# \W anything that\’s not in [0-9a-zA-Z_]
# \D anything that\’s not a number
# \S anything that\’s not a space

# If we don\'t escape, the letter will match

puts "5a5".match(/\d.\d/) #
  # In this case only the literal dot matches
puts "5a5".match(/\d\.\d/)
puts "5.5".match(/\d\.\d/) # match
puts "5.5".match(/\d.\d/) # match

# Note that this will also match some invalid IP address
# like 999.999.999.999, but in this case we just care about the format.
def ip_address?(str)
  # We use !! to convert the return value to a boolean
  !!(str =~ /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/)
end
puts ip_address?("192.168.1.1")  # returns true
puts ip_address?("0000.0000")    # returns false


email_addr = ["abc-cdk_abc@xyz.com","klmnop"]
# email_regex =~ /\w@\w.[a-zA-Z]/
#  /^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/i
def is_valid_email?(str)
# To return true or false - Add !!
	!!str =~ /[\w]*@+[\w]*\.[a-zA-Z]*/
	# !!str =~ /^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/i

end

email_addr.each do |email|
	p email.match(/[\w-]*/)
	# if is_valid_email?(email)
	# 	puts "#{email} is valid"
	# else
	# 	puts "#{email} is invalid"
	# end
end


Line = Struct.new(:time, :type, :msg)
LOG_FORMAT = /(\d{2}:\d{2}) (\w+) (.*)/
def parse_line(line)
  line.match(LOG_FORMAT) { |m| Line.new(*m.captures) }
end
puts parse_line("12:41 INFO User has logged in.")
("13:41 WARNING It is a warning message.").match(/(\d{2}:\d{2}) (\w+) (.*)/) { |m| puts *m.captures , m.inspect}

puts "?<label> named groups"
("14:41 ERROR Error appeared as a magic.").match(/(?<timestamp>\d{2}:\d{2}) (?<type>\w+) (?<msg>.*)/) { |m| puts m.inspect}
("14:41 ERROR Error appeared as a magic.").match(/(?<timestamp>\d{2}:\d{2}) (?<type>\w+) (?<msg>.*)/) { |m| puts *m.captures, m[:timestamp], m[:type], m[:msg] }


puts /a/.class
# Creating a regex
regexp = Regexp.new("a")
puts regexp.class
# Another way to create a regex
regexp = %r{\w+}
puts regexp.class

# Name 		Description
# (?=pat) 	Positive lookahead
# (?<=pat) 	Positive lookbehind
# (?!pat) 	Negative lookahead
# (?<!pat) 	Negative lookbehind


def number_after_word?(str)
  !!(str =~ /(?<=\w) (\d+)/)
end
p number_after_word?("Grade 99")

def word_after_number?(str)
  !!(str =~ /(\d+) (?=\w)/)
end
p word_after_number?("99 RABc")


# https://ruby-doc.org/core-2.4.0/MatchData.html
# https://www.formget.com/regular-expression-for-email/
