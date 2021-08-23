
class PlainEmail
  Email = Struct.new(:encoding, :source, :to_addr, :cc_addr, :bcc_addr, :subject, :htmlbody, :textbody)
  attr_accessor :email
  def initialize(opts)
    @email = Email.new(opts[:encoding], opts[:source], opts[:to_addr], opts[:cc_addr], opts[:bcc_addr], opts[:subject], opts[:htmlbody], opts[:textbody] )
  end
end

def new_email(attributes = {})
  email = PlainEmail.new(attributes)
end

plain_email = PlainEmail.new( {
  encoding: "UTF-8",
  source: "sirajudheenam@gmail.com",
  to_addr: "sirajudheenam@gmail.com, sirajudheenam@gmail.com, sirajudheenam@gmail.com",
  cc_addr: "V4abc@xyz1.com, V3abc@xyz2.com, V2abc@xyz3.com, V1abc@xyz4.com",
  bcc_addr: "P1abc@xyz1.com, P2abc@xyz2.com, P3abc@xyz3.com, P4abc@xyz4.com",
  # to_addr: [ "sirajudheenam@gmail.com", "sirajudheenam@gmail.com", "sirajudheenam@gmail.com" ],
  # cc_addr: ["V4abc@xyz1.com", "V3abc@xyz2.com", "V2abc@xyz3.com", "V1abc@xyz4.com"],
  # bcc_addr: ["P1abc@xyz1.com", "P2abc@xyz2.com", "P3abc@xyz3.com", "P4abc@xyz4.com"] ,
  subject: "Miracle Subject",
  htmlbody: "<h1> HTML Body</h1>",
  textbody: "Text Body",
})


def addr_validate(raw_addr)
  unless raw_addr.empty?
    values = raw_addr.split(",")
    addr = []
    values.each do |value|
      addr << value.strip
      # @email_addr_count =  @email_addr_count + 1
    end
    return addr
  end
  return []
end

def email_to_array(plain_email)
  plain_email.email.to_addr= addr_validate(plain_email.email.to_addr)
  plain_email.email.cc_addr= addr_validate(plain_email.email.cc_addr)
  plain_email.email.bcc_addr= addr_validate(plain_email.email.bcc_addr)
  plain_email
end

email1 = email_to_array(plain_email)
puts email1.inspect

# puts plain_email.inspect + ""
# puts plain_email.email.to_addr
