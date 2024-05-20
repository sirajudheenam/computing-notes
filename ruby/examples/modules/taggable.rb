module Taggable
  def tags
    @tags ||= []
  end

  def add_tag(new_tag)
    tags << new_tag
  end

  def get_all_tags
    tags
  end

  def tag_count
    tags.count
  end
end
