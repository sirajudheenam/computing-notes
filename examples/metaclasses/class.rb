class Class
  def attr_abort( *args )
    abort "Please no more attributes today."
  end
end

class MyNewClass
  attr_abort :id, :diagram, :telegram
end
