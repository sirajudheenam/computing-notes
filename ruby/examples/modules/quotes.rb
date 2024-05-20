require_relative 'taggable'

class Quotes
  include Taggable

  def initialize
    @quotes = []
  end

  def add_quote(quote)
    @quotes << quote
  end

  def print_all_quotes
    puts "The following quotes are classified as #{get_all_tags.join(', ')}:"
    @quotes.each do |quote|
      puts quote
    end
  end
end
