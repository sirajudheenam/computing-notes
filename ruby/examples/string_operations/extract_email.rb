line_num=0
text=File.open('data/20_3_email_list.txt').read
text.gsub!(/\r\n?/, "\n")
new_text = " "
text.each_line do |line|
  # print "#{line_num += 1} #{line}"
  # new_text = new_text.concat(line.chomp)
  new_text << line.chomp
end
print new_text