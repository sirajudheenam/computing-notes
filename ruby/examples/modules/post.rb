require_relative 'taggable'

class Post
  include Taggable

  def initialize(content, user)
    @content = content
    @user = user
  end

  def print_post_summary
    puts "By user: #{@user}"
    puts "Article: #{@content}"
    # We can use methods defined on the module
    puts "Tags: #{get_all_tags}"
  end
end
