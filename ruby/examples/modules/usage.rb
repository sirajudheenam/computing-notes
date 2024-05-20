require_relative 'post'
require_relative 'quotes'

# ...previous taggable usage

quotes = Quotes.new
quotes.add_tag('bullshit')
quotes.add_tag('pseudointellectual ')

quotes.add_quote('Wholeness unfolds through species specific marvel')
quotes.add_quote('The mind creates spontaneous happiness')
quotes.add_quote('The ego is an ingredient of the flow of balance')
quotes.add_quote('Perception fears karmic success')

quotes.print_all_quotes

post = Post.new('Elizabeth', 'John Doe')
post.add_tag 'history'

post.print_post_summary
