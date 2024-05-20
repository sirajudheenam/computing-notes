require('json')
response = { 'error' => 'sample error message' }
puts response
p response.class
hash_response = JSON.dump(response)
p hash_response.class
puts response
parsed_response = JSON.parse(hash_response)
p parsed_response
p p parsed_response.class

def mine
  puts 'this is world'
end
begin
  rawHash = { hello: 'world' }
  rawString = JSON.dump(rawHash)
  abc = JSON.parse(rawString)
rescue JSON::ParserError => e
  p e.inspect
  p e.message
end
p abc
