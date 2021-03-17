# based on https://viewsourcecode.org/why/hacking/seeingMetaclassesClearly.html
require_relative 'metaid'
class MailTruck
  attr_accessor :driver, :route
  def initialize( driver, route )
    @driver, @route = driver, route
  end
end
